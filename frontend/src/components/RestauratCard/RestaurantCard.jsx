import { useHistory } from "react-router-dom";
// import Stars from "../Stars/Stars";
import ReactStars from "react-rating-stars-component";
import RestaurantDefaultImg from "../../assets/images/barBuffet.png";
import {
    CardContainer,
    RestaurantAddress,
    RestaurantName,
    CardReviews,
    CardImageContainer,
    CardImage,
    ContainerReviewNum,

} from "./RestaurantCardStyled";

const RestaurantCard = ({
        name,
        country,
        street,
        city,
        zip,
        image,
        reviews
}) => {
    //console.log(image);
    let history = useHistory();

    //goes to the restaurant page
    function onClickHandler() {
        history.push("/registration");
    }

    return (
        <CardContainer onClick={onClickHandler}>
            <RestaurantName>{name}</RestaurantName>
            <RestaurantAddress>{`${street}, ${city} ${zip} - ${country}`}</RestaurantAddress>
            <CardReviews>
                {/* <Stars /> */}
              
                <ReactStars
                    count={5}
                    value={reviews.length}
                    edit={false}
                    size={24}
                    activeColor="#F8E71C"
                    color="#EBEBEB"
                />
 
                <ContainerReviewNum>{reviews.length}</ContainerReviewNum>    
            </CardReviews>
            <CardImageContainer>
                <CardImage src={image ? image : RestaurantDefaultImg} alt={name}/>
            </CardImageContainer>
        </CardContainer>
    );
};

export default RestaurantCard;


