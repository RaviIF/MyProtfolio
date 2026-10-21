import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Toast renderer – MUST be here */}
      <Toaster />
    </>
  </BrowserRouter>
);
export default App;
