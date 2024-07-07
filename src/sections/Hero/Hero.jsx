import styles from './hero.module.css';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [headerText, setHeaderText] = useState('');
    const fullText = 'Hello, Stranger!';

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setHeaderText(fullText.substring(0, currentIndex + 1));
            currentIndex += 1;

            if (currentIndex === fullText.length) {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className={styles.heroBackground}>
            <nav>
                <div className={styles.linkBlock}>
                    <a href=""><h2>Skills</h2></a>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.linkBlock}>
                    <a href=""><h2>Experience</h2></a>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.linkBlock}>
                    <a href=""><h2>Education</h2></a>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.linkBlock}>
                    <a href=""><h2>Contact me</h2></a>
                    <div className={styles.underline}></div>
                </div>
            </nav>
            <div className={styles.heroWrapper}>
                <img className={styles.me} src="/me.png" alt="" />
                <h1 className={styles.heroHeader}>{headerText}</h1>
            </div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </section>
    )
}