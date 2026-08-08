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
import Streak from "../components/Streak";

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
  const [lastCompleted, setLastCompleted] = useState(false);
  const [exerciseView, setExerciseView] = useState("learn");

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
      value: index,
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

    if (filteredExercises.length > 0) {
      if (language === "All") {
        const randomExercise =
          filteredExercises[
            Math.floor(
              Math.random() * filteredExercises.length
            )
          ];

        setSelectedExerciseId(randomExercise.id);
      } else {
        setSelectedExerciseId(filteredExercises[0].id);
      }
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

  function completeExercise() {
    const today = new Date().toDateString();

    const savedData =
      JSON.parse(
        localStorage.getItem("devRepsProgress")
      ) || {
        streak: 0,
        lastCompleted: null,
      };

    if (savedData.lastCompleted === today) {
      return;
    }

    const yesterday = new Date();

    yesterday.setDate(
      yesterday.getDate() - 1
    );

    const newStreak =
      savedData.lastCompleted === yesterday.toDateString()
        ? savedData.streak + 1
        : 1;

    localStorage.setItem(
      "devRepsProgress",
      JSON.stringify({
        streak: newStreak,
        lastCompleted: today,
      })
    );
  }

  function nextExercise() {
    if (!currentExercise) return;
    if (typed !== currentExercise.code) return;

    resetTyping();

    const currentIndex =
      filteredExercises.findIndex(
        (exercise) =>
          exercise.id === currentExercise.id
      );

    const nextIndex =
      currentIndex + 1 >= filteredExercises.length
        ? 0
        : currentIndex + 1;

    const next = filteredExercises[nextIndex];

    setSelectedExerciseId(next.id);
    setQuestion(String(nextIndex));
  }

  function skipExercise() {
    if (!currentExercise) return;

    resetTyping();

    if (
      language === "All" &&
      question === "All"
    ) {
      if (filteredExercises.length <= 1) return;

      let randomExercise;

      do {
        randomExercise =
          filteredExercises[
            Math.floor(
              Math.random() * filteredExercises.length
            )
          ];
      } while (
        randomExercise.id === currentExercise.id
      );

      setSelectedExerciseId(randomExercise.id);
      return;
    }

    const currentIndex =
      filteredExercises.findIndex(
        (exercise) =>
          exercise.id === currentExercise.id
      );

    const nextIndex =
      currentIndex + 1 >= filteredExercises.length
        ? 0
        : currentIndex + 1;

    const next = filteredExercises[nextIndex];

    setSelectedExerciseId(next.id);
    setQuestion(String(nextIndex));
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

    const selectedExercise =
      filteredExercises[Number(value)];

    setSelectedExerciseId(selectedExercise.id);
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

      <div className="stats-toolbar">
        <Progress
          current={currentNumber}
          total={filteredExercises.length}
          typedCharacters={typed.length}
          totalCharacters={currentExercise.code.length}
        />

        <Streak />
      </div>
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

    <div className="exercise-tabs-row">
      <div></div>

      <div className="exercise-tabs">
        <button
          className={exerciseView === "learn" ? "" : "inactive-tab"}
          onClick={() => setExerciseView("learn")}
        >
          Learn
        </button>

        <button
          className={exerciseView === "play" ? "" : "inactive-tab"}
          onClick={() => setExerciseView("play")}
        >
          Play
        </button>
      </div>
    </div>

    <div className="exercise-layout">
      <div className="typing-panel">
        <TypingArea
          value={typed}
          setValue={setTyped}
          disabled={paused}
          onPause={() => setPaused(true)}
        />
      </div>

      <div className="exercise-panel">
        <ExerciseCode
          code={currentExercise.code}
          typed={typed}
        />
      </div>
    </div>

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
      onComplete={completeExercise}
    />

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