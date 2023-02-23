import React, { useEffect, useState } from "react";
import styles from './assignment.module.css'
const QuestionOptions = ({ data = {}, currIndex = 0, addAnswer }) => {

    const allQuestions = []
    allQuestions.push(data)

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        if (selectedOption && selectedOption.length) {
            addAnswer(selectedOption)
        }
    }, [selectedOption])


    return (
        <div>
            {allQuestions.map((x, index) => (
                <div>
                    <label className={styles.lebalMsg} key={index}>Question# {currIndex + 1} {x.questionName}</label>
                    {x.options.map((option, index) => (
                        <div className={styles.allOptions} key={index}>
                            <label className={styles.option}>
                                <input
                                    type="checkbox"
                                    value={option.value}
                                    checked={selectedOption === option.value}
                                    onChange={(event) => handleOptionChange(event)}
                                />
                                {option.desc}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default QuestionOptions;
