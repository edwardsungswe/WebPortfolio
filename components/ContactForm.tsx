"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/lib/data";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
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
      <button
        type="submit"
        className="font-sans text-xs tracking-widest uppercase border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
