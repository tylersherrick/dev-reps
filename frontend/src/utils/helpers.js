export function countCorrectCharacters(expected, typed) {
  let correct = 0;

  const length = Math.min(expected.length, typed.length);

  for (let i = 0; i < length; i++) {
    if (expected[i] === typed[i]) {
      correct++;
    }
  }

  return correct;
}

export function countMistakes(expected, typed) {
  let mistakes = 0;

  const length = Math.min(expected.length, typed.length);

  for (let i = 0; i < length; i++) {
    if (expected[i] !== typed[i]) {
      mistakes++;
    }
  }

  return mistakes;
}

export function calculateAccuracy(expected, typed) {
  if (typed.length === 0) {
    return 100;
  }

  const correct = countCorrectCharacters(expected, typed);

  return Math.round((correct / typed.length) * 100);
}

export function calculateProgress(expected, typed) {
  if (expected.length === 0) {
    return 0;
  }

  return Math.round((typed.length / expected.length) * 100);
}

export function calculateWPM(charactersTyped, secondsElapsed) {
  if (secondsElapsed <= 0) {
    return 0;
  }

  const minutes = secondsElapsed / 60;

  return Math.round((charactersTyped / 5) / minutes);
}