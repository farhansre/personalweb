"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function ButtonClient() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkAccess() {
      const response = await fetch("/api/button/count");

      if (response.ok) {
        const data = await response.json();

        setCount(data.count);
        setAuthenticated(true);
      }
    }

    checkAccess();
  }, []);

  async function login() {
    setError("");

    const response = await fetch("/api/button/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setError("wrong password");
      return;
    }

    const countResponse = await fetch("/api/button/count");
    const data = await countResponse.json();

    setCount(data.count);
    setAuthenticated(true);
  }

  async function pressButton() {
    const response = await fetch("/api/button/click", {
      method: "POST",
    });

    if (!response.ok) return;

    const data = await response.json();

    setCount(data.count);
  }

  if (!authenticated) {
    return (
      <div className={styles.login}>
        <h1>the button</h1>

        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              login();
            }
          }}
        />

        <button onClick={login}>
          enter
        </button>

        {error && (
          <p className={styles.error}>
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.buttonRoom}>
      <div className={styles.count}>
        {count.toLocaleString()}
      </div>

      <button
        className={styles.bigButton}
        onClick={pressButton}
      >
        button
      </button>
    </div>
  );
}