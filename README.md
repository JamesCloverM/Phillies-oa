# MLB Qualifying Offer Calculator for The Philadelphia Phillies

A Phillies-themed React application that calculates the MLB qualifying offer based on the top 125 player salaries.  

It fetches salary data from a salary API endpoint, calculates the top 125 average, and displays it in a clean, Philadelphia Phillies-themed interface.

---

## Features

- Fetches salary data from `https://questionnaire-148920.appspot.com/swe/data.html`
- Calculates the top 125 salaries average (the qualifying offer)
- Displays in a Phillies-themed UI with red, navy, and white styling
- Clean, easy to read, but basic and with room for improvements.

---

## Getting Started

Please follow these instructions to get a copy of the project running locally for testing.

### Prerequisites

- Node.js (v18 or newer)
- npm (comes with Node.js)
- Git

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/<JamesCloverM>/<Phillies-oa>.git

```

  2. Change your directory to the newly cloned repository.
  ```bash
    cd <Phillies-oa>
```
3. Install dependencies
  ```bash
  npm install
  ```

### Running the App Locally

```bash
npm run dev
```
This will run the vite dev server, and provide a URL, likely local host (e.g., http://localhost:5173/)

### Project Structure
```bash 
/src
  /api
    salaryAPI.ts                # Modular API to provide salary data
  /utils
    fetchSalaries.ts            # Fetches salary data from API
    calculateQualifyingOffer.ts # Calculates the top 125 average salaries
  App.tsx                       # The main App component
  App.css                        # Basic Phillies-themed component styles
  index.tsx                      # The App entry point
  index.css                       # The Global styles
  ```

