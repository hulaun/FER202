import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../rootReducer/store";
import { selectQuestions } from "../rootReducer/selectors/quizSelectors";
import { quizActions, QuizItem } from "../rootReducer/slices/quizSlice";
import { fetchQuestions } from "../rootReducer/apis/quizApis";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import QuizResult from "./QuizResult";

interface Option {
    id: number;
    option: string;
}

type QuizCompleteState = "true" | "false" | "idle";


function Quiz() {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const quiz = useSelector(selectQuestions);
    const [options, setOptions] = useState<Option[]>([]);
    const [quizState, setQuizState] = useState<QuizCompleteState>("idle");
    useEffect(() => {
        fetchQuestions()
        .then((quizData:any) => {
            dispatch(quizActions.setQuestions(quizData)); // Assuming quizData is the array of news
        })
        .catch((error:any) => {
            console.error('Failed to fetch news:', error);
        });
    }, [dispatch]);

    useEffect(() => {
        if (quiz.length > 0) {
            initOptions();
        }
    }, [quiz]);
    
    const initOptions=() => {
        const newOptions = quiz.map((question:QuizItem) => {
            return{
                id: question.id, 
                option: "",
            }
        });
        setOptions([...newOptions]);
    }

    const handleChooseOption = (id: number, option: string) => {
        const newOptions = options.map((opt) => {
            if(opt.id === id){
                if(opt.option === option){
                    return {
                        id: id,
                        option: "",
                    }
                }
                return {
                    id: id,
                    option: option,
                }
            }
            return opt;
        });
        setOptions(newOptions);
    }

    const isChosen = (id: number, opt: string) => {
        return options.some((option) => option.id === id && option.option === opt);
    }

    const handleSubmission = () => {
        const isNotComplete = options.some((option)=>{
            return option.option === ""
        })
        if(isNotComplete){
            setQuizState("false");
            return;
        }
        setQuizState("true");
        
        navigate('/result');
    }

    return (
    <>
        <header className="h-36 bg-black text-white">
            <div className=" font-semibold text-4xl text-center translate-y-full">Quiz</div>
        </header>
        <ul className="p-7">
            {quiz.map((question:QuizItem, index) => (
                <li className="mb-3 rounded-md" key={question.id}>
                    <h3 className="p-2"><span className="font-semibold">Q.{index+1} </span>{question.question}</h3>
                    <ul className="grid grid-cols-2 gap-3">
                        {question.options.map((option:string) => (
                            <li onClick={()=>{handleChooseOption(question.id, option)}} className={`rounded-md border border-[#1144ff] pl-3 ${isChosen(question.id, option)?"bg-[#ecfeff]":""}`} key={option}>{option}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        <div className="text-center relative">
            {quizState === "false" && (
                <p className="text-red-500 absolute left-1/2" style={{ transform: "translate(-50%, -100%)" }}>
                    Please complete the quiz
                </p>
            )}
            <button onClick={handleSubmission} className="bg-[#1144ff] text-white p-2 rounded-md w-36">
                Submit
            </button>
        </div>
        <Routes>
            <Route path="result" element={<QuizResult options={options} />} />
            {/* <Route path="review" element={<Review />} /> */}
        </Routes>
    </>);
}

export default Quiz;