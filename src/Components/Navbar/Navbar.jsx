import { useState } from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleIsOpen(){
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav>
                <div className={styles.navWrapper}>
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
                                <a href="#contact"><h2>Contact me</h2></a>
                                <div className={styles.underline}></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.navMobile}>
                    <div onClick={handleIsOpen}><img className={styles.menuIcon} src="/menu.png" alt="" /></div>
                    <div className={`${styles.navDropdown} ${isOpen ? styles.active : ''}`}>
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