import { useEffect, useRef, useState } from 'react'
import styles from './footer.module.css'
import Observe from '../../Functions/Observer';

export default function Footer(){
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        Observe(ref, setIsVisible);
    }, []);

    return (
        <>
            <footer id='contact' className={`section ${styles.background}`}>
                <div className='container'>
                    <div ref={ref} className={`${styles.columns} ${isVisible ? styles.visible : ''}`}>
                        <div className={styles.column1}>
                            <h2>Let’s get in touch!</h2>
                            <p>If you are interested in any kind of collaboration I’d love to hear from you. I’m open for a new experience and new chances to learn new things!</p>
                        </div>
                        <div className={styles.column2}>
                            <a href='https://www.linkedin.com/in/filip-nikolic-1968b4287/' target='_blank'  className={styles.footerLinkBlock}>
                                <img src="/linkedin.png" alt="" />
                                <h3>Filip Nikolic</h3>
                            </a>
                            <a href='mailto:hello@filipn.me' target='_blank' className={styles.footerLinkBlock}>
                                <img src="/mail.png" alt="" />
                                <h3>hello@filipn.me</h3>
                            </a>
                            <a href='https://github.com/filipnikolic058/' target='_blank' className={styles.footerLinkBlock}>
                                <img src="/github.png" alt="" />
                                <h3>filipnikolic058</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}