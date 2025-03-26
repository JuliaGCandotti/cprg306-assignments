"use client";

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import { useEffect } from "react";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const loadItems = async () => {
    if (!user?.uid) return;
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user?.uid) return;

    try {
      const itemId = await addItem(user.uid, newItem);

      if (itemId) {
        const itemWithId = { id: itemId, ...newItem };
        setItems((prevItems) => [...prevItems, itemWithId]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
        <Link href="/week-10/">Back to main page</Link>
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
