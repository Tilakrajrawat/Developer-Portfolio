"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const json = await res.json();

    setLoading(false);

    if (!res.ok) {
      setError(json.error || "Something went wrong");
      return;
    }

    setSuccess(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        placeholder="Your name"
        required
        className="bg-white/5 dark:bg-neutral-900 border border-neutral-700 
                   px-4 py-3 rounded-lg"
      />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="bg-white/5 dark:bg-neutral-900 border border-neutral-700 
                   px-4 py-3 rounded-lg"
      />

      <textarea
        name="message"
        placeholder="Your message"
        rows={5}
        required
        className="bg-white/5 dark:bg-neutral-900 border border-neutral-700 
                   px-4 py-3 rounded-lg"
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}
      {success && (
        <p className="text-green-400 text-sm">
          Message sent successfully!
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          px-6 py-3 rounded-full bg-white text-black font-semibold
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
