import styles from './tech.module.css'
import Title from '../Title/Title'
import TechCard from '../TechCard/TechCard'

export default function Technologies(){

    return (
        <>
            <div className='section container'>
                <Title isH3={true} text = "Technologies I use"/>
                <div className={styles.grid}>
                    <TechCard imgUrl = './react.png' heading = 'React' text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'/>
                    <TechCard imgUrl = './nodejs.png' heading = 'NodeJS' text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'/>
                    <TechCard imgUrl = './express.png' heading = 'ExpressJS' text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'/>
                    <TechCard imgUrl = './mysql.png' heading = 'SQL based DB' text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'/>
                </div>
            </div>
        </>
    )
}