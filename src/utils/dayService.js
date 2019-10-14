import tokenService from './tokenService';

const BASE_URL = '/api/days/';

function todayExists(userId, elapsedTime){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
    ,
    body: JSON.stringify({
      userId,
      elapsedTime
    })

  };
  return fetch(BASE_URL, options).then(res => {
    return res.json()
  });
}

function getAllDays(userId) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
    ,
    body: JSON.stringify({
      userId
    }) 

  };
  return fetch(`${BASE_URL}all`, options).then(res => {
    return res.json()
  });
}

export default {
  todayExists,
  getAllDays
};