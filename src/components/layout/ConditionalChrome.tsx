"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ConditionalChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isUnlock = pathname === "/unlock";
  return (
    <>
      {!isUnlock && <Header />}
      <main>{children}</main>
      {!isUnlock && <Footer />}
    </>
  );
}
