import React from 'react';
import Card from './Card'
import data from '../../data.json';
function CardURL() {
      return (
        <div>
          <div className="card">
            <Card p = {{name:data.facebook.name,URL:data.facebook.url, src:data.facebook.img,number:data.facebook.number,email:data.facebook.email}}/><br></br>
            <Card p = {{name:data.youtube.name,URL:data.youtube.url,src:data.youtube.img,number:data.youtube.number,email:data.youtube.email}}/><br></br>
            <Card p = {{name:data.google.name,URL:data.google.url,src:data.google.img,number:data.google.number,email:data.google.email}}/><br></br>
          </div>
        </div>
      );
    }
export default CardURL;