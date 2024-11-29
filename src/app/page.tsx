import Header from "@/components/Header"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-start items-center p-4">
        <h1 className="text-xl my-8">Entraînez-vous pour le permis B théorique belge, <span className="underline text-green-400" >Gratuitement</span></h1>
        <Link href="/simul-exam" className="bg-green-600 hover:bg-green-700 py-2 px-4 text-xl font-bold rounded-lg" >Lancer un examen</Link>
      </main>
    </div>
  );
}
