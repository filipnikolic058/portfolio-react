import styles from './education.module.css'
import Columns from '../../Components/Columns/Columns'

export default function Education() {

    return (
        <>
            <section id='education' className={`section ${styles.background}`}>
                <div className='container'>
                    <Columns
                        heading='My Experience'
                        text='I have experience in creating custom websites using Webflow, as well as managing existing ones. My React experience is currently based on personal projects, and real world projects that I have particapated in as a freelancer.' 
                        imgUrl='./experience.png'
                        reverse={false}/>
                    <Columns
                        heading='Education'
                        text='I have graduated from an IT High School and I am currently studying Software engineering at Union University in Belgrade, School of Computing. My current knowledge comes from personal projects, online courses (mostly from Youtube), and, mostly, from real world projects that I particapated in.' 
                        imgUrl='./education.png'
                        reverse={true}/>
                </div>
            </section >
        </>
    )
}