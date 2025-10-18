import { items } from "@/data/items";
import { useState } from "react";

const Inicio = () => {

    const [selectedIds, setSelectedIds] = useState([]);

    const handleClick = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    return (
        <div className="relative z-[100] p-4">
            <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={`cursor-pointer group flex flex-col items-center justify-center bg-[#8B8B8B] border-2 border-[#F5F5F5] relative w-16 h-16 
              ${selectedIds.includes(item.id) ? "opacity-20" : "opacity-100"}`}
                    >
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inicio;
