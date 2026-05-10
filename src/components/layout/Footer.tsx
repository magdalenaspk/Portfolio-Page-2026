import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-100 py-10 mt-24">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>© {year} Magdalena Sapkowska</span>
          <span>
            Designed & built with{" "}
            <a
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Claude Code
            </a>
          </span>
        </div>
        <p className="mt-6 text-xs text-neutral-500 text-center">
          All metrics are approximations used for illustrative purposes and do not represent official company data.
        </p>
      </Container>
    </footer>
  );
}
