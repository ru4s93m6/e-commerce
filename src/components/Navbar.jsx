import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useInitializeCart } from "../features/useInitializeCart";

export default function Navbar() {
  useInitializeCart();
  const cart = useSelector((state) => state.cart.cart);
  const totalItemQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <nav className="sticky top-0 z-10 flex w-full justify-between bg-slate-100 px-5 py-4 sm:px-8 sm:py-6">
      <h1 className="text-lg font-bold tracking-[0.3em] sm:text-xl">AXIOM</h1>
      <ul className="flex gap-5 font-semibold tracking-wide sm:gap-8 md:gap-12">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/items">Collections</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({totalItemQuantity}) </NavLink>
        </li>
      </ul>
    </nav>
  );
}
