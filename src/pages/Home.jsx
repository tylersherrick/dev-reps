import { useEffect, useMemo, useState } from "react";
import exercises from "../data/exercises/index";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Progress from "../components/Progress";
import TypingArea from "../components/TypingArea";
import ExerciseDetails from "../components/ExerciseDetails";
import ExerciseCode from "../components/ExerciseCode";
import ExerciseStats from "../components/ExerciseStats";
import ExerciseResults from "../components/ExerciseResults";
import ExerciseButtons from "../components/ExerciseButtons";
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
  const [paused, setPaused] = useState(false);

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
    if (!started || paused) return;

    const interval = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [started, paused]);

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
    setPaused(false);
  }

  function nextExercise() {
    if (!currentExercise) return;
    if (typed !== currentExercise.code) return;

    resetTyping();

    if (language === "All") {
      if (filteredExercises.length === 1) return;

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
      if (filteredExercises.length === 1) return;

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
  const typingProgress = (typed.length / currentExercise.code.length) * 100;

  return (
    <main>
      <div className="exercise-content">
        <Header />

        <div className="top-toolbar">
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
        </div>

        <div className="exercise-progress-bar">
          <div
            className="exercise-progress-fill"
            style={{ width: `${typingProgress}%` }}
          />

          <div
            className="exercise-progress-marker"
            style={{ left: `${typingProgress}%` }}
          >
            {Math.round(typingProgress)}%
          </div>
        </div>

        <ExerciseDetails
          exercise={currentExercise}
        />

        <ExerciseCode
          code={currentExercise.code}
          typed={typed}
        />

        <TypingArea
          value={typed}
          setValue={setTyped}
          disabled={paused}
          onPause={() => setPaused(true)}
        />

        <ExerciseStats
          correctCharacters={correctCharacters}
          totalCharacters={currentExercise.code.length}
          mistakes={mistakes}
          accuracy={accuracy}
          seconds={seconds}
          wpm={wpm}
        />

        <ExerciseResults
          paused={paused}
          completed={completed}
          correctCharacters={correctCharacters}
          totalCharacters={currentExercise.code.length}
          mistakes={mistakes}
          accuracy={accuracy}
          seconds={seconds}
          wpm={wpm}
          onResume={() => setPaused(false)}
          onSkip={skipExercise}
          onNext={nextExercise}
        />
      </div>

      {!paused && (
        <ExerciseButtons
          completed={completed}
          onNext={nextExercise}
          onSkip={skipExercise}
        />
      )}
    </main>
  );
}

export default Home;