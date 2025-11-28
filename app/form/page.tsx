"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h1 style={styles.title}>Simple Registration Form</h1>
        <hr style={styles.line} />

        <h3 style={styles.sectionTitle}>Your personal details</h3>

        {/* First Name */}
        <label style={styles.label}>
          First Name <span style={{ color: "red" }}>*</span>
        </label>
        <div style={styles.inputBox}>
          <FaUser style={styles.icon} />
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* Last Name */}
        <label style={styles.label}>
          Last Name <span style={{ color: "red" }}>*</span>
        </label>
        <div style={styles.inputBox}>
          <FaUser style={styles.icon} />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* Email */}
        <label style={styles.label}>
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <div style={styles.inputBox}>
          <FaEnvelope style={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder="example@123.com"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* Phone */}
        <label style={styles.label}>
          Phone <span style={{ color: "red" }}>*</span>
        </label>
        <div style={styles.inputBox}>
          <FaPhone style={styles.icon} />
          <input
            type="tel"
            name="phone"
            placeholder="+1 201-555-0123"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: "100%",
    minHeight: "100vh",
    background: "#f3f1f8",
    display: "flex",
    justifyContent: "center",
    paddingTop: "40px"
  },
  card: {
    width: "600px",
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    color: "#b22038",
    marginBottom: "5px",
    fontSize: "30px"
  },
  line: {
    marginBottom: "25px"
  },
  sectionTitle: {
    color: "#4b4b4b",
    marginBottom: "20px",
    fontSize: "20px"
  },
  label: {
    fontSize: "15px",
    marginBottom: "5px",
    display: "block",
    fontWeight: 500
  },
  inputBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "18px",
    paddingLeft: "10px"
  },
  icon: {
    fontSize: "16px",
    color: "#777",
    marginRight: "8px"
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "none",
    outline: "none",
    fontSize: "15px"
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#b22038",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
  }
};
 