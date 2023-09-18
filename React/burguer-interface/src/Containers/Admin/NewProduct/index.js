

import React, {useEffect, useState} from 'react'
import api from '../../../Services/api'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useForm,  } from "react-hook-form"

import {
  Container, Label, Input, ButtonStyles, LabelUpload 
 
} from './style'
import ReactSelect from 'react-select'


 function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      

    
      
    }    
   
    
    loadOrders()
  }, [])

 
  
  return (
    <Container>
      <form noValidate>
     <Label>Nome</Label>
     <Input type='text' {...register("name")}/>

     <Label>
     <Input type='number' {...register("price")}/>
     </Label>
     <LabelUpload>
      {fileName ||
      <>
      <CloudUploadIcon/>
      Carregar Imagem do Produto
      </>}
     
     <input 
     type='file' 
     accept='image/png, image/jpeg'
     {...register("file")}
     onChange={value => {
      setFileName(value.target.files[0]?.name)
    }}
     />
     </LabelUpload>

     <ReactSelect/>

     <ButtonStyles> Adicionar Produtos</ButtonStyles>
     </form>
    </Container>
  )
}
export default NewProduct