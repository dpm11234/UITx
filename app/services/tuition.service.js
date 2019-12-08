import env from '../environment';
import axios from 'axios';

const getTuition = async (studentId) => {
   const response = axios({
      method: 'GET',
      url: `${env.url}/tuition/${studentId}`
   });

   return response;
}

module.exports = {
   getTuition
}