export default function DashboardPage() {
  return (
    <section>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
        }}
      >
        Dashboard
      </h1>

      <p
        style={{
          marginTop: "1rem",
          color: "#94a3b8",
          maxWidth: "700px",
          lineHeight: 1.8,
        }}
      >
        Welcome to Nexus AI.

        This dashboard will become the central workspace for AI chat,
        document analysis, image generation, projects, billing,
        analytics, and much more.
      </p>
    </section>
  );
}