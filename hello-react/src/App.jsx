import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./Context/ThemeContext";
// import ThemeToggle from "./Context/ThemeToggle";
const App = () => {
  // localStorage.clear();
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

export default App;
