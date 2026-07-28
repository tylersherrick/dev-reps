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
            {item === "All" ? "Language" : item}
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
              ? "Difficulty"
              : item}
          </option>
        ))}
      </select>
    </section>
  );
}

export default Filters;