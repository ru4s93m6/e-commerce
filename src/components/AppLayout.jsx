import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Loader from "./Loader";

export default function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
