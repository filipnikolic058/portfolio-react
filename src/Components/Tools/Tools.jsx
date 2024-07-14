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
                        <SlideItem imgUrl='./vscode.png' heading='VSCode' text='Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum' />
                        <SlideItem imgUrl='./git.png' heading='Git' text='Lorem Ipsum' />
                        <SlideItem imgUrl='./figma.png' heading='Figma' text='Lorem Ipsum' />
                        <SlideItem imgUrl='./webflow.png' heading='Webflow' text='Lorem Ipsum' />
                    </Slider>
                </div>
            </div>
        </>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <img src="/arrowright.svg" alt=""
            className={className}
            style={{ ...style, right: 0, width: '32px', height: '32px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img src="/arrow.svg" alt=""
            className={className}
            style={{ ...style, left: 0, width: '32px', height: '32px' }}
            onClick={onClick}
        />
    );
}