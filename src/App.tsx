import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layout/defaultlayout/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="flex justify-center ">
      <DefaultLayout>
        <div className="">
          {publicRoutes.map((route) => (
            <Routes>
              <Route
                path={route.path}
                key={route.path}
                Component={route.component}
              ></Route>
            </Routes>
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
}

export default App;
