import React from 'react'
import MaterialTable from 'material-table'

export const Table =()=> {
    const data= [
        {name: 'Josh', age: 12},
        {name: 'Tom', age: 21},
        {name: 'Andy', age: 37},
        {name: 'Amanda', age: 20},
        {name: 'Andie', age: 40},
        {name: 'Amos', age: 32},
        {name: 'Arial', age: 50},
        {name: 'Ameila', age: 10},
    ]

    const columns = [
        {
            title: 'Name', field: 'name'
        },
        {
            title: 'Age', field: 'age'
        },
    ]
    return (
        <div>
            <MaterialTable title="Material Table"
                data= {data}
                columns ={columns}
                options={{
                    exportButton: true  
                }}
        
            />
        </div>
    )
}

export default Table
