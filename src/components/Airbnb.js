import AirbnbCard from "./AirbnbCard"
import abnb_img1 from "../Images/abnb_img1.png"
import abnb_img2 from "../Images/abnb_img2.png"
import abnb_img3 from "../Images/abnb_img3.png"
import abnb_img4 from "../Images/abnb_img4.png"

const Airbnb = () => {
    return (
        <div className="airBnBRow">
            <AirbnbCard image={abnb_img1} title="Island-Badachro" score="4.72" description="Nature Observatory on Secluded Island"/>
            <AirbnbCard image={abnb_img2} title="Loft - Edinburgh" score="4.99" description="Classical Apartment on the Rotal Mile"/>
            <AirbnbCard image={abnb_img3} title="Tiny Home - Drimnin" score="4.95" description="Unique and Secluded AirShip with..."/>
            <AirbnbCard image={abnb_img4} title="Hut - Sutton" score="4.92" description="Unique glamping experience near Ely &..."/>
        </div>
    )
}

export default Airbnb;