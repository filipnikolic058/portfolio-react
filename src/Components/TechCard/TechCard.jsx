import { useEffect, useRef, useState } from 'react';
import styles from './techcard.module.css'
import Observe from '../../Functions/Observer';

export default function TechCard(props){
    const [isVisible, setisVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        Observe(ref, setisVisible);
    }, []);

    return (
        <>
            <div ref={ref} className={`${styles.card} ${isVisible ? styles.visible : ''}`}>
                <img src={props.imgUrl} alt="tech_icon" style={{borderRadius: '15px'}} />
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
        </>
    );
}