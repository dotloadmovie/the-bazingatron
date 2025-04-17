import styled from "@emotion/styled"
import {colors} from '../../theme/colors';
import { borderRadius } from "../../theme/border";

const HeaderWrapper = styled.div`
    border-radius: ${borderRadius.med} ${borderRadius.med} 0 0;
    width: 100%;
    background: ${colors.white};
    padding: 20px;
    box-sizing: border-box;

    img {
        width: 50%;
        transform: rotate(-4deg)
        
    }
`



export {HeaderWrapper}