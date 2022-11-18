import React from 'react'
import { User } from './User';

export const UserTable = (props) => {
  const filter = props.filter;
  console.log("filtro: " + filter);

  {
    //All filter
    if (filter === "") {
      return (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>

            </tr>
            {props.data.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>

            ))}

          </tbody>
        </table>
      )
    }
    else if (filter === "name") {
      return (
        <table>
          <tbody>
            {

            }
            <tr>
              <th>Name</th>
            </tr>
            {props.data.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>

              </tr>

            ))}

          </tbody>
        </table>
      )
    }
    else if (filter === "username") {
      return (
        <table>
          <tbody>
            {

            }
            <tr>
              <th>Username</th>
            </tr>
            {props.data.map(item => (
              <tr key={item.id}>
                <td>{item.username}</td>

              </tr>
            ))}

          </tbody>
        </table>
      )
    }
    else if (filter === "email") {
      return (
        <table>
          <tbody>
            {

            }
            <tr>
              <th>Email</th>
            </tr>
            {props.data.map(item => (
              <tr key={item.id}>
                <td>{item.email}</td>

              </tr>

            ))}

          </tbody>
        </table>
      )
    }
    else {
      return (
        <table>
          <tbody>
            {

            }
            <tr>
              <th>Phone</th>

            </tr>
            {props.data.map(item => (
              <tr key={item.id}>
                <td>{item.phone}</td>

              </tr>

            ))}

          </tbody>
        </table>
      )
    }
  }

}
