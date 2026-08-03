const LANGUAGES = [
  "All",
  "JavaScript",
  "React",
  "Express",
  "HTML",
  "CSS",
  "SQL",
];

const DIFFICULTIES = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

function Filters({
  language,
  setLanguage,
  difficulty,
  setDifficulty,
  questions,
  question,
  setQuestion,
}) {
  return (
    <section className="filters">
      <select
        id="language"
        value={language}
        onChange={(event) =>
          setLanguage(event.target.value)
        }
      >
        {LANGUAGES.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item === "All" ? "All Languages" : item}
          </option>
        ))}
      </select>

      <select
        id="difficulty"
        value={difficulty}
        onChange={(event) =>
          setDifficulty(event.target.value)
        }
      >
        {DIFFICULTIES.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item === "All"
              ? "Mixed Difficulty"
              : item}
          </option>
        ))}
      </select>

      <select
        id="question"
        value={question}
        disabled={language === "All"}
        onChange={(event) =>
          setQuestion(event.target.value)
        }
      >
        <option value="All">
          {language === "All"
            ? "Select Language First"
            : "Question"}
        </option>

        {questions.map((item, index) => (
          <option
            key={item.value}
            value={item.value}
          >
            {language} #{index + 1}
          </option>
        ))}
      </select>
    </section>
  );
}

export default Filters;