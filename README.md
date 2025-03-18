# ⏳ Timestamp Microservice

This is a simple microservice that returns Unix timestamps and UTC formatted date strings based on user input.

## 🚀 Features
- Accepts both Unix timestamps and natural date strings as input.
- Returns a JSON object with Unix and UTC timestamps.
- Provides the current timestamp if no date is supplied.
- Handles invalid date inputs gracefully.

## 🛠️ Tech Stack
- **Node.js** + **Express.js** for backend API handling.
- **CORS** enabled for cross-origin requests.
- Deployed using **Gitpod/FreeCodeCamp environment**.

## 📌 API Endpoints

### `GET /api/:date?`
#### 📥 Input:
- `date` (Optional): A Unix timestamp (milliseconds) or a date string (YYYY-MM-DD).

#### 📤 Output:
A JSON object containing:
```json
{
  "unix": 1640995200000,
  "utc": "Sat, 01 Jan 2022 00:00:00 GMT"
}
```

### Example Requests:
| Request | Response |
|---------|---------|
| `/api/2015-12-25` | `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }` |
| `/api/1451001600000` | `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }` |
| `/api` | Current Date |
| `/api/invalid-date` | `{ "error": "Invalid Date" }` |

## ⚙️ Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/timestamp-microservice.git
   cd timestamp-microservice
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Visit in browser or test with:
   ```bash
   curl http://localhost:3000/api/2023-03-15
   ```

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

