"use client";

type SidebarProps = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  price: number;
  setPrice: (value: number) => void;
};

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
  price,
  setPrice,
}: SidebarProps) => {
  const categories = ["All", "Electronics", "Clothing", "Home"];

  return (
    <aside className="w-full md:w-64 bg-blue-700 text-white p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Category</h3>
        <div className="space-y-2 text-sm">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="accent-white"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Price</h3>
        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-white"
        />
        <p className="mt-2 text-sm">Up to ${price}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
