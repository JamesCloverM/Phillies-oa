import { fetchSalaryHtml } from "../api/salaryApi";

/**
 * A method to fetch and parse the salary data. Adds some error checking, and skipping of rows that do not contain salary information.
 * @returns A promise of type number array containing the salaries needed to calculate the qualifying offer.
 */
export async function fetchSalaries(): Promise<number[]> {
  const html = await fetchSalaryHtml();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const salaries: number[] = [];
  const rows = Array.from(doc.querySelectorAll("table tbody tr"));

  for (const row of rows) {
    const cells = row.querySelectorAll("td");
    if (cells.length < 4) continue;

    const salaryText = cells[1].textContent?.trim();
    const levelText = cells[3].textContent?.trim();

    if (levelText !== "MLB") continue;
    if (!salaryText || salaryText === "no salary data") continue;

    const cleaned = salaryText.replace(/[$,]/g, "");
    const salary = Number(cleaned);

    if (!Number.isNaN(salary)) {
      salaries.push(salary);
    }
  }

  return salaries;
}
