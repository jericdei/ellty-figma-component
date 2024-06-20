import Button from "./components/Button";
import ChecklistItem from "./components/ChecklistItem";
import "./App.css";
import { useState } from "react";

export type Item = {
  id: number;
  label: string;
};

export default function App() {
  const testItems: Item[] = [
    {
      id: 1,
      label: "Page 1",
    },
    {
      id: 2,
      label: "Page 2",
    },
    {
      id: 3,
      label: "Page 3",
    },
    {
      id: 4,
      label: "Page 4",
    },
  ];

  const [items] = useState<Item[]>(testItems);

  return (
    <main className="w-screen h-screen grid place-items-center bg-white">
      <section className="min-w-[370px] py-[10px] rounded-[6px]">
        <div className="flex flex-col">
          <ChecklistItem label="All Pages" />

          <hr />

          <div>
            {items.map((item) => (
              <ChecklistItem key={item.id} label={item.label} />
            ))}
          </div>

          <hr />

          <div className="p-[10px_15px]">
            <Button>Done</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
