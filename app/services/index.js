import env from '../environment';

const login = async (user) => {

   console.log(user);

   const response = await fetch(env.url + '/users/login', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         studentId: user.studentId,
         password: user.password
      })
   });

   return await response.json();

}


module.exports = {
   login
}
