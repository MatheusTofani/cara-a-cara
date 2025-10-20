"use client";

import { items } from "@/data/items";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EscolhaItem = () => {
  const router = useRouter();

  const handleRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    router.push(`/item/${randomItem.slug}`);
  };

  return (
    <div className="relative z-[100] p-4 py-10 flex flex-col items-center justify-center">
      <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 text-center place-items-center w-auto">
        {items.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer group flex flex-col items-center justify-center bg-[#8B8B8B] border-2 border-[#F5F5F5] relative w-16 h-16"
          >
            <Link href={`/item/${item.slug}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
              <div className="bg-[#1A0C1B] border-2 border-[#260950] p-2 rounded-xl absolute left-1/2 -translate-x-1/2 bottom-[-50px] max-w-[1000px] hidden group-hover:block z-[50]">
                <span className="text-xs text-center text-white whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={handleRandomItem}
        className="mt-6 relative z-[30] cursor-pointer group flex flex-col items-center justify-center bg-[#8B8B8B] border-2 border-[#F5F5F5] w-16 h-16"
      >
        <img
          src="/items/lucky.png"
          alt=""
          className="w-12 h-12 object-contain"
        />
        <div className="bg-[#1A0C1B] border-2 border-[#260950] p-2 rounded-xl absolute left-1/2 -translate-x-1/2 bottom-[-50px] max-w-[1000px] hidden group-hover:block z-[50]">
          <span className="text-xs text-center text-white whitespace-nowrap">
            Bloco Aleatório
          </span>
        </div>
      </div>
    </div>
  );
};

export default EscolhaItem;
