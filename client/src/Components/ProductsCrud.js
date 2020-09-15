import React from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'

export default function UserTable() {
  const  baseURL = 'http://localhost:3000/api/v1/products'
  const columns = [
    { title: 'Name', field: 'name', 
    validate: rowData => rowData.name !== '' && rowData.name !== null && rowData.name !== undefined 
    },
    { title: 'Description', field: 'description', 
    validate: rowData => rowData.description !== '' && rowData.description !== null && rowData.description !== undefined 
    },
    { title: 'Category', field: 'category', lookup: { 'Tecnologia': 'Tecnologia', 'Roupas': 'Roupas' }, 
    validate: rowData => rowData.category !== '' && rowData.category !== null && rowData.category !== undefined  
    },
    { title: 'Price', field: 'price', type: 'numeric', validate: rowData => rowData.price > 0 },
    { title: 'Provider', field: 'provider',
    validate: rowData => rowData.provider !== '' && rowData.provider !== null && rowData.provider !== undefined 
    },
    { title: 'Amount', field: 'amount', type: 'numeric', validate: rowData => rowData.amount > 0 },
    { title: 'Barcode', field: 'barCode', type: 'numeric', validate: rowData => rowData.barCode > 0 },
    { title: 'Created', field: 'created_at', editable: 'never' }
  ]

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
        const response = await axios.get(baseURL)
        setData(response.data)
    }
    fetchData()
  }, [])

  function createProduct(newProduct) {
    async function postProduct() {
        const response = await axios.post(baseURL, newProduct)
        if(response.status === 200) return response.data
    }
    return postProduct()
  }

  function updateProduct(id, newProduct) {
    async function postProduct() {
        const response = await axios.put(baseURL + '/' + id, newProduct)
        if(response.status === 200) return response.data
    }
    return postProduct()
  }

  function deleteProduct(id) {
    async function deleteProduct() {
        const response = await axios.delete(baseURL + '/' + id)
        if (response.status === 200) return response.status
    }
    return deleteProduct()
  }

  return(
    <MaterialTable
     title="Products List"
     columns={columns}
     data={data}
     editable={
        {
            onRowAdd: (newData) => createProduct(newData)
            .then((product) => {
                setData((prevState) => {
                    const data = [...prevState]
                    if (product !== null && product !== undefined) data.push(product)
                    return data
                })
            }),
            onRowUpdate: (newData, oldData) => updateProduct(oldData._id, newData)
            .then((product) => {
                if(oldData) {
                    setData((prevState) => {
                        const data = [...prevState]
                        if (product !== null && product !== undefined) data[data.indexOf(oldData)] = product
                        return data
                    })
                }
            }),
            onRowDelete: (oldData) => deleteProduct(oldData._id)
            .then((status) => {
                let deleted = false
                if(status === 200) deleted = true

                setData((prevState) => {
                    const data = [...prevState]
                    if(deleted) data.splice(data.indexOf(oldData), 1)
                    return data
                })
            })
        }
    }
    ></MaterialTable>
  )
}