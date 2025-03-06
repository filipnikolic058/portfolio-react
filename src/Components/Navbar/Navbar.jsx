import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [fade, setFade] = useState(styles.fadeIn);
    const buttonRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', closeNav);
        return () => {
            document.removeEventListener('click', closeNav);
        }
    }, []);

    function closeNav(event) {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setFade(styles.fadeOut);
            setTimeout(() => {
                setIsOpen(false);
            }, 600);
        }
    }

    function handleIsOpen() {
        if (isOpen) {
            setFade(styles.fadeOut);
            setTimeout(() => {
                setIsOpen(!isOpen);
            }, 600);
        }
        else {
            setFade(styles.fadeIn);
            setIsOpen(!isOpen);
        }
    }

    return (
        <>
            <nav>
                <div className={styles.navWrapper}>
                    <ul className={styles.navList}>
                        <li>
                            <div className={styles.linkBlock}>
                                <Link to="#skills"><h2>Skills</h2></Link>
                                <div className={styles.underline}></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.linkBlock}>
                                <Link to="#education"><h2>Experience</h2></Link>
                                <div className={styles.underline}></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.linkBlock}>
                                <Link to="#education"><h2>Education</h2></Link>
                                <div className={styles.underline}></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.linkBlock}>
                                <Link to="#my-work"><h2>My Work</h2></Link>
                                <div className={styles.underline}></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.linkBlock}>
                                <Link to="#contact"><h2>Contact me</h2></Link>
                                <div className={styles.underline}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.navMobile}>
                    <div ref={buttonRef} className={styles.menuIconWrapper} onClick={handleIsOpen}><img className={styles.menuIcon} src="./menu.png" alt="" /></div>
                    <div className={`${styles.navDropdown} ${isOpen ? styles.active : ''} ${fade}`}>
                        <ul className={styles.navList}>
                            <li>
                                <div className={styles.linkBlock}>
                                    <a href="#skills"><h2>Skills</h2></a>
                                    <div className={styles.underline}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.linkBlock}>
                                    <a href="#education"><h2>Experience</h2></a>
                                    <div className={styles.underline}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.linkBlock}>
                                    <a href="#education"><h2>Education</h2></a>
                                    <div className={styles.underline}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.linkBlock}>
                                    <a href="#my-work"><h2>My Work</h2></a>
                                    <div className={styles.underline}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.linkBlock}>
                                    <a href="#contact"><h2>Contact me</h2></a>
                                    <div className={styles.underline}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}