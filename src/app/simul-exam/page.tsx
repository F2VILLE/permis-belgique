"use client"
import Header from "@/components/Header"
import Quiz from "@/components/Quiz";
export default function SimulationExam() {


  return (
    <div>
      <Header />
      <main className="flex flex-col justify-start items-center p-4">
        {/* {quiz ? quiz.display() : <button onClick={startQuiz} className="bg-green-600 hover:bg-green-700 py-2 px-4 text-xl font-bold rounded-lg" >Démarrer</button>} */}
        <Quiz />
      </main>
    </div>
  );
}
