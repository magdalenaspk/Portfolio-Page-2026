import type { Metadata } from "next";
import { UnlockForm } from "./UnlockForm";

export const metadata: Metadata = {
  title: "Portfolio — Magdalena Sapkowska",
};

export default function UnlockPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
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

        <UnlockForm hasError={searchParams.error === "1"} />
      </div>
    </div>
  );
}
