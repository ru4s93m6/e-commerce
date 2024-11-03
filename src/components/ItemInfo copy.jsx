import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addItem } from "../features/cartSlice";
import toast from "react-hot-toast";

export default function ItemInfo() {
  const item = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function decreaseQuantity() {
    if (quantity === 1) return;
    setQuantity((quantity) => quantity - 1);
  }

  function increateQuantity() {
    setQuantity((quantity) => quantity + 1);
  }

  function addToCart() {
    const cartItem = {
      ...item,
      quantity,
    };
    dispatch(addItem(cartItem));
    toast.success("Successfully add to cart.");
  }

  return (
    <div className="mx-auto flex h-screen max-w-6xl flex-col items-center gap-6 px-8 sm:flex-row sm:gap-16">
      <div className="sm:w-1/2">
        {/* Image Area */}
        <section>
          <figure className="sm:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-contain"
            />
          </figure>
        </section>
      </div>
      <div className="space-y-4 px-12 py-8 sm:w-1/2">
        <h2 className="text-3xl font-semibold text-stone-800">{item.title}</h2>
        <p className="text-base text-stone-500 sm:text-lg">
          {item.description}
        </p>
        <p className="text-lg font-semibold">Price: ${item.price}</p>
        <div className="flex justify-between">
          <div>
            <button
              className="bg-stone-800 px-4 py-4 text-xl font-semibold text-stone-50 hover:bg-stone-400"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="border-2 border-stone-100 px-8 py-4 text-xl">
              {quantity}
            </span>
            <button
              className="bg-stone-800 px-4 py-4 text-xl font-semibold text-stone-50 hover:bg-stone-400"
              onClick={increateQuantity}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="rounded-full bg-stone-800 px-3 py-4 font-semibold text-stone-50"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function fetchItem({ params }) {
  const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  return data;
}
