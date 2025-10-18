import EscolhaItem from "@/containers/grid";

export default function Home() {
  return (
    <div className="h-screen w-full p-5 md:p-0">
      <img src="/logo.png" className="mx-auto pt-[50px]" />

      <h1 className="text-center text-white text-[25px] md:text-[40px] mt-[30px]">Escolha o seu item</h1>
      <EscolhaItem />
      <img src="/background.png" className="h-screen w-full fixed top-0 left-0 object-cover z-[-1]" />
    </div>
  );
}
