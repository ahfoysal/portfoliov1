"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "loading" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await emailjs.send(
        "service_tsbphxf",
        "template_258qpyp",
        data,
        "EAfi-a877NAIhgLbE"
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 text-center lg:mb-24 lg:scroll-mt-24"
    >
      <p className="font-mono text-sm text-[#64ffda]">What&apos;s Next?</p>
      <h2 className="mt-3 text-4xl font-bold text-slate-200">Get In Touch</h2>
      <p className="mx-auto mt-4 max-w-sm text-sm text-slate-400">
        I&apos;m open to full-time roles and freelance work. If you have
        something in mind, feel free to reach out.
      </p>

      {status === "sent" ? (
        <p className="mt-10 text-slate-300">
          Thanks — I&apos;ll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="rounded-lg border border-slate-600 bg-transparent px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-[#64ffda] focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="rounded-lg border border-slate-600 bg-transparent px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-[#64ffda] focus:outline-none transition"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="resize-none rounded-lg border border-slate-600 bg-transparent px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-[#64ffda] focus:outline-none transition"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 rounded border border-[#64ffda] py-3 font-mono text-sm text-[#64ffda] transition hover:bg-[rgba(100,255,218,0.1)] disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-center text-xs text-red-400">
              Something went wrong. Email me directly at ahfoysal30@gmail.com
            </p>
          )}
        </form>
      )}
    </section>
  );
}
