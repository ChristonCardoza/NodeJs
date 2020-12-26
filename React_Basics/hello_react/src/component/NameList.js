import React from 'react'
import Person from './Person'

function NameList()  {

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        },
        {
            id: 3,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        }
    ]

    // const personList = persons.map(person => < Person key={person.id} person={person} />)
    // return <div> {personList}</div>

    const names = ['Bruce' , 'Clark' , 'Diana'] 
    const nameList =  names.map((name,index) => <h2 key = {index}> {name} </h2>)
    return <div>{nameList}</div>
    
    // return (
    //     <div>
    //         {
    //             names.map(name => <h2> {name} </h2>)
    //         }
    //     </div>
    // )
   
}

export default NameList
