import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [quote, setQuote] = useState({ content: "", author: "" });

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/quote");
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>✨ Quote Generator</h1>

      <motion.div
        key={quote.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.quoteCard}
      >
        <p style={styles.quoteText}>"{quote.content}"</p>
        <h4 style={styles.quoteAuthor}>— {quote.author || "Unknown"}</h4>
      </motion.div>

      <button onClick={fetchQuote} style={styles.button}>
        🔁 New Quote
      </button>

      <footer style={styles.footer}>
        Built by Adheeb • React + Express • 2025
      </footer>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    maxWidth: "700px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#1f2937",
  },
  quoteCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
  },
  quoteText: {
    fontSize: "1.4rem",
    fontStyle: "italic",
    color: "#374151",
  },
  quoteAuthor: {
    marginTop: "1rem",
    color: "#6b7280",
  },
  button: {
    padding: "0.75rem 2rem",
    fontSize: "1rem",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
  },
  footer: {
    marginTop: "3rem",
    fontSize: "0.9rem",
    color: "#9ca3af",
  },
};

export default App;
