import React, { Component } from 'react'

import PrimaryButtonMedium from '../../components/Buttons/PrimaryButtonMedium'
import styled from 'styled-components';

const Input = styled.div`
    margin-left: 16px;
    margin-right: 16px;

    p {
        font-size: ${props => props.theme.textSizeL};
        font-weight: ${props => props.theme.textWeightBold};
        color: ${props => props.theme.textLightGray};
    }

    div {
        color: ${props => props.theme.textRed};
    }

    input {
        width: 364px;
        height: 52px;
        margin-top: 10px;
        margin-bottom: 8px;
        padding-left: 24px;
        border: 1px solid #EBEBEB;
        border-radius: ${props => props.theme.borderRadius};
        font-size: ${props => props.theme.textSizeL};
        font-weight: ${props => props.theme.textWeightBold};
        ::placeholder {
        color: ${props => props.theme.textLightGray};
        }
    }
`


export class CreateRestaurantInputField extends Component {
    render() {
        return (
            <Input>
                <p>{this.props.fieldname}</p>
                <PrimaryButtonMedium text={this.props.text}/>
            </Input>
        )
    }
}

export default CreateRestaurantInputField
