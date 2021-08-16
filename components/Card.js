import React from 'react';

export default function Card(props) {
  return (
    <div className="card-wrapper">
      <h3 className="date">{props.date}</h3>
      <div className="card">
        <div className="card-img-wrapper">
          <img
            src={`/${props.img}`}
            alt="card-logo"
            style={{
              height: props.height ? props.height : '',
              width: props.width ? props.width : '',
            }}
            id={props.id ? props.id : null}
          />
        </div>
        <div className="card-text-wrapper">
          <h3 className="card-title">{props.cardTitle}</h3>
          <h4 className="card-subtitle">{props.cardSubtitle}</h4>
        </div>
      </div>
    </div>
  );
}
