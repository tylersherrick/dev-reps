function Exercise({ exercise }) {
  return (
    <>
      <h2>{exercise.title}</h2>

      <p>{exercise.category}</p>

      <pre>
        <code>{exercise.code}</code>
      </pre>
    </>
  );
}

export default Exercise;