import styled from "styled-components";
import MenuBar from "../Navbar/Navbar";
import SearchBar from "../SearchRestaurants/Search"; 
import backgroundImg from "../../../assets/images/headerHomeBg.png";

const HearderContainer = styled.header`
    
`;
const BackgroundImage = styled.div`
    background-image:url(${backgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`;
const HeaderHome = () => {
    return (
        <HearderContainer>
            <MenuBar/>
            <BackgroundImage>
                <SearchBar/>
            </BackgroundImage>
            
        </HearderContainer>
    );
}
export default HeaderHome;