/**
 * The URL for the data. The data always changges, but the URL stays a constant.
 */
export const SALARY_DATA_URL = "/api/swe/data.html";
/**
 * 
 * @returns A method to fetch the URL data. It returns a promise containing the text of the returned data, otherwise it will throw an error staying that the data fetch was not successful.
 */
export async function fetchSalaryHtml(): Promise<string> {
  const response = await fetch(SALARY_DATA_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch salary data: ${response.status}`);
  }

  return response.text();
}
