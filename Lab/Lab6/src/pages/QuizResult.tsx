import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../rootReducer/store";
import { selectOptionsSelected, selectQuestions } from "../rootReducer/selectors/quizSelectors";
import { QuizItem } from "../rootReducer/slices/quizSlice";
import { fetchQuestions } from "../rootReducer/apis/quizApis";
import { useEffect, useState } from "react";

interface Option {
    id: number;
    option: string;
}

function QuizResult() {

    const quiz = useSelector(selectQuestions);
    const optionsSelected = useSelector(selectOptionsSelected);

    const calculateScore = () => {
        let score = 0;
        quiz.forEach((question:QuizItem) => {
            const chosenOption = optionsSelected.find((option) => option.id === question.id);
            if(chosenOption?.option === question.answer){
                score++;
            }
        });
        return score;
    }

    const isChosen = (id: number, opt: string) => {
        return optionsSelected.some((option) => option.id === id && option.option === opt);
    }

    const isRightAnswer = (id: number, ans: string) => {
        const chosenQuestion = quiz.find((question) => {
            return question.id === id
        });
        console.log(chosenQuestion,ans)
        return chosenQuestion?.answer === ans;
    }

    return (
    <>
        <header className="h-36 bg-black text-white">
            <div className=" font-semibold text-4xl text-center translate-y-full">Quiz Result</div>
        </header>
        <h2 className="text-center text-3xl">
            Your Score: {calculateScore()}/{quiz.length}
        </h2>
        <ul className="p-5">
            {quiz.map((question:QuizItem, index) => (
                <li className={`p-2 mb-3 rounded-md `} key={question.id}>
                    <h3 className="py-2"><span className="font-semibold">Q.{index+1} </span>{question.question}</h3>
                    <ul className="grid grid-cols-2 gap-1">
                        {question.options.map((option:string) => (
                            <li className={`rounded-md border border-[#1144ff] p-3 ${isChosen(question.id, option)?isRightAnswer(question.id, option)?"bg-[#22c55e]":"bg-[#ef4444]":""}`} key={option}>{option}</li>
                        ))}
                    </ul>
                    <div className="bg-[#22c55e]">
                        {isRightAnswer(question.id, optionsSelected.find((option) => option.id === question.id)?.option || "")?"":"Correct Answer: "+question.answer}
                    </div>
                </li>
            ))}
        </ul>
    </>);
}

export default QuizResult;