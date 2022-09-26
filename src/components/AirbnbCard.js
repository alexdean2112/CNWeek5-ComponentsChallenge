import star_black from "../Images/star_black.png"

const AirbnbCard = ({image, title, score, description}) => {
    return (
        <div className="AirbnbCard">
            <div>
                <img src={image} className="demoImage"/>
            </div>
            <div className="infoRow">
                <p className="title2">{title}</p>
                <p className="score2"><img src={star_black} className="starBlack"/>{score}</p>
            </div>
            <div>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default AirbnbCard;