import { isAbsolute } from "path";
import styled from "styled-components";

export const RevStars = styled.div`
    ${props => props.abs ? 
        `position: absolute;
         bottom: 10px;
         right: 10px;
        `
    : 
        ``
    }
`