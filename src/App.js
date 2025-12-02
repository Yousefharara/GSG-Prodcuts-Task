import MainLayout from "./components/MainLayout";
import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";
import Router from "./router";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MainLayout>
          <Router />
        </MainLayout>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
