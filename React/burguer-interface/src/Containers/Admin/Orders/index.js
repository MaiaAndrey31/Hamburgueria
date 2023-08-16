import React, { useEffect, useState } from "react"
import { Container, Menu, LinkMenu } from './style'
import api from '../../../Services/api'
import status from "./OrderStatus";

 import Table from '@material-ui/core/Table';
 import TableBody from '@material-ui/core/TableBody';
 import TableCell from '@material-ui/core/TableCell';
 import TableContainer from '@material-ui/core/TableContainer';
 import TableHead from '@material-ui/core/TableHead';
 import TableRow from '@material-ui/core/TableRow';
import Row from "./row";
 import Paper from '@material-ui/core/Paper';
import formatDate from "../../../utils/formatDate";




 function Orders(){
 const [orders, setOrders] = useState([])
 const [rows, setRows] = useState([])

console.log(orders)
    useEffect(() => {
        async function loadOrders() {
          const { data } = await api.get('orders')
    
          
    
          setOrders(data)
        }    
       
        
        loadOrders()
      }, [])


      function createData(order) {
        return {
          name: order.user.name,
          orderId: order._id,
          date: formatDate(order.createdAt),
          status: order.status,
          products: order.products          
        };
      }

      useEffect(() => {
        const newRows = orders.map(ord => createData(ord))

        setRows(newRows)

      }, [orders])
      

      return (

    <Container>

      <Menu>
        {status && status.map(status => <LinkMenu key={status.id}>{status.label}</LinkMenu>)}

      </Menu>

        <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedido</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Data do Pedido</TableCell>
            <TableCell>Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>


 )
    
}

export default Orders