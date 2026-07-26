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
}) {
  return (
    <section className="filters">
      <div className="filter-group">
        <label htmlFor="language">
          Language
        </label>

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
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="difficulty">
          Difficulty
        </label>

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
              {item}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default Filters;