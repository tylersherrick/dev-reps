import { useEffect, useMemo, useState } from "react";
import exercises from "../data/exercises/index";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Progress from "../components/Progress";
import TypingArea from "../components/TypingArea";
import Character from "../components/Character";
import {
  calculateAccuracy,
  calculateWPM,
  countCorrectCharacters,
  countMistakes,
} from "../utils/helpers";

function Home() {
  const [language, setLanguage] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const languageMatch =
        language === "All" || exercise.language === language;

      const difficultyMatch =
        difficulty === "All" || exercise.difficulty === difficulty;

      return languageMatch && difficultyMatch;
    });
  }, [language, difficulty]);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [started]);

  useEffect(() => {
    if (typed.length > 0 && !started) {
      setStarted(true);
    }
  }, [typed, started]);

  useEffect(() => {
    if (
      language === "All" &&
      filteredExercises.length > 0
    ) {
      setExerciseIndex(
        Math.floor(
          Math.random() * filteredExercises.length
        )
      );
    } else {
      setExerciseIndex(0);
    }
  }, [language, difficulty, filteredExercises.length]);

  const currentExercise =
    filteredExercises.length > 0
      ? filteredExercises[
          exerciseIndex % filteredExercises.length
        ]
      : null;

  function resetTyping() {
    setTyped("");
    setSeconds(0);
    setStarted(false);
  }

  function nextExercise() {
    if (!currentExercise) return;
    if (typed !== currentExercise.code) return;

    resetTyping();

    if (language === "All") {
      if (filteredExercises.length === 1) {
        return;
      }

      let randomIndex;

      do {
        randomIndex = Math.floor(
          Math.random() * filteredExercises.length
        );
      } while (randomIndex === exerciseIndex);

      setExerciseIndex(randomIndex);
      return;
    }

    setExerciseIndex((value) =>
      value + 1 >= filteredExercises.length
        ? 0
        : value + 1
    );
  }

  function skipExercise() {
    if (!currentExercise) return;

    resetTyping();

    if (language === "All") {
      if (filteredExercises.length === 1) {
        return;
      }

      let randomIndex;

      do {
        randomIndex = Math.floor(
          Math.random() * filteredExercises.length
        );
      } while (randomIndex === exerciseIndex);

      setExerciseIndex(randomIndex);
      return;
    }

    setExerciseIndex((value) =>
      value + 1 >= filteredExercises.length
        ? 0
        : value + 1
    );
  }

  function handleLanguage(value) {
    setLanguage(value);
    resetTyping();
  }

  function handleDifficulty(value) {
    setDifficulty(value);
    resetTyping();
  }

  if (!currentExercise) {
    return (
      <main>
        <Header />

        <Filters
          language={language}
          setLanguage={handleLanguage}
          difficulty={difficulty}
          setDifficulty={handleDifficulty}
        />

        <h2>No exercises found.</h2>
      </main>
    );
  }

  const correctCharacters = countCorrectCharacters(
    currentExercise.code,
    typed
  );

  const mistakes = countMistakes(
    currentExercise.code,
    typed
  );

  const accuracy = calculateAccuracy(
    currentExercise.code,
    typed
  );

  const wpm = calculateWPM(
    correctCharacters,
    seconds
  );

  const completed = typed === currentExercise.code;

  return (
    <main>
      <div className="exercise-content">
        <Header />

        <Filters
          language={language}
          setLanguage={handleLanguage}
          difficulty={difficulty}
          setDifficulty={handleDifficulty}
        />

        <Progress
          current={exerciseIndex + 1}
          total={filteredExercises.length}
          typedCharacters={typed.length}
          totalCharacters={currentExercise.code.length}
        />

        <h2>{currentExercise.title}</h2>

        <p>
          <strong>{currentExercise.language}</strong> •{" "}
          {currentExercise.category} •{" "}
          {currentExercise.difficulty}
        </p>

        <p style={{ margin: "12px 0" }}>
          {currentExercise.description}
        </p>

        <pre>
          <code>
            {currentExercise.code
              .split("")
              .map((character, index) => (
                <Character
                  key={index}
                  expected={character}
                  typed={typed[index]}
                />
              ))}
          </code>
        </pre>

        <TypingArea
          value={typed}
          setValue={setTyped}
        />

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong>Correct:</strong>{" "}
            {correctCharacters} /{" "}
            {currentExercise.code.length}
          </div>

          <div>
            <strong>Mistakes:</strong>{" "}
            {mistakes}
          </div>

          <div>
            <strong>Accuracy:</strong>{" "}
            {accuracy}%
          </div>

          <div>
            <strong>Time:</strong>{" "}
            {seconds}s
          </div>

          <div>
            <strong>WPM:</strong>{" "}
            {wpm}
          </div>
        </div>

        {!completed && (
          <div style={{ height: "44px" }} />
        )}

        {completed && (
          <p
            style={{
              color: "#22c55e",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Exercise Complete!
          </p>
        )}
      </div>

      <div className="button-row">
        <button
          disabled={!completed}
          onClick={nextExercise}
        >
          Next Exercise
        </button>

        <button onClick={skipExercise}>
          Skip
        </button>
      </div>
    </main>
  );
}

export default Home;