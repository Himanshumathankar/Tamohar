import './background.css'
import '../../assets/background_video.mp4'

const background = ({playstatus}) => {
  if (playstatus){
    return(
        <video className="background" autoPlay loop muted>
        <source src={background_video} type='video/mp4' />
        </video>
    )
  }
  
}

export default background
