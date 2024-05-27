import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { ThemeProvider } from "./componts/theme-provider";
import { NotFound } from "./pages/notFound/not-found";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
