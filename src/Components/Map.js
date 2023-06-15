import React from 'react'

export default function Map(prop) {
    let {data}=prop;
    console.log(data);
  return (
    <div>
        {
            data.map((value)=>{
                return(
                    <div key={value.id}>
                        <h1>{value.ismi} </h1>
                        <h2> {value.familya} </h2>
                    </div>
                )
            })
        }
    </div>
  )
}
