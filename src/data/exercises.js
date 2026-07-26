export function createExercise({
  id,
  language,
  category,
  difficulty,
  title,
  description,
  fileName,
  code,
}) {
  return {
    id,
    language,
    category,
    difficulty,
    title,
    description,
    fileName,
    code,
  };
}