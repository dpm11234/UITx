import axios from 'axios';
import environment from '../environment';

const getSchedule = async (studentId) => {

   const response = await axios({
      method: 'GET',
      url: `${environment.url}/schedule/${studentId}`
   });

   return response;

}

module.exports = {
   getSchedule
}
