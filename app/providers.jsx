// app/providers.jsx
"use client";

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./context/AuthContext";

export default function Providers({ children }) {
  return (
    <SessionProvider
      refetchInterval={5 * 60} // Refresh session every 5 minutes
      refetchOnWindowFocus={true}
    >
      <AuthProvider>{children}</AuthProvider>
    </SessionProvider>
  );
}
