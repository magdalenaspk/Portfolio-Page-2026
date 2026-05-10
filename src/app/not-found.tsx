import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-8xl font-bold text-lime-700 mb-4">404</p>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Page not found
          </h1>
          <p className="text-neutral-500 mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-lime-300 text-neutral-950 font-semibold px-6 py-3 rounded-xl hover:bg-lime-200 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </Container>
    </div>
  );
}
