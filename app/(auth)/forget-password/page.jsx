import React from "react";
import AuthCard from "../../components/AuthCard";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Forgot Password"
      subtitle="Enter your email to receive a reset link"
      altLink={{ href: "/login", label: "Sign in", text: "Remembered your password?" }}
    >
      <form className="space-y-4" aria-label="Forgot password form">
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
          />
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Send reset link
        </button>
      </form>
    </AuthCard>
  );
}
