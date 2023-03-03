import React, {useState, useRef} from 'react'
import { useHistory } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import axios from 'axios'

import { Body, Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './styles'

const Home = () => {

    const [orders, setOrders] = useState([])
    const history = useHistory()
    const inputOrder = useRef()
    const inputName = useRef()


    async function addNewOrder () {
        const {data: newOrder} = await axios.post('https://rotas-projeto-react-screen-orders.vercel.app/orders',{
        order: inputOrder.current.value,
        name: inputName.current.value
        })

       setOrders([...orders, newOrder])
       

       history.push('/orders')
    }
    
    return (
        <Body>
            <Container>
                <Image alt='logo-image' src={Logo} />

                <ContainerItens>
                    <H1>Faça seu pedido!</H1>


                    <InputLabel >Pedido</InputLabel>
                    <Input ref={inputOrder} placeholder='1 Coca-Cola, 1-X Salada'  />


                    <InputLabel>Nome</InputLabel>
                    <Input ref={inputName} placeholder='Nome'  />

                    <Button onClick={addNewOrder}>Fazer Pedido</Button>
                    
                </ContainerItens>

            </Container>
        </Body>
    )
}

export default Home