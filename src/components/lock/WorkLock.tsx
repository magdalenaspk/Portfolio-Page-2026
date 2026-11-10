import { isUnlocked } from "@/lib/access";
import { UnlockForm } from "./UnlockForm";

interface WorkLockProps {
  children: React.ReactNode;
  /** Shown blurred behind the form while locked. Defaults to nothing. */
  preview?: React.ReactNode;
  /** Path to come back to after unlocking. */
  returnTo: string;
  title?: string;
  className?: string;
  /** Skip the lock entirely (e.g. for pages that stay public). */
  disabled?: boolean;
}

// Blurs one area of a page behind a password form. Locked visitors never
// receive the real content, only the preview.
export function WorkLock({ children, preview, returnTo, title = "My work is password protected", className = "", disabled = false }: WorkLockProps) {
  if (disabled || isUnlocked()) return <>{children}</>;

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        // Keep blurred links out of keyboard focus (React 18 has no typed inert prop).
        {...({ inert: "" } as Record<string, string>)}
        className="pointer-events-none select-none blur-md opacity-60 saturate-50 min-h-[560px]"
      >
        {preview}
      </div>

      <div className="absolute inset-0 px-4">
        <div className="sticky top-28 mx-auto mt-16 md:mt-24 w-full max-w-sm rounded-2xl bg-white/95 backdrop-blur p-6 md:p-8 shadow-xl ring-1 ring-neutral-200">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-100 text-lime-600 mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-neutral-900 mb-1">{title}</h2>
            <p className="text-sm text-neutral-600">Enter the password to view the case studies.</p>
          </div>
          <UnlockForm returnTo={returnTo} />
        </div>
      </div>
    </div>
  );
}
