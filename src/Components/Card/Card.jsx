import styles from './card.module.css'
import { useState, useEffect, useRef } from 'react';
import Observe from '../../Functions/Observer';

export default function Card(props) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        Observe(ref, setIsVisible);
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