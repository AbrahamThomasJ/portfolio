import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;