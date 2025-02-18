import styles from './mywork.module.css'
import WorkExample from '../../Components/WorkExample/WorkExample'
import Title from '../../Components/Title/Title'
import Slider from 'react-slick';

export default function MyWork() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const images = [
        './mojservis1.png',
        './mojservis2.png',
        './mojservis3.png',
        './mojservis4.png',
        './mojservis5.png',
    ];

    return (
        <>
            <div className="section">
                <div id='my-work' className="container">
                    <Title isH3={false} text="Some of my Work" />
                    <div className={styles.grid}>
                        <WorkExample link='https://konkab.com' imgUrl='/konkab-min.jpg' heading='Konkab' text='The primary goal of this website was to make this business look more professional and provide more information about it. Design was not a priority so it was made simple but functional. Development was done using Webflow and some custom code.' />
                        <WorkExample link='https://tepihservispetrovic.rs' imgUrl='/tepihservis-min.jpg' heading='Tepih Servis Petrovic' text='The site was developed in Webflow and designed in Figma for a local client. I have integrated slick slider, Google Maps, analytics, and tracking SEO through Google Search Console. I manage the domain, hosting, and mail accounts through Cpanel.' />
                        <WorkExample link='https://secure.bigbluhammer.com' imgUrl='/bluhammer-min.jpg' heading='Big Blu Hammer' text="This website was not developed by me, but I manage its UI and UX, fix bugs, manage its CMS etc." />
                        <WorkExample link='https://secure.oakhilliron.com' imgUrl='/oakhilliron-min.jpg' heading='Oak Hill Iron' text="Same as with Blu, but I didn't manage its CMS that much, only UI and UX." />
                    </div>
                    <Title isH3={false} text="Mobile apps" />
                    <div className={styles.sliderContainer}>
                        <div className={styles.sliderWrapper}>
                            <Slider {...settings} className={styles.slider}>
                                {images.map((src, index) => (
                                    <div key={index} className={styles.slide}>
                                        <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className={styles.textWrapper}>
                            <h2 className={styles.title}>Moj Servis</h2>
                            <p className={styles.description}>
                                I also do Mobile development using React Native and Expo. This app is a personal project made with Supabase. I used supabase Auth and Storage to manage users and photos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <img src="./arrowright.svg" alt=""
            className={className}
            style={{ ...style, right: 0, width: '32px', height: '32px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src="./arrow.svg" alt=""
            className={className}
            style={{ ...style, left: 0, width: '32px', height: '32px' }}
            onClick={onClick}
        />
    );
}