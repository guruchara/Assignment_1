import React, { useState } from "react"
import styles from './assignment.module.css'
import review from '../../assests/review.png'
import questionImg from '../../assests/question.jpeg'
import QuestionOptions from "./QuestionOptions"
import backArrow from '../../assests/leftArrow.png'
import rightArrow from '../../assests/rightArrow.png'

const Assignment = () => {

    const [submissionArr, setSubmissionArr] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const allQuestions = [
        {
            questionName: "A line which cuts a pair of parallel lines is called",
            correctAnswer: 'Traversal',

            options: [
                {
                    value: "Tangent",
                    desc: "Tangent",
                },
                {
                    value: "Chord",
                    desc: "Chord",
                },
                {
                    value: "Traversal",
                    desc: "Traversal",
                },
                {
                    value: "Intersector",
                    desc: "Intersector",
                },
            ],
        },
        {
            questionName: "If a certain sum of money can become 5 times of its principal in 10 years, then the rate of interest is",
            correctAnswer: '40%',
            options: [
                {
                    value: "20%",
                    desc: "20%",
                },
                {
                    value: "30%",
                    desc: "30%",
                },
                {
                    value: "40%",
                    desc: "40%",
                },
                {
                    value: "50%",
                    desc: "50%",
                },
            ],
        },
        {
            questionName: "A shopkeeper purchases 15 mangoes for Rs. 10 and sells them at 10 mangoes for Rs. 15. Thus, he earns a profit of",
            correctAnswer: '125%',
            options: [
                {
                    value: "50%",
                    desc: "50%",
                },
                {
                    value: "75%",
                    desc: "75%",
                },
                {
                    value: "80%",
                    desc: "80%",
                },
                {
                    value: "125%",
                    desc: "125%",
                },
            ],
        },
    ]

    const preQuestion = (index) => {
        setCurrentIndex(index)
    }

    const nextQuestion = (index) => {
        setCurrentIndex(index)
    }

    function addAnswer(selectedOption) {

        console.log("inside92")
        let updatedSubmissionData = [...submissionArr];
        updatedSubmissionData[currentIndex] = selectedOption
        setSubmissionArr(updatedSubmissionData)
    }

    const handleSubmit = () => {

    }

    return (
        <div className={styles.assignmentCtn}>

            <div className={styles.reviewCtn}>
                <div className={styles.reviewImgCtn}>
                    <img src={review} alt="reviewImg" />
                </div>
                <p className={styles.reviewMsg}>Review Answer Here</p>

                <div className={styles.givenAnswer}>

                    {submissionArr.length > 0 && submissionArr.map((x, index) => (
                        <p className={styles.reviewAnswered}><b>#{index} : </b>{submissionArr[index]}</p>
                    ))}

                </div>
            </div>

            <div className={styles.questionContainer}>
                <div className={styles.quesCtn}>
                    <img className={styles.qImg} src={questionImg} alt="reviewImg" />
                </div>

                <div className={styles.secondContainer}>
                    {submissionArr.length >= 1 && <img className={styles.paginationBtn} src={backArrow} alt="backArrow" onClick={() => preQuestion(currentIndex - 1)} />}
                    <h2 className={styles.attempt}>Attempt Questions Here</h2>
                    <img className={styles.paginationBtn} src={rightArrow} alt="right" onClick={() => nextQuestion(currentIndex + 1)} />
                </div>

                <div className={styles.quesCtn}>
                    <QuestionOptions data={allQuestions[currentIndex]} currIndex={currentIndex} addAnswer={addAnswer} />
                </div>

                {submissionArr.length === 3 && < div className={styles.submitCtn} onClick={() => handleSubmit()}>
                    <button>
                        Submit
                    </button>
                </div>}
            </div>
        </div >
    )
}
export default Assignment;