import styles from './columns.module.css'
import Title from '../Title/Title'
import Observe from '../../Functions/Observer'
import { useEffect, useState, useRef } from 'react'

export default function Columns(props) {
    const [isVisibleColumn1, setIsVisibleColumn1] = useState(false);
    const refColumn1 = useRef(null);

    const [isVisibleColumn2, setIsVisibleColumn2] = useState(false);
    const refColumn2 = useRef(null);

    useEffect(() => {
        Observe(refColumn1, setIsVisibleColumn1);
        Observe(refColumn2, setIsVisibleColumn2);
    }, []);

    return (
        <>
            <Title isH3={true} text={props.heading} />
            <div className={styles.columns}>
                <div ref={refColumn1} className={`${styles.column1} ${isVisibleColumn1 ? styles.visible : ''}`}>
                    {props.reverse ? <img src={props.imgUrl} alt="" /> : <p>{props.text}</p>}
                </div>
                <div ref={refColumn2} className={`${styles.column2} ${isVisibleColumn2 ? styles.visible : ''}`}>
                    {props.reverse ? <p>{props.text}</p> : <img src={props.imgUrl} alt="" />}
                </div>
            </div>
        </>
    )
}