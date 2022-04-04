import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./routes/Pages";
import { UseAuthProvider } from "./context/auth-reg";
function App() {
  return (
    <UseAuthProvider>
      <Router>
        <Pages />
      </Router>
    </UseAuthProvider>
  );
}

export default App;
