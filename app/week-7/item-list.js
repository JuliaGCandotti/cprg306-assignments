"use client";

import Item from "./items.json";
import { useState } from "react";

export default function Page({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section className="m-2 p-2">
      <div className="m-2 p-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-800 text-white" : "bg-gray-600"
          }`}
        >
          Sort by name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-800 text-white" : "bg-gray-600"
          }`}
        >
          Sort by category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <li key={item.id} className="p-2">
            <div className="bg-gray-500 p-2 lg:max-w-md">
              <h2 className="font-bold text-2xl text-blue-800">{item.name}</h2>
              <p>
                Quantity available: {item.quantity} in {item.category}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
