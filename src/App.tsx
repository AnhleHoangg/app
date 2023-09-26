import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layout/defaultlayout/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="flex justify-center ">
      <DefaultLayout>
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              Component={route.component}
            />
          ))}
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
