import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";

// API:et tillåter bara 100 anrop per dag, så vi cachar hårt:
// - staleTime: datan räknas som färsk i 1 timme → ingen ny hämtning när man byter sida
// - refetchOnWindowFocus: false → ingen ny hämtning när man byter flik
// - retry: 1 → vid fel försöker vi bara en gång till, inte tre
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      gcTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
