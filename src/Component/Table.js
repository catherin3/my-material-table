import React from 'react'
import MaterialTable from 'material-table'

export const Table =()=> {
    const data= [
        {name: 'Josh', age: 12},
        {name: 'Tom', age: 21},
        {name: 'Andy', age: 37},
        {name: 'Amanda', age: 20}
    ]

    const columns = [
        {
            title: 'Name:', field: 'name'
        },
        {
            title: 'Age:', field: 'age'
        },
    ]
    return (
        <div>
            <MaterialTable title="Material Table"
                data= {data}
                columns ={columns}
        
            />
        </div>
    )
}

export default Table
