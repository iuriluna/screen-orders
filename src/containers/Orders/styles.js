import styled from 'styled-components'



export const Body = styled.body `
display: flex;
justify-content: center;
height: 100%;
`

export const Container = styled.div `
    width: 414px;
    background: #0A0A10;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    
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

export const Order = styled.li`
    width: 342px;
    height: 100%;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    font-style: normal;

    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    list-style: none;
    text-transform: capitalize;

    margin-bottom: 16px;
    padding-left: 13px;
    padding-top: 5px;
    

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    .orderInput{
    font-weight: 700;
    margin-top: 10px;
    }

    img{
        cursor: pointer;
    }
    button{
        background: transparent;
        border: none;
        margin-top: 15px;
    }

`


export const Button = styled.button `
    width: 342px;
    height: 68px;

    background: rgba(255, 255, 255, 0.14);

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    margin-top: 85px;


    &:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}

`
