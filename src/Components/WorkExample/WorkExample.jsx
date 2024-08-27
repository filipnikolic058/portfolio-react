import styles from './workexample.module.css'
import { useState, useEffect, useRef } from 'react';
import Observe from '../../Functions/Observer';

export default function WorkExample(props){
    const [isVisible, setisVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        Observe(ref, setisVisible);
    }, []);

    return (
        <>
            <div ref={ref} className={`${styles.workWrapper} ${isVisible ? styles.visible : ''}`}>
                <a href={props.link} target="_blank">
                    <div className={styles.imgWrapper}><img src={props.imgUrl} alt="" /></div>
                    <h3 className={styles.heading}>{props.heading}</h3>
                    <p>{props.text}</p>
                </a>
            </div>
        </>
    )
}