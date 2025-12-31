/**
 * A method to calculate the qualifying offer (The average of the top 125 salaries).
 * @param salaries - An array of numbers.
 * @returns  Returns the average of the input array of numbers. Can throw an error if we do not have at least 125 salaries (needed for the qualifying offer)
 */
export function calculateQualifyingOffer(salaries: number[]): number {
  if (salaries.length < 125) {
    throw new Error(
      `Expected at least 125 salaries, found ${salaries.length}`
    );
  }

  const top125 = salaries
    .sort((a, b) => b - a)
    .slice(0, 125);

  const total = top125.reduce((sum, s) => sum + s, 0);
  return total / 125;
}
