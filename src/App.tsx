import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import RouteRenderer from "./app/routes/route-render";

function App() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <RouterProvider router={RouteRenderer} />
      </Suspense>
    </div>
  );
}

export default App;
