import axios from 'axios';
import env from '../environment';

const getAllParticipants = async (user) => {
   const response = await axios({
      method: 'POST',
      url: `${env.url}/users/get-paticipant`,
      data: {
         studentId: user.studentId,
         password: user.password
      }
   });

   return response;
}

const getParticipants = async (subjectId) => {
   const response = await axios({
      method: 'GET',
      url: `${env.url}/class/${subjectId}`
   });

   return response;
}

module.exports = {
   getParticipants,
   getAllParticipants
}
