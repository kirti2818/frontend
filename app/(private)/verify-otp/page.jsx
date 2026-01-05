import React from "react";
import AuthCard from "../../components/AuthCard";

export default function VerifyOtpPage() {
  return (
    <AuthCard
      title="Verify OTP"
      subtitle="Enter the 6-digit code we sent to your email"
      altLink={{ href: "/login", label: "sign in", text: "Back to" }}
    >
      <form className="space-y-4" aria-label="OTP form">
        <div className="space-y-1.5">
          <label htmlFor="otp-1" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Enter 6-digit code
          </label>
          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <input
                key={i}
                id={`otp-${i}`}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                aria-label={`Digit ${i}`}
                className="h-12 w-10 rounded-lg border border-zinc-300 bg-white text-center text-base text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 sm:h-14 sm:w-12 sm:text-lg"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
          <span>Didn’t get the code?</span>
          <button type="button" className="font-medium text-blue-600 hover:underline">
            Resend code
          </button>
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Continue
        </button>
      </form>
    </AuthCard>
  );
}