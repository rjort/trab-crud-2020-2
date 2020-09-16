import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

import Axios from 'axios'

export default function UserTable() {
  const baseURL = `http://localhost:5000/api/v1/users`
  const col = [
    { title: 'Name', field: 'name', 
    validate: rowData => rowData.name !== '' && rowDate.name !== null && rowDate.name !== undefined
    },
    { title: 'Email', field: 'email',
    validate: rowData => rowData.name !== '' && rowDate.email !== null && rowDate.email !== undefined
    },
    { title: 'Phone', field: 'phone',
    validate: rowData => rowData.phone !== '' && rowDate.phone !== null && rowDate.phone !== undefined
    },
    { title: 'Street', field: 'street',
    validate: rowData => rowData.street !== '' && rowDate.street !== null && rowDate.street !== undefined
    },
    { title: 'City', field: 'city',
    validate: rowData => rowData.city !== '' && rowDate.city !== null && rowDate.city !== undefined
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

  const createUser = (newUser) => {
    async function fetchUser() {
      console.log(newUser)
      const res = await Axios.post(baseURL, newUser)
      if(res.status === 200) return res.data
    }
    fetchUser()
  }

  const deleteUser = (user) => {
    async function fetchUser() {
      console.log(user._id)
      const res = await Axios.delete(`${baseURL}/${user._id}`, user)
      if(res.status === 200) return res.data
    }
    fetchUser()
  }

  const updateUser = (oldUser, newUser) => {
    async function fetchUser() {
      console.log(oldUser)
      const res = await Axios.put(`${baseURL}/${oldUser._id}`, newUser)
      console.log(res.data)
      if(res.status === 200) return res.data
    }
    fetchUser()
  }

  return(
    <MaterialTable
     title="Users List"
     columns={col}
     data={data}
     editable={{
      onRowAdd: (newData) => new Promise((resolve) => {
          newData = createUser(newData)
          setTimeout(() => {
            resolve()
            setData((prevState) => {
              const data = [...prevState]
              if(newData !== null && newData !== undefined) return data.push(newData)
              return data
            })
          }, 600)
      }),
      onRowUpdate: (newData, oldData) => new Promise((resolve) => {
        updateUser(oldData, newData)
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
        deleteUser(oldData)
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