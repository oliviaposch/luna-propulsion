import React, { Component } from 'react'

import styled from 'styled-components';

const Button = styled.button`
    width: 392px;
    height: 46px;
    margin-top: 14px;
    margin-bottom: 8px;
    /* padding: 16px 64px; */
    border: none;
    border-radius: ${props => props.theme.buttonBorderRadius};
    background-color: ${props => props.theme.accentColor};
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.textSizeM};
    font-weight: ${props => props.theme.textWeightRegular};

`

export class PrimaryButtonMedium extends Component {
    render() {
        return (
            <Button>{this.props.text}</Button>
        )
    }
}

export default PrimaryButtonMedium
