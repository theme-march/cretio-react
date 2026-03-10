import useScrollRestoration from "@hooks/useScrollRestoration";
import AppRouter from "./router/AppRouter";

function App() {
  useScrollRestoration();

  return <AppRouter />;
}

export default App;
