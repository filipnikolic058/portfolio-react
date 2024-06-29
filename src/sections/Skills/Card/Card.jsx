import styles from './card.module.css'
import { useState, useEffect, useRef } from 'react';

export default function Card(props) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={ref} className={`${styles.card} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.columns}>
                    <div className={styles.column1}>
                        <img src={props.imgUrl} alt="" />
                    </div>
                    <div className={styles.column2}>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}