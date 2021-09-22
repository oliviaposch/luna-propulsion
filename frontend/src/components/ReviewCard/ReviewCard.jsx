import {
    CardContainer,
    ProfileImage,
    ProfileImageBox,
    ProfileImgRow,
    UserDescription,
    UserName,
    UserNameBox,
    UserReviews,
} from "./ReviewCardStyled"

// import { useHistory } from "react-router-dom";
import UserDefaultImg from "../../assets/images/profilePicture.png";

const ReviewCard = ({
        profile_pic,
        first_name,
        last_name,
        description,
}) => {
    //console.log(image);
    //let history = useHistory();

    // function onClickHandler() {
    //     history.push("/registration");
    // }

    return (
        <CardContainer>
            <ProfileImgRow>
                <ProfileImageBox><ProfileImage src={profile_pic ? profile_pic : UserDefaultImg} alt="profile image"/></ProfileImageBox>
                <UserNameBox>
                    <UserName>{`${first_name} ${last_name}`}</UserName>
                    <UserReviews><span>Reviews in total</span></UserReviews>
                </UserNameBox>
            </ProfileImgRow>

            <UserDescription> {description}</UserDescription>


        </CardContainer>
    );
};

export default ReviewCard