import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "#ffffff",
      }}
    >
      {/* Sidebar placeholder */}
      <aside
        style={{
          width: "260px",
          borderRight: "1px solid #1e293b",
          padding: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          Nexus AI
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "0.5rem",
          }}
        >
          AI Workspace
        </p>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "2rem",
        }}
      >
        <>
       
        <Outlet />
        </>
      </main>
    </div>
  );
}