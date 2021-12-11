import styled from "styled-components";

export const ImageContainer= styled.div`
    width: 300px;
    position: relative;
`
export const Review = styled.div`
    color: ${props => props.green || 'red'};
`
export const Head = styled.div`
    font-size: 2rem;
    font-weight: bold;
`
export const CarType = styled.div`
    font-size: 2rem;
    font-weight: bold;
`
export const RevPageCont = styled.div`
    width: 100vw;
`