import React, { useEffect, useState } from "react"
import { Container } from './style'
import api from '../../../Services/api'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';




 function Orders(){
 const [orders, setOrders] = useState([])


    useEffect(() => {
        async function loadOrders() {
          const { data } = await api.get('orders')
    
          
    
          setCategories(data)
        }    
       
        
        loadOrders()
      }, [])


      function createData(order) {
        return {
          name: order.user.name,
          orderId: order._id,
          date: order.createdAt,
          status: order.status,
          products: order.products 
         
        };
      }

      return (

    <Container>
        <h1>Pedidos</h1>
    </Container>


 )
    
}

export default Orders