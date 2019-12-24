import env from '../environment';
import axios from 'axios';

const getSchemeTraining = async () => {
   const response = await axios({
      method: 'GET',
      url: `${env.url}/curriculum/K12/HTTT`
   });

   return response;
}

module.exports = {
   getSchemeTraining
}
