import {
    ContainerNav,
    Li,
    LiBtnLeft,
    LiBtnRight,
    Logo,
    LogoContainer,
    NavContainer,
    Ul,
} from "./NavbarStyled"

import logo from "../../../assets/svgs/logo.svg";
import { useHistory } from "react-router";

const MenuBar = () => {

    const history = useHistory();

    const homeNavHandler = () => {
        history.push("/");
    }
    const searchNavHandler = () => {
        history.push("/search");
    }
    const profileNavHandler = () => {
        history.push("/profile");
    }
    const signupNavHandler = () => {
        history.push("/registration");
    }
    const loginNavHandler = () => {
        history.push("/login");
    }


    return (
        <ContainerNav>
            <LogoContainer>
                <Logo src={logo}/>
            </LogoContainer>
            <NavContainer>
                <Ul>
                    <Li onClick={homeNavHandler}>Home</Li>
                    <Li onClick={searchNavHandler}>Search</Li>
                    <Li onClick={profileNavHandler}>Profile</Li>
                    <LiBtnLeft onClick={signupNavHandler}>Signup</LiBtnLeft>
                    <LiBtnRight onClick={loginNavHandler}>Login</LiBtnRight>
                </Ul>
            </NavContainer>
        </ContainerNav>
    );
}

export default MenuBar;