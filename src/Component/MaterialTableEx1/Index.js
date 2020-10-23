import React from 'react'
import MTable from '../MaterialTableEx1/Table'


const comonscol = [
    { title: "Name", field: "name" },
    { title: "URL", field: "url" }
  ];

  
function App() {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(res => res.json())
          .then(res => setData(res.results))
          .catch(err => console.log(err.message))
      }, [])
    

    return (
        <div>
             <MTable 
             col={comonscol} 
             data={data} 
             />
        </div>
    )
}

export default App
