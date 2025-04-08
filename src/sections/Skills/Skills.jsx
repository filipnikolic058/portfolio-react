import ProgLangs from '../../Components/ProgLangs/ProgLangs';
import Technologies from '../../Components/Technologies/Technologies';
import Tools from '../../Components/Tools/Tools';
import styles from './skills.module.css'
import Background from '../../Components/Background/Background';

export default function Skills() {

    return (
        <>
            <section id='skills' className={`section ${styles.background}`}>
                <div className={styles.backgroundImage}>
                    <Background />
                </div>
                <ProgLangs />
                <Technologies />
                <Tools />
            </section>
        </>
    )
}