export default function Sidebar({ collections, handleSetCategory }) {
  const uniqueCategories = [
    ...new Set(collections.map((item) => item.category)),
  ];

  return (
    <div className="space-y-6 bg-white px-6 py-4">
      <div
        className="cursor-pointer text-xl uppercase text-stone-800"
        onClick={() => handleSetCategory("")}
      >
        All
      </div>
      {uniqueCategories.map((category, index) => (
        <CategoryItem
          category={category}
          key={index}
          handleSetCategory={handleSetCategory}
        />
      ))}
    </div>
  );
}

function CategoryItem({ category, handleSetCategory }) {
  return (
    <div
      className="cursor-pointer text-xl uppercase text-stone-800"
      onClick={() => handleSetCategory(category)}
    >
      {category}
    </div>
  );
}
