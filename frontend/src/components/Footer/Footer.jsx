import {SocialMediaIcon} from "../Buttons/SocialMediaButton";
import Twitter from "../../assets/svgs/twitter.svg";
import Instagram from "../../assets/svgs/instagram.svg";
import Facebook from "../../assets/svgs/facebook.svg";
import GooglePlus from "../../assets/svgs/googleplus.svg";
import {
    FooterContainer,
    FooterContainerNav,
    FooterCopyrights,
    Ul,
    Li,
    ContainerIcons,
} from "./FooterStyled";

const Footer = () => {

    return(
        <FooterContainer>
            
            <FooterContainerNav>
                <Ul>
                    <Li>About Us</Li>
                    <Li>Press</Li>
                    <Li>Blog</Li>
                    <Li>iOS</Li>
                    <Li>Android</Li>
                </Ul> 
                <ContainerIcons>
                    <SocialMediaIcon src={Facebook}/>
                    <SocialMediaIcon src={Twitter}/>
                    <SocialMediaIcon src={GooglePlus}/>
                    <SocialMediaIcon src={Instagram}/>
                </ContainerIcons>
            </FooterContainerNav>
            <hr style={{height: '1px', backgroundColor:'#ccc', border: 'none'}} />
            <FooterCopyrights>
                <p>&copy; Copyright Luna 2018</p>
            </FooterCopyrights>

        </FooterContainer>
    );
}

export default Footer;