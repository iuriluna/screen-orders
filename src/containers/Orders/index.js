import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


import fastFood from '../../assets/fast-food.png'
import Trash from '../../assets/trash.png'


import axios from 'axios'

import { Body, Container, Image, ContainerItens, H1, Button, Order } from './styles'

const Orders = () => {

    const [orders, setOrders] = useState([])

    const history = useHistory()

    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrders } = await axios.get('https://rotas-projeto-react-screen-orders.vercel.app/orders')

            setOrders(newOrders)
        }

        fetchOrders()

    }, [])

    async function deleteOrder (orderId) {
        await axios.delete(`https://rotas-projeto-react-screen-orders.vercel.app/orders/${orderId}`)

        const newOrders = orders.filter(order => order.id !== orderId)

        setOrders(newOrders)
    }

    function goBackPage(){
        history.goBack()
    }


    
    
    return (
        <Body>
            <Container>
                <Image alt='logo-image' src={fastFood} />

                <ContainerItens>
                    <H1>Pedidos</H1>

                    <ul>
                        {orders.map((order) => (
                        <Order key={order.id}>
                        <p>{order.order}</p> <p className='orderInput'>{order.name}</p> 
                        <button onClick={() => deleteOrder(order.id)}><img src={Trash} alt='lata-de-lixo'/> 
                        </button>
                        </Order>
                        ))}
                    </ul>

                    <Button onClick={goBackPage}>Voltar</Button>
                    
                </ContainerItens>

            </Container>
        </Body>
    )
}

export default Orders