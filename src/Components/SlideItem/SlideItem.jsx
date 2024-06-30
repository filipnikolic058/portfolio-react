import styles from './slideitem.module.css'

export default function SlideItem(props){

    return(
        <>
            <div className={styles.slidewrapper}>
                <img className={styles.img} src={props.imgUrl} alt="" />
                <h3 className={styles.sliderHeading}>{props.heading}</h3>
                <p className={styles.paragraph}>{props.text}</p>
            </div>
        </>
    );
}