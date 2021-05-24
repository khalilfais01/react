import React from 'react';
import './Card.css'
import './link.svg';

function Card(props){
      return(
            <div className="card">
                 <h1><b>{props.p.name}</b></h1> 
                 URL: <a href={props.p.URL}>Click Here</a><br></br>
                 <code><b>{props.p.number}</b></code><br></br>
                 <code><b>{props.p.email}</b></code><br></br>
                 <img src={props.p.src} alt={props.p.name} /><br></br>
            </div>
      )
}
export default Card;