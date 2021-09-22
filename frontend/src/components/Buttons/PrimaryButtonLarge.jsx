import React, { Component } from 'react'

import styled from 'styled-components';

const Button = styled.button`
    margin: 42px 0;
    padding: 16px 64px;
    border: none;
    border-radius: ${props => props.theme.buttonBorderRadius};
    background-color: ${props => props.theme.accentColor};
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.textSizeL};
    font-weight: ${props => props.theme.textWeightRegular};

`

export class PrimaryButtonLarge extends Component {
    render() {
        return (
            <Button>{this.props.text}</Button>
        )
    }
}

export default PrimaryButtonLarge
