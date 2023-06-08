import styled from "styled-components";

const StyledSquare = styled.div`

    background-color: ${props=>(props.active ? 'blue' : 'green')};
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export {StyledSquare};