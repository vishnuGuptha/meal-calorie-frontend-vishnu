# 🚀 Next.js Frontend Setup Guide

This project is built using **Next.js**, a modern React framework for building fast and scalable web applications.

---

## ⚙️ Prerequisites

Before starting, make sure you have the following installed:

- **Node.js** (v18 or higher recommended) → [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A text editor like **VS Code**

📸 *Example — Check Node.js version:* 

---

## 🧭 Step 1: Navigate to the Project Directory

Open a terminal or VS Code terminal and navigate to the **frontend** folder:

```bash
cd meal-calorie-frontend-vishnu
```
## 🧭 📦 Step 2: Install Dependencies
Run the following command to install all required packages:

```bash
npm install
```

## ⚙️ Step 3: Setup Environment Variables

Inside the /meal-calorie-frontend-vishnu directory, create a file named .env.development (if not already present).
Add your base URL and other environment variables like this:

```bash
NEXT_PUBLIC_API_BASE_URL=[https://api.example.com](https://api.example.com)
```

## 🚀 Step 4: Start the Development Server

Run the app locally using:

```bash
npm run dev
```
You should see an output similar to:

ready - started server on http://localhost:3000

## 🌐 Step 5: Open in Browser

Once the server is running, open your browser and visit:

```bash
👉 [http://localhost:3000]
```

Your application should now be live locally.

## 🧾 Step 6: Available npm Scripts

Command,Description

```bash
npm run dev - Starts the development server
npm run build - Builds the app for production
npm run start - Runs the production build
npm run lint - Runs ESLint checks
```

## 📂 Step 7: Project Structure

```
frontend
├─ README.md
├─ components.json
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ src
│  ├─ app
│  │  ├─ (app)
│  │  │  └─ dashboard
│  │  │     └─ page.tsx
│  │  ├─ (auth)
│  │  │  ├─ login
│  │  │  │  └─ page.tsx
│  │  │  └─ register
│  │  │     └─ page.tsx
│  │  ├─ calories
│  │  │  └─ page.tsx
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ AuthForm.tsx
│  │  ├─ Brand.tsx
│  │  ├─ MealForm.tsx
│  │  ├─ NavBar.tsx
│  │  ├─ ResultCard.tsx
│  │  ├─ auth
│  │  │  ├─ LoginForm.tsx
│  │  │  └─ RegisterForm.tsx
│  │  ├─ calorie
│  │  │  ├─ CalorieForm.tsx
│  │  │  └─ ResultsList.tsx
│  │  ├─ theme-provider.tsx
│  │  ├─ theme-toggle.tsx
│  │  └─ ui
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ separator.tsx
│  │     ├─ skeleton.tsx
│  │     └─ sonner.tsx
│  ├─ lib
│  │  ├─ api.ts
│  │  ├─ auth.ts
│  │  └─ utils.ts
│  ├─ store
│  │  ├─ auth.ts
│  │  └─ meals.ts
│  ├─ stores
│  │  ├─ authStore.ts
│  │  └─ mealStore.ts
│  └─ types
│     └─ index.ts
└─ tsconfig.json

```

## 💬 Step 9: Support

If you face any issues setting up or running the project, please reach out via email or message for assistance.

Author: Vishnu Gupta
Framework: Next.js 14+
Email: vishnugupta28899@gmail.com 
Portfolio: [https://vishnudev.netlify.app/]