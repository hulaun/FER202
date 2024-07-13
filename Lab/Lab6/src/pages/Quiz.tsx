import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../rootReducer/store";
import { selectOptionsSelected, selectQuestions, selectQuizState } from "../rootReducer/selectors/quizSelectors";
import { setQuestions, QuizItem, setOptionsSelected, setOption, setQuizState } from "../rootReducer/slices/quizSlice";
import { fetchQuestions } from "../rootReducer/apis/quizApis";
import { useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import QuizResult from "./QuizResult";

function Quiz() {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const quiz = useSelector(selectQuestions);
    const optionsSelected = useSelector(selectOptionsSelected);
    const quizState = useSelector(selectQuizState);
    useEffect(() => {
        fetchQuestions()
        .then((quizData:any) => {
            dispatch(setQuestions(quizData)); // Assuming quizData is the array of news
        })
        .catch((error:any) => {
            console.error('Failed to fetch news:', error);
        });
    }, [dispatch]);

    useEffect(() => {
        if (quiz.length > 0) {
            dispatch(setOptionsSelected());
        }
    }, [quiz]);

    const handleSelection = (id: number, option: string) => {
        dispatch(setOption({ id, option }));
    }

    const isChosen = (id: number, opt: string) => {
        return optionsSelected.some((option) => option.id === id && option.option === opt);
    }

    const handleSubmission = () => {
        const isNotComplete = optionsSelected.some((option)=>{
            return option.option === ""
        })
        if(isNotComplete){
            dispatch(setQuizState("false"));
            return;
        }
        dispatch(setQuizState("true"));

        navigate('/quiz/result');
    }

    return (
    <>
        <header className="h-36 bg-black text-white">
            <div className=" font-semibold text-4xl text-center translate-y-full">Quiz</div>
        </header>
        <ul className="p-7">
            {quiz.map((question:QuizItem, index) => (
                <li className="mb-3 rounded-md" key={question.id}>
                    <h3 className="py-2"><span className="font-semibold">Q.{index+1} </span>{question.question}</h3>
                    <ul className="grid grid-cols-2 gap-1">
                        {question.options.map((option:string) => (
                            <li onClick={()=>{handleSelection(question.id,option)}} className={`rounded-md border border-[#1144ff] p-3 ${isChosen(question.id, option)?"bg-[#ecfeff]":""}`} key={option}>{option}</li>
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
    </>);
}

export default Quiz;