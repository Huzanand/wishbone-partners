import './subtitle.css';

interface ISubtitleProps {
    text: string
}

const Subtitle:React.FC<ISubtitleProps> = ({text}) => {
  return (
    <div className='subtitle'>
      {text}
    </div>
  )
}

export default Subtitle
