import './people.css';

interface IPeopleProps {
  imgSrc: string,
  name: string,
  position: string
}

const People: React.FC<IPeopleProps> = ({imgSrc, name, position}) => {
  return (
    <div className='people'>
      <div className="people__img">
        <img src={imgSrc} alt="human" />
      </div>

      <div className="people__info">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
  )
}

export default People
