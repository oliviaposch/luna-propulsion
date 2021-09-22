import React, { Component } from 'react'

import styled from 'styled-components';

const RegistrationTitleStyle = styled.div`
    width: 100%;
    height: 60px;
    padding-top: 48px;
    padding-bottom: 56px;
    display: flex;
	flex-direction: column;
	align-items: center;
    p {
        font-weight: ${props => props.theme.textWeightBold};
        font-size: ${props => props.theme.textSizeXL};
        color: ${props => props.theme.textGray}
    }
    div {
        width: 100px;
        height: 3px;
        margin-top: 16px;
        background-color: ${props => props.theme.accentColor};
    }
`


export class RegistrationTitle extends Component {
    render() {
        return (
            <RegistrationTitleStyle>
                <p>{this.props.title}</p>
                <div></div>
            </RegistrationTitleStyle>
        )
    }
}

export default RegistrationTitle
