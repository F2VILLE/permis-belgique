import { Question } from "@/types/Question";
import { useEffect, useState } from "react";


export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [points, setPoints] = useState<number>(50);
  useEffect(() => {
    fetch("/api/exam").then(res => res.json()).then(data => setQuestions(data));
  }, [])
  return <div className="flex flex-row justify-between items-start">
    {questions.length > 0 && (
      <>
        <div className="mr-2 w-[40vw] min-w-[200px]">
          <img src={questions[currentQuestionIndex].okulusAssets.find(x => x.mime.startsWith("image"))?.s3swhUrl} className="rounded-lg" alt="" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{questions[currentQuestionIndex].text}</h1>
          <ul>
            {questions[currentQuestionIndex].possibleAnswers.map((answer, index) => {
              return <li key={index} data-correct={answer.isCorrect} className="bg-slate-300 m-2 py-2 px-4 rounded-lg" onClick={() => {
                if (!answer.isCorrect) {
                  setPoints(points - questions[currentQuestionIndex].score.failure + questions[currentQuestionIndex].score.success);
                }
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              }}>{answer.text}</li>;
            })}
          </ul>
          <p>Points: {points}</p>
        </div>
      </>
    )}
    
  </div>;
}