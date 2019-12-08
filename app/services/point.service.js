import axios from 'axios';
import env from '../environment';

const getPoint = async (studentId) => {
   const response = axios({
      method: 'GET',
      url: `${env.url}/point/${studentId}`
   });

   return response;
}

module.exports = {
   getPoint
}
