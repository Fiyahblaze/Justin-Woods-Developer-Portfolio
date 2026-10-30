# Justin Woods | Developer Portfolio

My personal portfolio showcases my projects, technical skills, résumé, and background in operations, financial services, and entrepreneurship.

I built this project using the methods I learned during the Per Scholas Software Engineering program. I wanted a place where recruiters and other developers could learn about me and explore my work.

## Features

- Responsive layout for mobile, tablet, and desktop
- Featured projects with GitHub repository links
- About section describing my background
- Skills organized by frontend, backend, and tools
- Résumé preview and download
- Email, LinkedIn, and GitHub contact links
- Keyboard focus indicators and reduced-motion support
- Custom JW favicon

## Technologies

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express
- Mongoose
- dotenv
- CORS
- Morgan
- nodemon

## Featured Projects

- **ToolShare:** A community tool-sharing application with authentication, listings, and borrowing requests.
- **IP Address Tracker:** An IP lookup application with an interactive map.
- **Zenith Product API:** A product API supporting CRUD operations, filtering, sorting, and pagination.

The project cover images are concept illustrations rather than screenshots of the applications.

## Project Structure

```text
developer-portfolio/
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   ├── resume/
│   │   └── favicon.svg
│   └── src/
│       └── components/
│           ├── layout/
│           ├── sections/
│           └── ui/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
└── README.md
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/Fiyahblaze/Justin-Woods-Developer-Portfolio.git
cd Justin-Woods-Developer-Portfolio
```

### Frontend

```bash
cd frontend
npm ci
npm run dev
```

Open the local URL displayed by Vite, usually http://localhost:5173.

### Backend

Open a second terminal from the repository's main folder:

```bash
cd backend
npm ci
cp .env.example .env
npm run dev
```

The backend runs at http://localhost:3001 when `PORT=3001`.

### Production Build

From the frontend folder:

```bash
npm run build
npm run preview
```

## Backend Status

The Express backend currently includes a server status route and error-handling middleware.

The frontend currently uses project information stored directly in React components and does not call the backend. Mongoose is installed, but the MongoDB connection and project API have not been implemented.

## What I Practiced

- Building reusable React components
- Defining component props with TypeScript
- Creating responsive layouts with Tailwind CSS
- Setting up an Express server and middleware
- Troubleshooting file paths and component markup
- Making regular Git commits throughout development

## Contact

- Email: [jwoodsinc@msn.com](mailto:jwoodsinc@msn.com)
- LinkedIn: [Justin Woods](https://www.linkedin.com/in/justin-gj-woods/)
- GitHub: [Fiyahblaze](https://github.com/Fiyahblaze)