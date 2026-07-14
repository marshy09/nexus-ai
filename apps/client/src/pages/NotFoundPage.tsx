import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#020617",
        color: "white",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
          }}
        >
          404
        </h1>

        <p>Page not found.</p>

        <Link
          to="/"
          style={{
            marginTop: "1rem",
            display: "inline-block",
            color: "#60a5fa",
          }}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}