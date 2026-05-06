import { RouterProvider, ScrollRestoration } from "react-router";
import routes from "./routes";


export default function App() {
  return (
    <RouterProvider router={routes}>
      <ScrollRestoration/>
    </RouterProvider>
  )
}
