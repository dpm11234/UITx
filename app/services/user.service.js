import env from '../environment';
import axios from 'axios';

const login = async (user) => {

   const response = await axios({
      method: 'POST',
      url: `${env.url}/users/login`,
      data: {
         studentId: user.studentId,
         password: user.password
      }
   });
   
   return response.data;

}

const getUser = async (studentId) => {
   
   const response = await axios({
      method: 'GET',
      url: `${env.url}/users/${studentId}`,
   });

   return response;

}

const loadData = async (user) => {

   const response = await axios({
      method: 'POST',
      url: `${env.url}/users/login-daa`,
      data: {
         studentId: user.studentId,
         password: user.password
      }
   });
   
   return response.data;

}

module.exports = {
   login,
   loadData,
   getUser
}
