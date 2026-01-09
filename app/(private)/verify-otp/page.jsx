'use client';
import AuthCard from "../../components/AuthCard";
import VerifyOtp from "./verify-otp";
import OtpInput from "react-otp-input";

export default function VerifyOtpPage() {
    const { handleSubmit,handleChange, otp } = VerifyOtp();
    return (
        <AuthCard
            title="Verify OTP"
            subtitle="Enter the 6-digit code we sent to your email"
            altLink={{ href: "/login", label: "sign in", text: "Back to" }}
        >
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="OTP form">
                <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        Enter 6-digit code
                    </label>
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                        shouldAutoFocus
                        isInputNum
                        inputType="tel"
                        containerStyle={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${6}, 1fr)`,
                            gap: "clamp(0.5rem, 2vw, 0.75rem)",
                            maxWidth: "32rem",
                            marginInline: "auto",
                        }}
                        renderInput={(props, idx) => (
                            <input
                                {...props}
                                id={`otp-${idx + 1}`}
                                aria-label={`Digit ${idx + 1}`}
                                aria-invalid={true}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                autoComplete="one-time-code"
                                className="h-12 sm:h-14 md:h-16 w-full rounded-lg border border-zinc-300 bg-white text-center text-base sm:text-lg md:text-xl text-zinc-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                            />
                        )}
                    />
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                    <span>Didn’t get the code?</span>
                    <button type="button" className="font-medium text-blue-600 hover:underline">
                        Resend code
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Continue
                </button>
            </form>
        </AuthCard>
    );
}