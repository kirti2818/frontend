"use client";
import AuthCard from "../../components/AuthCard";
import Signup from "./signup";

export default function SignupPage() {
  const {showPassword,setShowPassword,handleFormData,handleSubmit,formData} = Signup()

  return (
    <AuthCard
      title="Create your account"
      subtitle="Join us in a minute"
      altLink={{ href: "/login", label: "Sign in", text: "Already have an account?" }}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            onChange={handleFormData}
          />
          {formData.name.error && <p className="text-red-500 text-sm">Name is required.</p>}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            onChange={handleFormData}
          />
          {formData.email.error && <p className="text-red-500 text-sm">Email is required.</p>}
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
            placeholder="At least 8 characters"
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            onChange={handleFormData}
          />
          {formData.password.error && <p className="text-red-500 text-sm">Password is required.</p>}
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
        >
          Create account
        </button>
      </form>
    </AuthCard>
  );
}
