import ProgLangs from '../../Components/ProgLangs/ProgLangs';
import Technologies from '../../Components/Technologies/Technologies';
import Tools from '../../Components/Tools/Tools';
import styles from './skills.module.css'

export default function Skills() {

    return (
        <>
            <section id='skills' className={`section ${styles.background}`}>
                <ProgLangs />
                <Technologies />
                <Tools />
            </section>
        </>
    )
}