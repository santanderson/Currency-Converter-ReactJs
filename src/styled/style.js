import styled from "styled-components";

export const Title = styled.h1`
    color: white;
    font-size: 20px;
    font-family: Arial;

    span{
        color: rgb(161, 161, 161);
        font-size: 20px;
    }
`

export const Box = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    width: 440px;
    height: 90px;

    div{
        display:flex;
        flex-flow: column nowrap;
        justify-content: space-between;
    }
    div input, div select{
        padding: 10px;
        background-color: transparent;
        color: white;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid white;
    }
`