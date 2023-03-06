import styled from 'styled-components'


export const Body = styled.body `
display: flex;
justify-content: center;
height: 100vh;
`

export const Container = styled.div `
    width: 414px;
    height: 896px;
    background: #0A0A10;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 99.8%;
    
`

export const Image = styled.img `
    margin: 11px 36px 25px;
`


export const ContainerItens = styled.div`
    display: flex;
    
    flex-direction: column;


`


export const H1 = styled.h1 `
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;

    margin-bottom: 20px;

    color: #FFFFFF;
`


export const InputLabel = styled.p`

    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;

    margin-left: 15px;

    text-transform: capitalize; 


    .orderInput{
    font-weight: 700;
    }

    
`



export const Input = styled.input `
    width: 342px;
    height: 58px;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 21px;
    color: #FFFFFF;

    padding-left: 15px;
    margin-bottom: 42px;
    text-transform: capitalize;
    

`


export const Button = styled.button `
    width: 342px;
    height: 68px;

    background: #D93856;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
`
