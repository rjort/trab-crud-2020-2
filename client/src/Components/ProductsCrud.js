import React from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'

export default function UserTable() {
  const  baseURL = 'http://localhost:3000/api/v1/products'
  const [columns] = React.useState([
      { title: 'Name', field: 'name' },
      { title: 'Description', field: 'description' },
      { title: 'category', field: 'category' },
      { title: 'Price', field: 'price' },
      { title: 'Image', field: 'imageUrl' },
      { title: 'Amount', field: 'amount' },
      { title: 'Barcode', field: 'barCode' },
      { title: 'Created', field: 'created_at' }
  ])

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
        const response = await axios.get(baseURL)
        setData(response.data)
    }
    fetchData()
  }, [])

  const createProduct = (newProduct) => {
    async function fetchProduct() {
        console.log(newProduct)
        const response = await axios.post(baseURL, newProduct)
        if(response.status === 200) return response.data
    }
    fetchProduct()
  }

  return(
    <MaterialTable
     title="Products List"
     columns={columns}
     data={data}
     editable={{
       onRowAdd: (newData) => new Promise((resolve) => {
        newData = createProduct(newData)
        setTimeout(() => {
            resolve()
            setData((prevState) => {
                const data = [...prevState]
                if (newData !== null && newData !== undefined) data.push(newData)
                return data
            })
        }, 600)
       }),
       onRowUpdate: (newData, oldData) => new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          if(oldData) {
            setData((prevState) => {
              const data = [...prevState]
              data[data.indexOf(oldData)] = newData
              return data
            })
          }
        }, 600)
       }),
       onRowDelete: (oldData) => new Promise((resolve) => {
         setTimeout(() => {
           resolve()
           setData((prevState) => {
             const data = [...prevState]
             data.splice(data.indexOf(oldData), 1)
             return data
           })
         }, 600)
       })
     }}
     ></MaterialTable>
  )
}