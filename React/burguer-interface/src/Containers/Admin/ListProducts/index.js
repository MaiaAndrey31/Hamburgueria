import React, { useEffect, useState } from 'react'
import api from '../../../Services/api'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  Container,
  Img
} from './style'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

 function ListProducts() {
  const classes = useStyles();
const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      

      setProducts(data)
      
    }    
   
    
    loadOrders()
  }, [])

  function isOffer(offerStatus){
    if(offerStatus){
      return <CheckBoxIcon/>
    }
    return <CancelIcon/>
  }
  
  return (
    <Container>
     <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell >Preço</TableCell>
            <TableCell >Oferta</TableCell>
            <TableCell ></TableCell>
            <TableCell >Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell >{product.price}</TableCell>
              <TableCell >{isOffer(product.offer)}</TableCell>
              <TableCell ><Img src={product.url} alt="imagem do produto"/></TableCell>
              <TableCell ><button>Editar</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}
export default ListProducts