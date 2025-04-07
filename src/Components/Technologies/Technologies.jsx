import styles from './tech.module.css'
import Title from '../Title/Title'
import TechCard from '../TechCard/TechCard'

export default function Technologies() {

    return (
        <>
            <div className='section container'>
                <Title isH3={true} text="Technologies I use" />
                <div className={styles.grid}>
                    <TechCard imgUrl='./react.png' heading='ReactJS' text='As a proficient React developer, I specialize in using React Hooks, the Context API, and performance optimization techniques to build efficient, scalable applications.' />
                    <TechCard imgUrl='./nextjs-icon.svg' heading='NextJS' text='As a skilled Next.js developer, I leverage file-based routing, API routes, and server-side rendering to create fast, SEO-friendly, and maintainable web applications.' />
                    <TechCard imgUrl='./nodejs.png' heading='NodeJS' text='Leveraging the power of Node.js, I build high-performance, event-driven applications and RESTful APIs that handle real-time data and scale efficiently.' />
                    <TechCard imgUrl='./express.png' heading='ExpressJS' text='I use ExpressJS to build well-structured, medium-scale backend projects with custom routing, middleware, and session handling, ensuring reliable performance and maintainability.' />
                    <TechCard imgUrl='./supabase.png' heading='Supabase' text='I enjoy using Supabase as a powerful backend-as-a-service, especially for handling authentication, real-time data, and Postgres queries without the need to manage a traditional backend.'/>
                    <TechCard imgUrl='./mysql.png' heading='SQL based DB' text='I use MySQL for managing relational data efficiently, leveraging its powerful query capabilities and structured schema design to support data-driven applications.' />
                </div>
            </div>
        </>
    )
}