function ExerciseDetails({ exercise }) {
  return (
    <>
      <h2>{exercise.title}</h2>

      <p>
        <strong>{exercise.language}</strong> •{" "}
        {exercise.category} •{" "}
        {exercise.difficulty}
      </p>

      <div className="exercise-description">
        <p>{exercise.description}</p>
      </div>
    </>
  );
}

export default ExerciseDetails;