import React, { Component } from 'react'

import styled from 'styled-components';

const Input = styled.input`
width: 364px;
height: 52px;
margin: 8px 16px;
padding-left: 24px;
border: 1px solid #EBEBEB;
border-radius: ${props => props.theme.borderRadius};
font-size: ${props => props.theme.textSizeL};
font-weight: ${props => props.theme.textWeightBold};
::placeholder {
color: ${props => props.theme.textLightGray};
}
`


export class RegistrationInputField extends Component {
    render() {
        return (
            <Input type={this.props.type} placeholder={this.props.placeholder}/>
        )
    }
}

export default RegistrationInputField
