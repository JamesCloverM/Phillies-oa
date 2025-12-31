import { useEffect, useState } from "react";
import { fetchSalaries } from "./utils/fetchSalaries";
import { calculateQualifyingOffer } from "./utils/calculateQualifyingOffer";
import "./App.css";
/**
 * A method to convert the number into a correct salary format.
 * @param value A salary value (a number)
 * @returns Returns the input number formatted to a readable salary.
 */
function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

/**
 * The main application
 * @returns 
 */
export default function App() {
  const [qualifyingOffer, setQualifyingOffer] = useState<number | null>(null);
  const [salaryCount, setSalaryCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


// handles the loading of the salaries and the settting of the qualifying offer
  useEffect(() => {
    async function load() {
      try {
        const salaries = await fetchSalaries();
        setSalaryCount(salaries.length);
        const value = calculateQualifyingOffer(salaries);
        setQualifyingOffer(value);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  /**
   * Returns JSX handling the loading and displaying of the data
   */
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>MLB Qualifying Offer Calculator</h1>

      {loading && <p>Loading salary data…</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {qualifyingOffer && (
        <>
          <h2>The qualifying offer amount is: {formatCurrency(qualifyingOffer)}</h2>
          <h6>
            This data has been calculated from {salaryCount} total valid MLB salaries, including only the top 125 salaries.
          </h6>
        </>
      )}
    </div>
  );
}
