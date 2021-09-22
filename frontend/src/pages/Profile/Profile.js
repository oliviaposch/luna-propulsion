import React,{useState} from 'react'
import MenuBar from '../../components/Header/Navbar/Navbar' 
import Footer from '../../components/Footer/Footer'
import {MainContainer,MainContainerLeft,MainContainerMiddle,MainContainerRight,
    Tag,Menu,BannerOverlay,ProfilePicture,MenuOptions,MenuOption} from './ProfileStyled'
import Banner from "../../components/Banner/Banner"
import ProfileReviews from "../../components/ProfileReviews/ProfileReviews"
import ProfileComments from "../../components/ProfileComments/ProfileComments"
import ProfileRestaurants from "../../components/ProfileRestaurants/ProfileResturants"
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit"


const Profile = () => {

    
    const [showReviews,toggleShowReviews] = useState(false)
    const [showComments,toggleShowComments] = useState(false)
    const [showRestaurants,toggleShowRestaurants] = useState(false)
    const [showEditProfile,toggleShowEditProfile] = useState(false)

    const reviewsClickHandler = () =>{       
        toggleShowComments(false)
        toggleShowRestaurants(false)
        toggleShowEditProfile(false)
        toggleShowReviews(!showReviews)
    }

    const commentsClickHandler = ()=>{      
        toggleShowRestaurants(false)
        toggleShowEditProfile(false)
        toggleShowReviews(false)
        toggleShowComments(!showComments)
    }

    const restaurantsClickHandler = ()=>{        
        toggleShowEditProfile(false)
        toggleShowReviews(false)
        toggleShowComments(false)
        toggleShowRestaurants(!showRestaurants)
    }

    const editProfileClickHandler = ()=>{      
        toggleShowRestaurants(false)        
        toggleShowReviews(false)
        toggleShowComments(false)
        toggleShowEditProfile(!showEditProfile)
    }


    return (
        <>
        <MenuBar></MenuBar>
        <Banner></Banner>
        <Menu>
            <ProfilePicture>
                <img alt="profilePicture"></img>
            </ProfilePicture>
            <MenuOptions>
                <MenuOption>
                    <p>[USERNAME]'s profile</p>
                </MenuOption>
                <MenuOption>
                    <button onClick={reviewsClickHandler}>
                        <img alt="icon"></img>
                        <p>Reviews</p>
                    </button>                    
                </MenuOption>
                <MenuOption>
                    <button onClick={commentsClickHandler}>
                        <img alt="icon"></img>
                        <p>Comments</p>
                    </button>                   
                </MenuOption>
                <MenuOption>
                    <button onClick={restaurantsClickHandler}>
                        <img alt="icon"></img>
                        <p>Restaurants</p>
                    </button>                 
                </MenuOption>
                <MenuOption>
                    <button onClick={editProfileClickHandler}>
                        <img alt="icon"></img>
                        <p>Edit profile</p>
                    </button>                    
                </MenuOption>
            </MenuOptions>
        </Menu>
        <BannerOverlay></BannerOverlay>     
        <MainContainer>            
            <MainContainerLeft></MainContainerLeft>
            <MainContainerMiddle>                
                {showRestaurants===true?
                <ProfileRestaurants>
                </ProfileRestaurants>    
                :
                null}
                {showReviews===true?
                <ProfileReviews>                    
                </ProfileReviews>    
                :
                null}
                {showComments===true?
                <ProfileComments>
                </ProfileComments>    
                :
                null}
                {showEditProfile===true?
                <ProfileEdit>
                </ProfileEdit>    
                :
                null}
                               
            </MainContainerMiddle>            
            <MainContainerRight>
                <Tag>ABOUT [PROFILE NAME]</Tag>                
                <Tag>
                    Location
                    <p>[LOCATION]</p>
                </Tag>
                <Tag>
                    Luna member since
                    <p>[DATE JOINED]</p>
                </Tag>
                <Tag>
                    Things I love
                    <p>[THINGS USER LOVES]</p>
                </Tag>                
                <Tag>
                    Description
                    <p>[DESCRIPTION]</p>
                </Tag>                
            </MainContainerRight>         
        </MainContainer>
        <Footer></Footer>
        </>
    )
}

export default Profile