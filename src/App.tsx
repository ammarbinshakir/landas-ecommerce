import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import ScrollToTop from "./shared/hooks/useScrollToTop";
import { AuthProvider } from "./shared/contexts/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
