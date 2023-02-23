import styles from './assignment.module.css'
import successImg from '../../assests/submit.png'
import allQuestions from '../rowData/questions'

const SubmissionAssesment = ({ count = 0 }) => {

    let finalScore = parseFloat('00.00');
    if (count === 3) {
        finalScore = (parseFloat(Math.ceil(count / 100) * 100.00) + 0.00).toFixed(2);
    }
    else {
        finalScore = 33.33 * count;
    }

    return (
        <div className={styles.submissionCtn}>

            <div className={styles.successImgCtn}>
                <img src={successImg} alt="successImg" />
            </div>

            <h2 className={styles.successFullyMsg}>You have successfully submitted the Assessment</h2>

            <p className={styles.faqAss}><b className={styles.head}>- Question Asked</b>: {allQuestions.length} </p>
            <p className={styles.faqAss}><b className={styles.head}>- Question Correct</b>: {count} </p>
            <p className={styles.faqAss}><b className={styles.head}>- Your score</b>: {finalScore} </p>

        </div>
    )
}

export default SubmissionAssesment;