import { ReactNode } from "react";

export const ShowcaseCard = ({ children }: { children: ReactNode }) => (
  <div className="h-full rounded-lg border shadow-sm hover:shadow-md cursor-pointer transition-shadow">
    {children}
  </div>
);
