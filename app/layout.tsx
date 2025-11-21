import Link from "next/link";

export const metadata = {
  title: "Day 7 Concepts",
  description: "Next.js App Router Basics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        
        {/* NAVBAR */}
        <nav style={{
          background: "#111",
          padding: 15,
          display: "flex",
          gap: 20
        }}>
          <Link href="/" style={{ color: "white" }}>Home</Link>
          <Link href="/form" style={{ color: "white" }}>Form</Link>
          <Link href="/ui" style={{ color: "white" }}>UI</Link>
          <Link href="/interactive" style={{ color: "white" }}>Interactive</Link>
        </nav>

        <div style={{ padding: 20 }}>
          {children}
        </div>

        {/* FOOTER */}
        <footer style={{
          background: "#111",
          color: "white",
          padding: 10,
          marginTop: 40,
          textAlign: "center"
        }}>
          © 2025 Day 7 Concepts
        </footer>

      </body>
    </html>
  );
}
