import styled from 'styled-components';


export const MainContainer = styled.div`
    width: 100%;
    min-width: 1200px;
    min-height: 800px;
    height: 80%;
    border: 1px green solid;
    display: flex;
    background-color: ${props => props.theme.bodyBackgroundColor}
`;


export const MainContainerLeft = styled.div`
    width: 30%;
    border: 1px green solid;
    min-height: 600px;
    min-width: 450px;
`;

export const MainContainerMiddle = styled.div`
    width: 40%;
    border: 1px green solid;
    min-height: 600px;
    min-width: 600px;
`;

export const MainContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 30%;
    border: 1px green solid;
    min-height: 600px;
    min-width: 400px;
`;

export const Tag = styled.div`
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;    
    margin-left: 10px;
`;

export const Menu = styled.div`
    width: 300px;
    height: 550px;
    border: 1px green solid;
    position: absolute;
    top: 120px;
    left: 150px;
    background-color: white;
`;

export const ProfilePicture = styled.div`
    height: 250px;
    border: 1px green solid;
`;

export const MenuOptions = styled.div`
    height: 350px;
`;

export const MenuOption = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    border: 1px green solid;
    button {
        display: flex;
        align-items: center;
        background-color: white;
        border: none;
        width: 100%;
        height: 100%;
        cursor: pointer;
        :hover{
                background: lightgray;
            }        
        p {
            margin-left: 20px;
        }
    }
`;

export const BannerOverlay = styled.div`
    width: 190px;
    height: 145px;
    border: 2px green solid;
    position: absolute;
    top: 120px;
    left:475px;
    background-color: transparent;

`;