import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";
import DefaultLayout from "./layout/defaultlayout/DefaultLayout";

function App() {
  return (
    <div className="top-0 left-0 flex justify-center">
      <DefaultLayout>
        <Routes>
          {publicRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
