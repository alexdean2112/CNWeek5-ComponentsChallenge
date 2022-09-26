import UdemyCard from "./UdemyCard"
import image1 from "../Images/udemy_img1.png"
import image2 from "../Images/udemy_img2.png"
import image3 from "../Images/udemy_img3.png"

const Udemy = () => {
    return (
        <div className = "UdemyBar">
            <UdemyCard image={image1} title="The Complete 2022 Web Development Bootcamp" author="Dr. Angela Yu" score="4.7" views="(224,949)" curPrice="£19.99" shelfPrice="£69.99"/>
            <UdemyCard image={image2} title="100 Days of Code: The Complete Python Pro Bootcamp for 2022" author="Dr. Angela Yu" score="4.7" views="(139,610)" curPrice="£17.99" shelfPrice="£59.99"/>
            <UdemyCard image={image3} title="Ultimate AWS Certified Solutions Architect Associate..." author="Stephane Maarek | AWS Certified Cloud Pra..." score="4.7" views="(145,685)" curPrice="£17.99" shelfPrice="£59.99"/>
        </div>
    )
}

export default Udemy;