import React from 'react'

function Person({person}) {
  return (
    <tbody>{
        <tr>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.skill}</td>
        </tr>
    }</tbody>
  )
}

export default Person