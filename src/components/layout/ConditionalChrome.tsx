import { Header } from "./Header";
import { Footer } from "./Footer";

export function ConditionalChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
