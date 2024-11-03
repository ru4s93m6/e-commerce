import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  increateQuantity,
  decreaseQuantity,
} from "../../features/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const totalPrice = (item.price * item.quantity).toFixed(2);

  return (
    <div className="group border-b border-gray-100 py-4 transition-all hover:bg-gray-50 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Product Image Container */}
        <div className="relative w-full sm:w-32 md:w-40 lg:w-48">
          <img
            src={item.image}
            alt={item.title}
            className="mx-auto h-32 w-auto object-contain sm:h-40"
          />
        </div>

        {/* Product Details Container */}
        <div className="flex flex-1 flex-col gap-4">
          {/* Mobile: Stack everything vertically */}
          <div className="flex flex-col gap-3 sm:hidden">
            <h3 className="text-center text-base font-medium text-stone-800">
              {item.title}
            </h3>
            <div className="mx-auto flex w-4/5 items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item))}
                  className="rounded-full border border-gray-200 p-1 transition-colors hover:bg-stone-800 hover:text-white disabled:opacity-50"
                  disabled={item.quantity <= 1}
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center text-sm">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increateQuantity(item))}
                  className="rounded-full border border-gray-200 p-1 transition-colors hover:bg-stone-800 hover:text-white"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="text-base font-semibold">${totalPrice}</p>
            </div>
            <button
              onClick={() => dispatch(deleteItem(item.id))}
              className="mx-auto flex w-4/5 items-center justify-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 size={16} />
              Remove
            </button>
          </div>

          {/* Tablet and Desktop: Horizontal layout */}
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between sm:gap-4">
            <div className="flex-1 space-y-1">
              <h3 className="text-lg font-medium text-stone-800">
                {item.title}
              </h3>
            </div>

            <div className="flex items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decreaseQuantity(item))}
                  className="rounded-full border border-gray-200 p-1 transition-colors hover:bg-stone-800 hover:text-white disabled:opacity-50"
                  disabled={item.quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increateQuantity(item))}
                  className="rounded-full border border-gray-200 p-1 transition-colors hover:bg-stone-800 hover:text-white"
                >
                  <Plus size={16} />
                </button>
              </div>

              <p className="w-20 text-right text-lg font-medium">
                ${totalPrice}
              </p>

              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
