import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layout/defaultlayout/DefaultLayout";
import { Home } from "./page/home/Home";
function App() {
  return (
    <div className="w-full flex justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
