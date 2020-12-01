import React, {useContext} from "react"
import {ResultContext, CurrentQuestionContext, SummaryContext} from "../App"
import "../App.css"
const Option = ({option, questionText}) => {

    const {setResult, setShowResult} = useContext(ResultContext)
    const {setCurrentQuestion} = useContext(CurrentQuestionContext)
    const {summary, setSummary} = useContext(SummaryContext)
    const {text, nextQuestion, result} = option

    const handleClick = () => {
        if(nextQuestion){ 
            setCurrentQuestion(nextQuestion)
        }else {
            setShowResult(true)
            setResult(result)
        }
        setSummary([...summary, {question: questionText, answer: text}])
        console.log(summary)
    }

    return(
        <button className="optionBtn" onClick={handleClick}>{text}</button>
    )
}


export default Option