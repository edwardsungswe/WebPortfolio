"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-lg">
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className={inputClass}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className={inputClass}
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="font-sans text-xs tracking-widest uppercase border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="font-sans text-xs text-muted">Message sent.</p>
        )}
        {status === "error" && (
          <p className="font-sans text-xs text-muted">Something went wrong. Try again.</p>
        )}
      </div>
    </form>
  );
}
