import React from 'react';
import checkInIcon from '../images/check-in.png'


export default function TravelPost(props) {
    return (
        <section className="travel-post">
            <div className='travel-image-section'>
                <img className="travel-image" src={props.entry.imageUrl} />
            </div>
            <div className="travel-text-section">
                <div className="travel-location-section">
                    <img className="check-in-icon" src={checkInIcon} />
                    <h5 className="travel-post-title">{props.entry.location}</h5>
                    <a className="google-maps-link" href={props.entry.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <h3 className="travel-title-section">{props.entry.title}</h3>
                <h5 className="travel-date-section">
                    {props.entry.startDate} - {props.entry.endDate}
                </h5>
                <p className="travel-description">{props.entry.description}</p>
            </div>
        </section>
    )
}