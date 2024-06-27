import './fullscreen.css';

interface IFullscreenProps {
  imgScr: string,
  title: string,
  subtitle: string,
  contentPosition?: string
}

const Fullscreen: React.FC<IFullscreenProps> = ({imgScr, title, subtitle, contentPosition='end'})  => {
  return (
    <div className='fullscreen' id='projects' style={{backgroundImage: `url(${imgScr})`, backgroundSize: 'cover',backgroundPosition: 'center',}}>
      <div className=" container" style={{alignItems: `${contentPosition}`}}>
        <div className="fullscreen__content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Fullscreen
