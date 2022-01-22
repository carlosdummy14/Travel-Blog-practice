import React from 'react';

export default function Card(props) {
  return (
    <>
    <article className="card">
      <img src={props.imageUrl} alt="japo" className="card--img" />
     <div className="card--resume">
      <div className="card--header">
        <img src="./images/pinIcon.png" alt="pin" className="card--pin" />
        <span className="card--location">{props.location}</span>
        <a href={props.googleMapsUrl} className="card--google">View on Google Maps</a>
      </div> 
      <h1 className="card--title">{props.title}</h1>
      <p className="card--date">{props.startDate} - {props.endDate}</p>
      <p className="card--description">{props.description}</p>
       </div> 
    </article>
    <hr className="line" />
    </>
  )
}
