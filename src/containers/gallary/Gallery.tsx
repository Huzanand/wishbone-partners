import './gallery.css';

import { gallery1, gallery2, gallery3 } from '../../assets';

interface IGalleryProps {
    imgSrc: string,
    title: string,
    subtitle: string
}

const GalleryCart: React.FC<IGalleryProps> = ({imgSrc, title, subtitle}) => {
    return (
        <div className="app__galery-content_cards-card" style={{backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover',backgroundPosition: 'center',}}>
            <div className="app__galery-content_card-info">
                <h3>{subtitle}</h3>
                <h2>{title}</h2>
            </div>

            <button type='button'>Read more</button>
        </div>
    )
}

const Gallery = () => {

    const galleryData = [
        {
          img: gallery1,
          title: "Big Road Brewery",
          subtitle: "New York"
        },
        {
          img: gallery2,
          title: "Big Road Brewery",
          subtitle: "New York"
        },
        {
          img: gallery3,
          title: "Big Road Brewery",
          subtitle: "New York"
        }
    ]

    return (
        <div className="app__galery" id='news'>
                <div className="container">
                <h2>Featured projects</h2>
                <h3>Some of the latest and greatest projects from us here at Wishbone+Partners.</h3>
                <div className="app__galery-content">
                    <div className="app__galery-content_cards">
                        {
                            galleryData.map((card, i) => (
                                <GalleryCart imgSrc={card.img} title={card.title} subtitle={card.subtitle} key={i}/>
                            ))
                        }
                    </div>

                    <button type='button' className='app__galery-content_button '><a href="#">View all projects</a></button>
                </div>
            </div>
        </div>
    )
}

export default Gallery;