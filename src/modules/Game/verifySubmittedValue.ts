// The maximum number of characters that exist in the game is 22
const MAX_CHARACTER_LENGTH = 22

// The minimum number of characters is 4
const MIN_CHARACTER_LENGTH = 4

export const verifySubmittedValue = (inputValue: string | undefined, centerLetter: string) => {
  if (!inputValue) {
    return { error: 'Enter a word!' }
  }

  if (inputValue.length > MAX_CHARACTER_LENGTH) {
    return { error: 'Too many characters!' }
  }

  if (inputValue.length < MIN_CHARACTER_LENGTH) {
    return { error: 'Too few characters!' }
  }

  if (!inputValue.includes(centerLetter)) {
    return { error: `Must include the letter ${centerLetter}!` }
  }

  return { isValid: true }
}
