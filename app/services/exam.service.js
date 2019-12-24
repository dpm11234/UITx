import axios from 'axios';
import env from '../environment';

const getExamSchedule = async (studentId) => {
   const response = axios({
      method: 'GET',
      url: `${env.url}/exam/${studentId}`
   });

   return response;
}

module.exports = {
   getExamSchedule
}
