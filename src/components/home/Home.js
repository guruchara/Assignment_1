//  rs 
import styles from './home.module.css'
import testImg from '../../assests/test.jpg'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/assignment')
    }

    return (

        <div className={styles.mainContainer}>
            <div className={styles.imgContainer}>
                <img src={testImg} alt="test" />
            </div>

            <h2 className={styles.message}>Welcome to the Test</h2>

            <div className={styles.btnContainer} onClick={() => handleStart()}>
                <button>
                    Start
                </button>
            </div>

        </div>
    )
}

export default Home;