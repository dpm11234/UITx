import axios from 'axios';
import env from '../environment';

const getDeadline = async (studentId) => {
   const response = axios({
      method: 'GET',
      url: `${env.url}/deadline/${studentId}`
   });

   return response;

}

module.exports = {
   getDeadline
}
