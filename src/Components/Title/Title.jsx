import { useEffect, useRef, useState } from "react";
import Observe from "../../Functions/Observer";

export default function Title(props) {
    const [title, setVisibleTitle] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        Observe(titleRef, setVisibleTitle);
    }, []);

    return (
        <>
            {props.isH3 ?
                <h3 ref={titleRef} className={`section-title ${title ? 'title-visible' : ''}`}>{props.text}</h3>
                :
                <h2 ref={titleRef} className={`section-title ${title ? 'title-visible' : ''}`}>{props.text}</h2>}
        </>
    )
}