import star_full from "../Images/star_full.png"
import star_half from "../Images/star_half.png"

const UdemyCard = ({image, title, author, score, views, curPrice, shelfPrice }) => {
    return (
        <div className="UdemyCard" >
            <img src={image} />
            <p className="title">{title}</p>
            <p className="author">{author}</p>
            <div className="scoreLine">
                <p className="score">{score}</p>
                <img src={star_full} className="starFull"/>
                <img src={star_full} className="starFull"/>
                <img src={star_full} className="starFull"/>
                <img src={star_full} className="starFull"/>
                <img src={star_half} className="starHalf"/>
                <p className="views">{views}</p>
            </div>
            <div className="priceLine">
                <p className="curPrice">{curPrice}</p>
                <p className="shelfPrice">{shelfPrice}</p>
            </div>
            <button className="bestSeller">Bestseller</button>
        </div>
    )
}

export default UdemyCard;