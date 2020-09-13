import React from 'react'
import MaterialTable from 'material-table'

export default function UserTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Phone', field: 'phone' }
    ],
    //aqui ira rueceber as informacoes da API
    data: []
  })

  // Tudo feito aqui foi com o exemplo do site do Material UI
  // adaptar para implementar a api
  return(
    <MaterialTable
     title="Users List"
     columns={state.columns}
     data={state.data}
     editable={{
       onRowAdd: (newData) => new Promise((resolve) => {
         setTimeout(() => {
           resolve()
           setState((prevState) => {
             const data = [...prevState.data]
             data.push(newData)
             return { ...prevState, data }
           })
         }, 600)
       }),
       onRowUpdate: (newData, oldData) => new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          if(oldData) {
            setState((prevState) => {
              const data = [...prevState.data]
              data[data.indexOf(oldData)] = newData
              return { ...prevState, data }
            })
          }
        }, 600)
       }),
       onRowDelete: (oldData) => new Promise((resolve) => {
         setTimeout(() => {
           resolve()
           setState((prevState) => {
             const data = [...prevState.data]
             data.splice(data.indexOf(oldData), 1)
             return { ...prevState, data }
           })
         })
       })
     }}
     ></MaterialTable>
  )
}