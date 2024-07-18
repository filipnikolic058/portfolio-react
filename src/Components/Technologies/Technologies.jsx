import styles from './tech.module.css'
import Title from '../Title/Title'
import TechCard from '../TechCard/TechCard'

export default function Technologies() {

    return (
        <>
            <div className='section container'>
                <Title isH3={true} text="Technologies I use" />
                <div className={styles.grid}>
                    <TechCard imgUrl='./react.png' heading='React' text='As an intermediate React developer, I am skilled in using React Hooks, the Context API, and performance optimization techniques to build efficient, scalable applications.' />
                    <TechCard imgUrl='./nodejs.png' heading='NodeJS' text='Comfortable with NodeJS environment, creating back end using ExpressJS and integrating databases.' />
                    <TechCard imgUrl='./express.png' heading='ExpressJS' text= 'I am not that experienced with ExpressJS, but I can create simple back end applications if needed.' />
                    <TechCard imgUrl='./mysql.png' heading='SQL based DB' text='Creating databases from scratch using SQL is no problem. I am most comfortable with MySQL but I have also used SupaBase for that purpose.' />
                </div>
            </div>
        </>
    )
}