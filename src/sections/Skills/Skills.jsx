import ProgLangs from '../../Components/ProgLangs/ProgLangs';
import Technologies from '../../Components/Technologies/Technologies';
import styles from './skills.module.css'

export default function Skills() {

    return (
        <>
            <section className={`section ${styles.background}`}>
                <ProgLangs />
                <Technologies />
            </section>
        </>
    )
}