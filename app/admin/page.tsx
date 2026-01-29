"use client";

import { useEffect, useState } from "react";
import LeadsTable from "@/components/admin/LeadsTable";
import type { Lead } from "@/types/lead";

export default function AdminPage() {
  /* ---------------- AUTH STATES ---------------- */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  /* ---------------- DATA STATES ---------------- */
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ---------------- LOGIN HANDLER ---------------- */
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setAuthError("Invalid password");
      }
    } catch {
      setAuthError("Something went wrong");
    }
  }

  /* ---------------- FETCH LEADS ---------------- */
  useEffect(() => {
    if (!isAuthenticated) return;

    async function fetchLeads() {
      try {
        const res = await fetch("/api/admin/leads");
        if (!res.ok) throw new Error("Failed to fetch leads");
        const data = await res.json();
        setLeads(data.leads);
      } catch {
        setError("Could not load leads");
      } finally {
        setLoading(false);
      }
    }

    fetchLeads();
  }, [isAuthenticated]);

  /* ---------------- LOGIN SCREEN ---------------- */
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm border p-6 rounded-lg"
        >
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          {authError && (
            <p className="text-red-600 text-sm mb-2">{authError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </main>
    );
  }

  /* ---------------- DASHBOARD ---------------- */
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Leads Dashboard</h1>

      {loading && <p className="text-gray-500">Loading leads…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && <LeadsTable leads={leads} />}
    </main>
  );
}
