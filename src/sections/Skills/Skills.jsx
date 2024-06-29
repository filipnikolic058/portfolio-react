import styles from './skills.module.css'
import Card from './Card/Card'

export default function Skills(){

    return (
        <>
            <section className={styles.background}>
                <div className='container'>
                    <h2 className='section-title'>Skills</h2>
                    <h3 className='section-subtitle'>Programing languages I learned over time</h3>
                    <Card imgUrl='/c-logo.png' text = 'Good old C, learned a lot about pointers, how machines “think” and basic data structures through C.'/>
                    <Card imgUrl='/html.png' text = 'HTML, not many things to say about this, its a must know it kinda thing.'/>
                    <Card imgUrl='/css.png' text = 'CSS, can’t make a website without it'/>
                    <Card imgUrl='/js.png' text = 'Javascript, hell. I like it. Can’t go without it nowadays.'/>
                    <Card imgUrl='/java.png' text = 'Java, although i don’t like it that much. Its the first object-oriented language I learned and for that purpose its great.'/>
                </div>
            </section>
        </>
    )
}