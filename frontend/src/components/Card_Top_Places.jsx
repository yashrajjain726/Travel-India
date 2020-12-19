import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

function Card_Top_Places(props) {
    // let link = props.place.cardTitle.replace(/[^a-zA-Z ]/g, "");
    // console.log(link);

    return (
        <div className="col-12 col-sm-6 col-md-4 mx-auto mt-3">
            <div className="card" id='top-places'>
                <a href={`/top-places/${props.place.cardTitle}`}>
                    <div className="card-img-top">
                        <img src={props.place.src} alt="" className='img-fluid' />
                    </div>
                    <div className="card-footer">
                        <h1>{props.place.cardTitle}</h1>
                        <div className="row">
                            <div className="col-8">
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    // value={rating}
                                    editing={false}
                                />
                            </div>
                            <div className="col">
                                {/* <FontAwesomeIcon icon={faUser} className='mt-3 mr-1' /><span>{user}</span> */}
                            </div>
                        </div>
                        {props.place.cardText}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card_Top_Places
