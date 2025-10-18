"use client";

import Inicio from "@/containers/inicio";
import { items } from "@/data/items";
import { useParams } from "next/navigation";

export default function Jogo() {

 const { slug } = useParams()
 const item = items.find((i) => i.slug.toString() === slug);

  return (
    <div className="h-screen w-full p-5 md:p-0">
      
<div className="text-center text-white">
  <h1 className="text-[40px]">Seu item e:</h1>
<img src={item.image} className="mx-auto h-40" alt="" />
</div>

<Inicio/>
      <img src="/background.png" className="h-screen w-full fixed top-0 left-0 object-cover z-[-1]" />
    </div>
  );
}
