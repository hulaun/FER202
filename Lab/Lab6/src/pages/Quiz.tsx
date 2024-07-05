import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../rootReducer/store";
import { selectQuestions } from "../rootReducer/selectors/quizSelectors";
import { quizActions } from "../rootReducer/slices/quizSlice";
import { fetchQuestions } from "../rootReducer/apis/quizApis";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function Quiz() {

    const dispatch: AppDispatch = useDispatch();
    const quiz = useSelector(selectQuestions);

    useEffect(() => {
        dispatch(quizActions.setLoading(true));
        fetchQuestions()
        .then((quizData:any) => {
            dispatch(quizActions.setQuestions(quizData)); // Assuming quizData is the array of news
            dispatch(quizActions.setLoading(false));
        })
        .catch((error:any) => {
            dispatch(quizActions.setError('Failed to fetch news'));
            dispatch(quizActions.setLoading(false));
            console.error('Failed to fetch news:', error);
        });
    }, [dispatch]);

    return (
    <>
        <header className="h-36 bg-black text-white">
            <div className=" font-semibold text-4xl text-center translate-y-full">Quiz</div>
        </header>
        <ul className="p-7">
            {quiz.map((question:any, index) => (
                <li key={question.id}>
                    <h3 className="p-2"><span className="font-semibold">Q.{index+1} </span>{question.question}</h3>
                    <ul className="pb-5 grid grid-cols-2 gap-3">
                        {question.options.map((option:any) => (
                            <li className="bg-[#ecfeff] pl-3" key={option}>{option}</li>
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

export default Quiz;