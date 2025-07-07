# 🚀 Quote Generator App

A simple full-stack quote generator built using **React** (frontend) and **Express** (backend).  
It fetches inspirational quotes from a public API and displays them beautifully on the browser.

## 🔧 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Styling**: Inline CSS (custom)
- **API Source**: [Quotable.io](https://api.quotable.io/)

## 💡 Features

- Loads a random quote on page load
- Fetches a new quote on button click
- Full error handling on backend and frontend
- CORS-safe API via custom Express server

## 📦 How to Run Locally

1. Clone the repo  
   `git clone https://github.com/yourusername/quote-generator.git`

2. Install frontend dependencies  
   `npm install`

3. Start frontend dev server  
   `npm run dev`

4. Open new terminal tab → install backend dependencies  
   (You may need to run `npm install express cors`)

5. Start backend  
   `node server.js`

6. Visit: [http://localhost:5173](http://localhost:5173)

> ⚠️ This project bypasses SSL checks temporarily for local testing only.  
> Do not deploy with `NODE_TLS_REJECT_UNAUTHORIZED = "0"` in production.
