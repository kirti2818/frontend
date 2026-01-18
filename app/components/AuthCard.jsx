"use client";
import Link from "next/link";

export default function AuthCard({ title, subtitle, altLink, children,loading }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-8 dark:bg-black">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-2xl">{title}</h1>
          {subtitle ? (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          ) : null}
        </div>

        <div className="space-y-4">{children}</div>

        {altLink ? (
          <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
            {altLink.text}
            <Link className={`ml-1 font-medium text-blue-600 hover:underline ${loading && 'pointer-events-none hover:no-underline'} `} href={altLink.href}>
              {altLink.label}
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
