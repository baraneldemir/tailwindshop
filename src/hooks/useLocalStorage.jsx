import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  // Initialize state from localStorage, or fallback to initialValue
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem(key);
    return savedItems ? JSON.parse(savedItems) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  // Return items and setItems for external use
  return [items, setItems];
}
