import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { routes } from "./routes/routes";
import { Login } from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<MainLayout />}>
          {routes.map(({ id, path, component: Component }) => (
            <Route
              key={id}
              index={!path ? true : undefined}
              path={path}
              element={<Component />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
