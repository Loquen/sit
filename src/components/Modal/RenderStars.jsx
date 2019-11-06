import React from 'react';

// import goldstar from '../../../public/goldstar.png';
// import greystar from '../../../public/greystar.png';

const RenderStars = ({ rating, rateSession }) => {
    let stars = [];

    for(let i = 0; i < 5; i++){
      if(i < rating) {
        stars.push(1);
      } else {
        stars.push(0);
      }
    }

    return (
        <React.Fragment>
          <div className="Large-Stars">
          { stars.map((star, idx) =>( 
            star ?
              <img id={idx+1} key={idx} src={'/goldstar.png'} alt="Star" onClick={rateSession}/> 
              : 
              <img id={idx+1} key={idx} src={'/greystar.png'} alt="Star" onClick={rateSession}/> 
          )) }
          </div>
        </React.Fragment>
    )
}

export default RenderStars;
