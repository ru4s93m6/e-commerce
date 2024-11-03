import AppLayout from "./components/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./components/Homepage";
import CollectionList, {
  fetchCollections,
} from "./components/collection/CollectionList";
import ItemInfo, { fetchItem } from "./components/collection/ItemInfo";
import Cart from "./components/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage />, index: true },
      { path: "/items", element: <CollectionList />, loader: fetchCollections },
      { path: "/items/:id", element: <ItemInfo />, loader: fetchItem },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        gutter={20}
        containerStyle={{ margin: "20px" }}
        toastOptions={{
          style: {
            fontSize: "1rem",
            padding: "16px 24px",
          },
        }}
      />
    </>
  );
}
