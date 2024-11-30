import { Suspense, ReactNode } from "react";
import Loader from "./loading";

interface ScreenLayoutProps {
  children: ReactNode;
}

export default function ScreenLayout({ children }: ScreenLayoutProps) {
  return (
    <Suspense fallback={<Loader />}>
      <div>{children}</div>
    </Suspense>
  );
}
