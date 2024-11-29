import { NextResponse } from "next/server";
import questionsJson from "@/../questions.json"
import { Question } from "@/types/Question";
export function GET(req: Request) {
    let questions = questionsJson as Question[];
    questions = questions.filter((question) => {
        return question.okulusAssets.find(x => x.mime.startsWith("image"));
    })

    const exam = []

    for (let i = 0; i < 50; i++) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        exam.push(questions[randomIndex]);
    }

    return NextResponse.json(exam);
}