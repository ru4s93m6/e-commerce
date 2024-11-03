import { NavLink } from "react-router-dom";

export default function CollectionItem({ collection }) {
  return (
    <NavLink to={`${collection.id}`}>
      <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={collection.image}
            alt={collection.title}
            className="mx-auto h-full w-4/5 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex h-24 flex-col justify-between p-4 text-center">
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold text-gray-900">
            {collection.title}
          </h3>
          <div className="mt-2">
            <p className="text-lg font-bold text-gray-900">
              ${collection.price}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
