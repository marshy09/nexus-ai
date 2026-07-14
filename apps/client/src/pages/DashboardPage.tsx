export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#020617",
        color: "#ffffff",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Nexus AI
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "1rem",
          }}
        >
          Dashboard
        </p>
      </div>
    </main>
  );
}