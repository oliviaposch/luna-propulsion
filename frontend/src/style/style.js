import { createGlobalStyle } from 'styled-components';

// @olivia:
// copied defaultTheme and GlobalStyle from out motion project to make the imports work
// feel free to change any property around

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        color: black;
        outline: none;
        padding: 0;
        font-size: 16px;
        font-family: Helvetica, sans-serif;
        box-sizing: border-box;
        font-weight: normal;
        /* background-image: url('../assets/images/background_image.png'); */
    }
`

export const defaultTheme = {

    // Colors:
    bodyBackgroundColor: '#F8F8F8',
    accentColor: '#E47D31',
    textGray: '#4C4C4C',
    textLightGray: '#979797',
    textRed: '#B00000',
    white: '#FFFFFF',
    black50: 'rgba(0,0,0,0.5)',


    // BorderRadius
    borderRadius: '4px',
    buttonBorderRadius: '28px',

    // Box Shadows:
    boxShadowDark: `-5px 6px 15px 1px rgba(0,0,0,0.50)`,
    boxShadowLight: `-5px 6px 15px 1px rgba(0,0,0,0.25)`,
    boxShadowLighter: `-5px 6px 15px 1px rgba(0,0,0,0.15)`,
    boxShadowNav: `2px 0 24px 0 rgba(0,0,0,0.04)`,
    boxShadowTiles: `0 2px 24px 0 rgba(0,0,0,0.04)`,
    boxShadowInTiles: `0 1px 3px 0 rgba(0,0,0,0.2)`,

    // Sizes
    controlHeight: '40px',
    controlHeightMini: '24px',
    controlHeightSmall: '32px',
    controlHeightLarge: '48px',
    spaceXXS: '4px',
    spaceXS: '8px',
    spaceS: '16px',
    spaceM: '24px',
    spaceL: '32px',
    spaceXL: '48px',
    spaceXXL: '220px',

    // Text Size
    textSizeXXL: '32px',
    textSizeXL: '24px',
    textSizeL: '20px',
    textSizeDefault: "16px",
    textSizeS: '12px',

    // Text Weight
    textWeightThin: '300',
    textWeightRegular: '400',
    textWeightMedium: '500',
    textWeightBold: '600'

}