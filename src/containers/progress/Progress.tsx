import { method1, method2, method3 } from "../../assets";
import Subtitle from "../../components/subtitle/Subtitle";
import "./progress.css";

interface ICardProps {
    imgSrc: string, 
    title: string, 
    text: string
}

const Card: React.FC<ICardProps> = ({imgSrc, title, text}) => {
    return (
        <div className="app__progress-content_card" id="progress">
            <img src={imgSrc} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}


const Progress = () => {
    const cardsData = [
        {image: method1, title: 'Sketching', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis.'},
        {image: method2, title: 'Finalizing', text: 'Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae.'},
        {image: method3, title: 'Building', text: 'Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.'},

    ]

    return (
        <div className="app__progress">
            <Subtitle text="Our process"/>
            <h2>How we do what we do.</h2>
            <div className="app__progress-content">
                {
                    cardsData.map((card, i) => (
                        <Card imgSrc={card.image} title={card.title} text={card.text} key={i}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Progress;