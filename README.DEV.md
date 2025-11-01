# Development notes

This project uses Vite. After cloning, install dependencies and add the router package:

```powershell
npm install
npm install react-router-dom
npm run dev
```

If your backend API is a Spring Boot application, set the API base URL in an environment variable when running Vite (for example in PowerShell):

```powershell
$env:VITE_API_BASE = 'http://localhost:8080'; npm run dev
```

The app expects `VITE_API_BASE` for API calls; otherwise it defaults to `http://localhost:8080`.

Files added in this branch:

- `src/components/` — Navbar, Footer, Button, CountdownTimer, EventCard
- `src/pages/` — Home, Dashboard
- `src/api/api.js` — minimal GET/POST helper

Adjust or extend components and styles as needed.
