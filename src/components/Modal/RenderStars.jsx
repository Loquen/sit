import React from 'react';

// import goldstar from '../../../public/goldstar.png';
// import greystar from '../../../public/greystar.png';

const RenderStars = ({ rating, rateSession }) => {
    let stars = new Array(rating).fill(1);
    let greys = (parseInt(rating) !== 5) ? new Array(5-rating).fill(1) : null;
    console.log(stars);
    console.log(greys);

    
    
    return (
        <React.Fragment>
          <div className="Large-Stars">
          { stars.map((star, idx) =>( <img id={idx+1} key={idx} src={'/goldstar.png'} alt="Star" onClick={rateSession}/> )) }
          { greys ? greys.map((star, idx) =>( <img id={idx+1} key={idx} src={'/greystar.png'} alt="Star" onClick={rateSession}/> )) : (null)}
          </div>
        </React.Fragment>
    )
}

export default RenderStars;
