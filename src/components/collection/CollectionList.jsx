import { useLoaderData } from "react-router-dom";
import Sidebar from "../Sidebar";
import CollectionItem from "./CollectionItem";
import { useState } from "react";

export default function CollectionList() {
  const [category, setCategory] = useState("");
  const collections = useLoaderData();
  const filteredCollections =
    category === ""
      ? collections
      : collections.filter((collection) => collection.category === category);

  function handleSetCategory(type) {
    setCategory(type);
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 sm:flex-row">
      {/* Sidebar */}
      <Sidebar
        collections={collections}
        handleSetCategory={handleSetCategory}
      />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCollections.map((collection) => (
                <CollectionItem collection={collection} key={collection.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function fetchCollections() {
  const data = await fetch("https://fakestoreapi.com/products");
  return data;
}
