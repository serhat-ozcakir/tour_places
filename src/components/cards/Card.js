import React from 'react'
import './Card.css'
import {data} from '../../helper/data'


export default function card() {
    return (
        <div className="card-group">
            {data.map((dataList) =>{
                const {id,title,desc,image} = dataList;
                return (
                    <div className="cards">
                        <h3>{title}</h3>
                        <div className="image">
                            <img src={image}/>
                            <p>{desc}</p>
                        </div>
                    </div>
                )
            } )}
        
           

            
        </div>

        
    )
}
