"use client";

import { useState } from "react";

export default function Contact() {
const [form, setForm] = useState({
name: "",
email: "",
message: "",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

async function handleSubmit(e: React.FormEvent) {
e.preventDefault();


setLoading(true);
setStatus("");

try {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong");
  }

  setStatus("Message sent successfully.");
  setForm({
    name: "",
    email: "",
    message: "",
  });
} catch (err) {
  setStatus("Failed to send message.");
} finally {
  setLoading(false);
}


}

return ( <section id="contact" className="section"> <div className="content-container max-w-4xl"> <div className="mb-4"> <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
Contact </span> </div>


    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      Let's build something impactful.
    </h2>

    <p className="text-slate-400 max-w-2xl mb-12">
      Interested in backend engineering, cloud-native systems,
      distributed applications, or full-stack opportunities?
      Feel free to reach out.
    </p>

    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-3xl p-8 space-y-6"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="w-full rounded-xl border border-blue-500/10 bg-white/5 px-4 py-3 outline-none"
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="w-full rounded-xl border border-blue-500/10 bg-white/5 px-4 py-3 outline-none"
        required
      />

      <textarea
        rows={6}
        placeholder="Your Message"
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
        className="w-full rounded-xl border border-blue-500/10 bg-white/5 px-4 py-3 outline-none resize-none"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="text-sm text-slate-400">
          {status}
        </p>
      )}
    </form>
  </div>
</section>

);
}
