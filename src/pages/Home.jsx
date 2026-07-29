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
  const [question, setQuestion] = useState("All");
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  const [typed, setTyped] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const languageMatch =
        language === "All" || exercise.language === language;

      const difficultyMatch =
        difficulty === "All" ||
        exercise.difficulty === difficulty;

      return languageMatch && difficultyMatch;
    });
  }, [language, difficulty]);

  const questions = useMemo(() => {
    return filteredExercises.map((exercise, index) => ({
      label: `${exercise.language} #${index + 1}`,
      value: exercise.id,
    }));
  }, [filteredExercises]);

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
    if (question !== "All") return;

    if (
      language === "All" &&
      filteredExercises.length > 0
    ) {
      const randomExercise =
        filteredExercises[
          Math.floor(
            Math.random() * filteredExercises.length
          )
        ];

      setSelectedExerciseId(randomExercise.id);
    } else if (filteredExercises.length > 0) {
      setSelectedExerciseId(filteredExercises[0].id);
    }
  }, [
    language,
    difficulty,
    filteredExercises.length,
    question,
  ]);

  const currentExercise =
    filteredExercises.find(
      (exercise) =>
        exercise.id === selectedExerciseId
    ) || filteredExercises[0];

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
    setQuestion("All");

    const currentIndex =
      filteredExercises.findIndex(
        (exercise) =>
          exercise.id === currentExercise.id
      );

    const next =
      filteredExercises[
        currentIndex + 1 >= filteredExercises.length
          ? 0
          : currentIndex + 1
      ];

    setSelectedExerciseId(next.id);
  }

  function skipExercise() {
    if (!currentExercise) return;

    resetTyping();
    setQuestion("All");

    const currentIndex =
      filteredExercises.findIndex(
        (exercise) =>
          exercise.id === currentExercise.id
      );

    const next =
      filteredExercises[
        currentIndex + 1 >= filteredExercises.length
          ? 0
          : currentIndex + 1
      ];

    setSelectedExerciseId(next.id);
  }

  function handleLanguage(value) {
    setLanguage(value);
    setDifficulty("All");
    setQuestion("All");
    setSelectedExerciseId(null);
    resetTyping();
  }

  function handleDifficulty(value) {
    setDifficulty(value);
    setQuestion("All");
    setSelectedExerciseId(null);
    resetTyping();
  }

  function handleQuestion(value) {
    setQuestion(value);

    if (value === "All") {
      resetTyping();
      return;
    }

    setSelectedExerciseId(Number(value));
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
          questions={questions}
          question={question}
          setQuestion={handleQuestion}
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

  const typingProgress =
    (typed.length / currentExercise.code.length) * 100;

  const currentNumber =
    filteredExercises.findIndex(
      (exercise) =>
        exercise.id === currentExercise.id
    ) + 1;

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
            questions={questions}
            question={question}
            setQuestion={handleQuestion}
          />

          <Progress
            current={currentNumber}
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

        <ExerciseDetails exercise={currentExercise} />

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