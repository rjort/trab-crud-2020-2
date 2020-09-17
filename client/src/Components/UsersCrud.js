import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

import Axios from 'axios'

export default function UserTable() {
  const baseURL = 'http://localhost:3000/api/v1/users'
  const col = [
    { title: 'First name', field: 'first_name', 
    validate: rowData => rowData.first_name !== '' && rowData.first_name !== null && rowData.first_name !== undefined
    },
    { title: 'Last name', field: 'last_name', 
    validate: rowData => rowData.last_name !== '' && rowData.last_name !== null && rowData.last_name !== undefined
    },
    { title: 'Email', field: 'email',
    validate: rowData => rowData.email !== '' && rowData.email !== null && rowData.email !== undefined
    },
    { title: 'Phone', field: 'phone',
    validate: rowData => rowData.phone !== '' && rowData.phone !== null && rowData.phone !== undefined
    },
    { title: 'Street', field: 'street',
    validate: rowData => rowData.street !== '' && rowData.street !== null && rowData.street !== undefined
    },
    { title: 'City', field: 'city',
    validate: rowData => rowData.city !== '' && rowData.city !== null && rowData.city !== undefined
    },
    { title: 'State', field: 'state',
    validate: rowData => rowData.state !== '' && rowData.state !== null && rowData.state !== undefined
    },
    { title: 'Payment', field: 'payment', lookup: { true: 'Yes', false: 'Not' }, 
    validate: rowData => rowData.payment !== '' && rowData.payment !== null && rowData.payment !== undefined  
    },
    { title: 'Created', field: 'created_at', editable: 'never' }
  ]

  const [data, setData] = useState([])

  useEffect( () => {
    async function fetchData() {
      const res = await Axios.get(baseURL)
      setData(res.data)
    }
    fetchData()
  }, [])

  function createUser(newUser) {
    async function fetchUser() {
      const res = await Axios.post(baseURL, newUser)
      if(res.status === 200) return res.data
    }
    return fetchUser()
  }

  function deleteUser(user) {
    async function fetchUser() {
      const res = await Axios.delete(`${baseURL}/${user._id}`, user)
      if(res.status === 200) return res.status
    }
    return fetchUser()
  }

  function updateUser(oldUser, newUser) {
    async function fetchUser() {
      const res = await Axios.put(`${baseURL}/${oldUser._id}`, newUser)
      if(res.status === 200) return res.data
    }
    return fetchUser()
  }

  return(
    <MaterialTable
     title="Users List"
     columns={col}
     data={data}
     editable={{
      onRowAdd: (newData) => createUser(newData)
      .then((user) => {
          setData((prevState) => {
              const data = [...prevState]
              if (user !== null && user !== undefined) data.push(user)
              return data
          })
      }),
      onRowUpdate: (newData, oldData) => updateUser(oldData, newData)
      .then((user) => {
          if(oldData) {
              setData((prevState) => {
                  const data = [...prevState]
                  if (user !== null && user !== undefined) data[data.indexOf(oldData)] = user
                  return data
              })
          }
      }),
      onRowDelete: (oldData) => deleteUser(oldData)
      .then((status) => {
          let deleted = false
          if(status === 200) deleted = true

          setData((prevState) => {
              const data = [...prevState]
              if(deleted) data.splice(data.indexOf(oldData), 1)
              return data
          })
      })
     }}
     ></MaterialTable>
  )
}