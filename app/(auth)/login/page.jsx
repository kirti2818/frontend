"use client";

import Link from "next/link";
import { useState } from "react";
import AuthCard from "../../components/AuthCard";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to your account"
      altLink={{ href: "/signup", label: "Create one", text: "Don't have an account?" }}
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="••••••••"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
        >
          Sign In
        </button>

        <div className="relative py-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
          <span className="bg-white px-2 dark:bg-zinc-900">or</span>
          <span className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-800 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 hover:dark:bg-zinc-900"
        >
          <span className="i-[tabler--brand-google] text-[18px]" aria-hidden="true" />
          Continue with Google
        </button>

        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <input id="remember" name="remember" type="checkbox" className="size-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-700" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link href="#" className="font-medium text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>
      </form>
    </AuthCard>
  );
}
