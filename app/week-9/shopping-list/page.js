"use client";

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState({});

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const onSelectedItem = (name) => {
    setSelectedItem(name);
  };

  const handleItemSelect = (item) => {
    if (!item.name) return "";
    const cleanedName = item.name.split(/[,]+|[\p{Emoji}]+/gu)[0].trim();
    return cleanedName;
  };

  if (!user) {
    return (
      <main>
        <h1 className="font-bold text-2xl m-2 p-2">
          Please sign in to view this page.
        </h1>
      </main>
    );
  }

  return (
    <main className="flex p-4">
      <div className="flex-1 mr-4">
        <Link href="/week-9/">Back to main page</Link>
        <h1 className="font-bold text-2xl m-2 p-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={onSelectedItem} />
      </div>
      <div className="flex-1 ml-4">
        <MealIdeas ingredient={handleItemSelect(selectedItem)} />
      </div>
    </main>
  );
}
