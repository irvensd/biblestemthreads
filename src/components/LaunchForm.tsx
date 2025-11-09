"use client";

import { useState } from "react";
import { buttonClasses } from "@/styles/button";

export function LaunchForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    // TODO: Integrate with BibleStem.io email marketing / CRM
    console.log("Launch list signup", email);
    setSubmitted(true);
  };

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-navy/80 p-8">
      <p className="text-sm text-secondary/70">
        Drop your email and we&apos;ll keep you posted when BibleStem Threads opens.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row">
        <input
          type="email"
          required
          placeholder="you@community.email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-full border border-white/10 bg-navy/60 px-5 py-3 text-sm text-secondary/90 placeholder:text-secondary/40 focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          className={buttonClasses("primary", "w-full sm:w-auto whitespace-nowrap")}
        >
          Notify me
        </button>
      </form>
      <p className="mt-3 text-xs text-secondary/50">
        We&apos;ll only email you about the launch. You can unsubscribe anytime.
      </p>
      {submitted && (
        <div className="mt-4 rounded-2xl border border-accent/40 bg-accent/20 px-4 py-3 text-sm text-white shadow-subtle">
          You&apos;re on the list! We&apos;ll send first access when the shop opens.
        </div>
      )}
    </div>
  );
}

