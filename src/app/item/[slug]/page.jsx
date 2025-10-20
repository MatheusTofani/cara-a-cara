"use client";

import Inicio from "@/containers/inicio";
import { items } from "@/data/items";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Jogo() {
  const { slug } = useParams();
  const item = items.find((i) => i.slug.toString() === slug);
  const [modalOpen, setModalOpen] = useState(false);

  if (!item) return <div>Item não encontrado</div>;

  return (
    <div className="h-screen w-full p-5 md:p-0 relative">

      <div className="text-center text-white">
        <h1 className="text-[40px] mb-4">Seu item é:</h1>
        <img
          src={item.image}
          className="mx-auto h-40 cursor-pointer"
          alt={item.name}
          onClick={() => setModalOpen(true)}
        />
      </div>

      <Inicio />

      <img
        src="/background.png"
        className="h-screen w-full fixed top-0 left-0 object-cover z-[-1]"
      />

      {/* Modal */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} className="p-5 fixed inset-0 flex items-center justify-center bg-[#00000068] z-60">
          <div className="border-2 border-[#260950] bg-[#1A0C1B] rounded-xl p-6 max-w-md w-full relative text-white">

            <h2 className="text-2xl font-semibold mb-4 text-center">{item.name}</h2>
            <p className="mb-4 text-center">
              {item.search}
            </p>
            <div className="text-center">
              {item.craft !== "Nao possui como fazer" ? (
                <>
                  <p className="mb-2 font-semibold">Receita de Craft:</p>
                  <img
                    src={item.craft}
                    alt={`Craft de ${item.name}`}
                    className="mx-auto max-h-40"
                  />
                </>
              ) : (
                <p className="font-semibold">Não possui como fazer</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
