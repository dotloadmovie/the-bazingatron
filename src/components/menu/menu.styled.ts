import styled from "@emotion/styled"
import {colors} from '../../theme/colors';

const MenuStyled = styled.ul`
    list-style: none
`

const MenuItem = styled.li`
    font-family: sans-serif;
    font-size: 18px;
    text-align: right;  
    a {
        text-decoration: underline;
        color: ${colors.primary}
    }
`

export {MenuStyled, MenuItem}