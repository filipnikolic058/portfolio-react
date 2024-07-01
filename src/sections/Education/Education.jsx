import styles from './education.module.css'
import Columns from '../../Components/Columns/Columns'

export default function Education() {

    return (
        <>
            <section className={`section ${styles.background}`}>
                <div className='container'>
                    <Columns
                        heading='My Experience'
                        text='I have experience in creating custom websites using Webflow, as well as managing existing ones. My React experience is currently based on personal projects.' 
                        imgUrl='/experience.png'
                        reverse={false}/>
                    <Columns
                        heading='Education'
                        text='I have just graduated from an IT High School and secured myself a place at Union University in Belgrade, School of Computing, Software engineering studies. My current knowledge mostly comes from personal projects and online courses (mostly from Youtube).' 
                        imgUrl='/education.png'
                        reverse={true}/>
                </div>
            </section >
        </>
    )
}