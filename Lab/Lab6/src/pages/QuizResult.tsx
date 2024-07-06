import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../rootReducer/store";
import { selectQuestions } from "../rootReducer/selectors/quizSelectors";
import { quizActions, QuizItem } from "../rootReducer/slices/quizSlice";
import { fetchQuestions } from "../rootReducer/apis/quizApis";
import { useEffect, useState } from "react";

interface Option {
    id: number;
    option: string;
}

function QuizResult({options}:{options: Option[]}) {

    const quiz = useSelector(selectQuestions);

    const calculateScore = () => {
        let score = 0;
        quiz.forEach((question:QuizItem) => {
            const chosenOption = options.find((option) => option.id === question.id);
            if(chosenOption?.option === question.answer){
                score++;
            }
        });
        return score;
    }

    const isChosen = (id: number, opt: string) => {
        return options.some((option) => option.id === id && option.option === opt);
    }

    const isRightAnswer = (id: number, ans: string) => {
        const chosenQuestion = quiz.find((question) => question.id === id);
        return chosenQuestion?.answer === ans;
    }

    return (
    <>
        <header className="h-36 bg-black text-white">
            <div className=" font-semibold text-4xl text-center translate-y-full">Quiz Result</div>
        </header>
        <ul className="p-7">
            {quiz.map((question:QuizItem, index) => (
                <li className={`mb-3 rounded-md ${isRightAnswer(question.id, options.filter(option=>option.id===question.id)[0].option)?"bg-[#ef4444]":"bg-[#22c55e]"}`} key={question.id}>
                    <h3 className="p-2"><span className="font-semibold">Q.{index+1} </span>{question.question}</h3>
                    <ul className="grid grid-cols-2 gap-3">
                        {question.options.map((option:string) => (
                            <li className={`rounded-md border border-[#1144ff] pl-3 ${isChosen(question.id, option)?"bg-[#ecfeff]":""}`} key={option}>{option}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        {/* <Routes>
            <Route path="result" element={<Result />} />
            <Route path="review" element={<Review />} />
        </Routes> */}
    </>);
}

export default QuizResult;