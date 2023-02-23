//  rs 
import styles from './home.module.css'
import testImg from '../../assests/test.png'
import { useState } from 'react'
import Assignment from '../assignment/Assignment'

const Home = () => {

    const [start, setStart] = useState(false)

    const handleStart = () => {
        setStart(true)
        return
    }

    return (

        <>
            {!start && <div className={styles.mainContainer}>
                <div className={styles.imgContainer}>
                    <img src={testImg} alt="test" />
                </div>

                <h2 className={styles.message}>Welcome to the Test</h2>

                <div className={styles.btnContainer} onClick={() => handleStart()}>
                    <button>
                        Start
                    </button>
                </div>

            </div>}

            {start && <Assignment />}
        </>
    )
}

export default Home;