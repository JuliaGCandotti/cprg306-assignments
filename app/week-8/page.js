"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // if set as null, it runs an error.

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(/[,]+|[\p{Emoji}]+/gu)[0].trim();
    setSelectedItemName(cleanedName); // Atualizando o estado com o nome do item selecionado
  };

  return (
    <main className="flex p-4">
      <div className="flex-1 mr-4">
        <h1 className="font-bold text-2xl m-2 p-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1 ml-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
