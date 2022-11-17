import React from 'react'

export const UserTable = ({data}) => {
  return (

    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
             
            </tr>
            {data.map(item => (
                 <tr key={item.id}>
                 <td>{item.name}</td>
                 <td>{item.username}</td>
                 <td>{item.email}</td>
                 <td>{item.phone}</td>
               
                 <td><button>Datos</button></td>
             </tr>

            ))}
           
        </tbody>
    </table>
  )
}
