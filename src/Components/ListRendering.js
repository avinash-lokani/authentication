import React from 'react'
import Person from './Person'



export default function ListRendering() {
    const persons = [
        {
            id: 1,
            name : "blake",
            age : 30,
            skill : "React"
        },
        {
            id : 2,
            name : "rhyder",
            age : 30,
            skill : "React"
        },
        {
            id : 3,
            name : "lee",
            age : 30,
            skill : "React"
        },
        {
            id : 4,
            name : "mace",
            age : 30,
            skill : "React"
        },
        {
            id : 5,
            name : "mecenzie",
            age : 30,
            skill : "React"
        }
    ]

    const nameList = persons.map(person => <Person  key = {person.id} person = {person}></Person>)
    

    return (
        <div>
            {
                <table className = "table_style">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>skill</th>
                        </tr>
                    </thead>
                    {nameList}
                </table>
               
            }
        </div>
      )
}



    

    
