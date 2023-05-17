import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import RootLayout from "./components/RootLayout";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

const App: React.FC = () => {
  return (
    <RootLayout>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;