import { NextResponse } from "next/server";
import questionsJson from "@/../questions.json"
import { Question } from "@/types/Question";
export function GET(req: Request) {
    let questions = questionsJson as Question[];
    // get query params
    const { searchParams } = new URL(req.url);

    const limit = searchParams.get("limit");

    const keywords = searchParams.get("keywords");

    if (keywords) {
        const keywordsArray = keywords.split(",");

        questions = questions.filter((question) => {
            return keywordsArray.some((keyword: string) => {
                return question.text.toLowerCase().includes(keyword.toLowerCase());
            });
        });
    }

    if (limit && !isNaN(parseInt(limit)) && parseInt(limit) > 0) {
        questions = questions.slice(0, parseInt(limit));
    }

    return NextResponse.json(questions);
}