import React from "react"
import Option from "./Option"
const Question = ({question}) => {
    const {questionText, options} = question
    return(
        <div>
            <h1>{questionText}</h1>
            {options.map((option) => <Option questionText={questionText} option={option} />)}
        </div>
    )
}


export default Question