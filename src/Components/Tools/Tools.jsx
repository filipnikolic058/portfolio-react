import Title from '../Title/Title';
import styles from './tools.module.css'
import Slider from "react-slick";
import SlideItem from '../SlideItem/SlideItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from 'react';
import Observe from '../../Functions/Observer';

export default function Tools() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const [isVisible, setisVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        Observe(ref, setisVisible);
    }, []);

    return (
        <>
            <div className='container'>
                <Title isH3={true} text="Tools I use" />
                <div ref={ref} className={`${styles.sliderWrapper} ${isVisible ? styles.visible : ''}`}>
                    <Slider {...settings}>
                        <SlideItem imgUrl='./vscode.png' heading='VSCode' text='As most developers, I am most comfortable with using VSCode. For me its the best because of easy source control and its many extensions.' />
                        <SlideItem imgUrl='./tailwind.svg' heading='TailwindCSS' text='I prefer using Tailwind CSS for its utility-first approach, allowing me to quickly prototype responsive, custom designs while maintaining clean, maintainable code.' />
                        <SlideItem imgUrl='./git.png' heading='Git' text='I am familiar with basic Git concepts, merging, branching and conflict resolving. I write clear commit messages to make sure my pull requests are clear.' />
                        <SlideItem imgUrl='./figma.png' heading='Figma' text='Not much of a web designer, but I am proficient in using figma and creating fuctional and modern designs.' />
                        <SlideItem imgUrl='./webflow.png' heading='Webflow' text='When it comes to simple sites I love using Webflow. I have experience in managing, developing and designing sites from scratch using Webflow and Figma.' />
                    </Slider>
                </div>
            </div>
        </>
    );
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