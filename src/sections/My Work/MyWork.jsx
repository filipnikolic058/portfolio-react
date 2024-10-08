import styles from './mywork.module.css'
import WorkExample from '../../Components/WorkExample/WorkExample'
import Title from '../../Components/Title/Title'

export default function MyWork() {
    return (
        <>
            <div className="section">
                <div id='my-work' className="container">
                    <Title isH3={false} text="Some of my Work"/>
                    <div className={styles.grid}>
                        <WorkExample link='https://konkab.com' imgUrl='/konkab-min.jpg' heading='Konkab' text='The primary goal of this website was to make this business look more professional and provide more information about it. Design was not a priority so it was made simple but functional. Development was done using Webflow and some custom code.'/>
                        <WorkExample link='https://tepihservispetrovic.rs' imgUrl='/tepihservis-min.jpg' heading='Tepih Servis Petrovic' text='The site was developed in Webflow and designed in Figma for a local client. I have integrated slick slider, Google Maps, analytics, and tracking SEO through Google Search Console. I manage the domain, hosting, and mail accounts through Cpanel.'/>
                        <WorkExample link='https://secure.bigbluhammer.com' imgUrl='/bluhammer-min.jpg' heading='Big Blu Hammer' text="This website was not developed by me, but I manage its UI and UX, fix bugs, manage its CMS etc."/>
                        <WorkExample link='https://secure.oakhilliron.com' imgUrl='/oakhilliron-min.jpg' heading='Oak Hill Iron' text="Same as with Blu, but I didn't manage its CMS that much, only UI and UX."/>
                    </div>
                </div>
            </div>
        </>
    )
}