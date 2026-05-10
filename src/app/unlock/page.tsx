import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Magdalena Sapkowska",
};

async function submit(formData: FormData) {
  "use server";
  const password = formData.get("password") as string;
  if (password === "magdalena2026") {
    cookies().set("portfolio_auth", "magdalena2026", {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
    });
    redirect("/");
  }
  redirect("/unlock?error=1");
}

export default function UnlockPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const hasError = searchParams.error === "1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-lime-300 mb-6">
            <svg
              className="w-6 h-6 text-neutral-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            Magdalena Sapkowska
          </h1>
          <p className="text-sm text-neutral-500">
            This portfolio is password protected.
          </p>
        </div>

        <form action={submit} className="space-y-4">
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              autoComplete="current-password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition-all text-sm"
            />
            {hasError && (
              <p className="mt-2 text-sm text-red-500">
                Incorrect password. Try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-lime-300 hover:bg-lime-200 text-neutral-950 font-semibold text-sm transition-colors duration-200"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
