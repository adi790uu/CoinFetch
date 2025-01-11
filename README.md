# CoinFetch

A robust cryptocurrency data aggregation service that fetches and stores real-time cryptocurrency data using the CoinGecko API. Built with Node.js, Express, TypeScript, and MongoDB.

## Features

- Real-time cryptocurrency data fetching
- Automated data updates using cron jobs
- RESTful API endpoints for data access
- MongoDB integration for data persistence
- TypeScript for enhanced type safety
- Graceful server shutdown handling

## Tech Stack 🛠️

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **API Integration**: CoinGecko API
- **Scheduling**: node-cron
- **HTTP Client**: Axios

## Prerequisites

Before running the application, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running
- npm or yarn package manager

## Installation 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/coinfetch.git
   cd coinfetch
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   COINGECKO_API_KEY=add_you_coingecko_api_key
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Start the server:
   ```bash
   npm start
   ```

For development:

```bash
npm run dev
```

## Project Structure 📁

```
src/
├── controllers/     # Request handlers
├── core/           # Core functionality and configurations
├── external/       # External API integrations
├── model/         # Database models
├── router/        # API routes
├── service/       # Business logic
├── types/         # TypeScript type definitions
└── index.ts       # Application entry point
```

## API Endpoints 🌐

- `GET /` - Welcome message
- `POST /api/crypto` - Fetch cryptocurrency data
  ```json
  {
    "coin": "bitcoin" // (suppported coins => bitcoin, ethereum, matic-network)
  }
  ```
- `POST /api/deviation` - Fetch deviation in a cryptocurrency (based on latest 100 records)
  ```json
  {
    "coin": "bitcoin" // (suppported coins => bitcoin, ethereum, matic-network)
  }
  ```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
