export default function Home() {
  const posts = [
    { id: 1, title: "Next.js Routing", desc: "Understanding the App Router." },
    { id: 2, title: "Client Components", desc: "Add interactivity with ease." },
    { id: 3, title: "Layouts", desc: "Shared UI using layout.tsx." },
  ];

  return (
    <>
      <h1>Blog Home</h1>
      {posts.map((p) => (
        <div key={p.id} style={{
          background: "#f5f5f5",
          padding: 15,
          marginTop: 15,
          borderRadius: 8
        }}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </>
  );
}
