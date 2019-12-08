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
   loadData
}
