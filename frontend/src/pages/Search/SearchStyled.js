import styled from "styled-components";

export const CardsContainerFlex = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

`;
export const Ul = styled.ul`
    text-align: center;
    width: fit-content;
    margin: auto;
    margin-bottom: 60px;
    margin-top: 20px;
    border-bottom: 1px solid #D8D8D8;
`;
export const Li = styled.li`
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    list-style: none;
    display: inline-block;
    padding-bottom: 20px;
    padding-left: 1.7rem;
    padding-right: 1.7rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-right: 38px;
    cursor:pointer;
    &:hover, 
    &.active{
        border-bottom: 4px solid #E47D31;
    }
`;