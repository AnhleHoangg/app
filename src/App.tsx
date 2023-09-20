import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layout/defaultlayout/DefaultLayout";
import { Home } from "./page/home/Home";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="flex justify-center font-">
      <DefaultLayout>
        {publicRoutes.map((route) => (
          <Routes>
            <Route
              path={route.path}
              key={route.path}
              Component={route.component}
            ></Route>
          </Routes>
        ))}
      </DefaultLayout>
    </div>
  );
}

export default App;
