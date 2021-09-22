import styled from "styled-components";

export const ContainerNav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 4rem;
    align-items: center;
    background: #ffffff;
    padding: 0 1.5rem;
`;
export const LogoContainer = styled.div`

`;

export const NavContainer = styled.div`
    
`;
export const Logo = styled.img`
    
`;
export const Ul = styled.ul`
    
`;
export const Li = styled.li`
    display: inline-block;
    list-style-type: none;
    margin-left: 2.7rem;
    line-height:4;
    cursor:pointer;
    &:hover{
        box-shadow: inset 0 -13px 1px -8px #E47D31;
    }
   
`;
export const LiBtnRight = styled.li`
    display: inline-block;
    list-style-type: none;
    background: #E47D31;
    color: white;
    padding: 0.5rem .7rem 0.4rem;
    text-transform: uppercase;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    width: 84px;
    margin-left: 1px;
    cursor:pointer;
    &:hover{
        background: rgb(228 125 49 / 62%);
    }
`;
export const LiBtnLeft = styled.li`
    display: inline-block;
    list-style-type: none;
    margin-left: 2.7rem;
    background: #E47D31;
    color: white;
    padding: 0.5rem .7rem 0.4rem;
    text-transform: uppercase;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    width: 84px;
    cursor:pointer;
    &:hover{
        background: rgb(228 125 49 / 62%);
    }
`;
