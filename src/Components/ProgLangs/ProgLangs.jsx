import styles from './proglangs.module.css'
import Card from '../Card/Card';
import Title from '../Title/Title';

export default function ProgLangs() {

    return (
        <>
            <div className='container'>
                <Title text="Skills" />
                <Title isH3={true} text="Programing languages I learned over time" />
                <Card imgUrl='./c-logo.png' text='Good old C, learned a lot about pointers, memory allocation, how machines “think”, data structures and algorithms through C.' />
                <Card imgUrl='./html.png' text='HTML, not many things to say about this, its a must know it kinda thing.' />
                <Card imgUrl='./css.png' text='CSS, can’t make a website without it. I use it to craft clean, responsive layouts that look great on any screen.' />
                <Card imgUrl='./js.png' text='Javascript, hell. I like it. Can’t go without it nowadays.' />
                <Card imgUrl='./typescript.png' text='TypeScript, it helps me write cleaner, more reliable code while keeping my projects scalable.' />
                <Card imgUrl='./java.png' text='Java, although i don’t like it that much. Its the first object-oriented language I learned and for that purpose its great.' />
            </div>
        </>
    )
}