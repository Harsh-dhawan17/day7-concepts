"use client";
export default function UIPage() {
  const Button = ({ label }: { label: string }) => (
    <button
      style={{
        padding: "10px 20px",
        background: "black",
        color: "white",
        borderRadius: 6,
        marginRight: 10
      }}
    >
      {label}
    </button>
  );

  return (
    <>
      <h1>Reusable UI Components</h1>
      <p>These buttons are reusable:</p>
      <Button label="Login" />
      <Button label="Signup" />
      <Button label="Contact" />
    </>
  );
}
