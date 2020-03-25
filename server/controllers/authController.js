const bcrypt = require('bcryptjs');



async function login(req, res){
    const {email, password} = req.body;
      const db = req.app.get('db');

      const foundUser = await db.auth.checkForUserName(email);

      if (!foundUser[0]) {
         res.status(403).json("Username or Password incorrect")
      } 
      else {

         const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)

         if (!isAuthenticated) {
            res.status(403).json("Username or Password incorrect")
         } else {

            
            
            req.session.user = {
               user_id: foundUser[0].user_id,
               email: foundUser[0].email,
               name: foundUser[0].name,
               is_admin: foundUser[0].isadmin
            };

            


            res.status(200).json(req.session.user);
         }
      }
}

async function editUser(req, res){
   const {email, name} = req.body;
   const db = req.app.get('db');
   const user = await db.auth.editUser(name, email);
   req.session.user = {
      email: user[0].email,
      name: user[0].name
   }
   res.status(200).json(req.session.user);
}

async function logout(req, res){
    req.session.destroy();
    res.sendStatus(200);
}

async function register(req, res){
    const {email, password, name} = req.body;
      const db = req.app.get('db');

      const foundUser = await db.auth.checkForUserName(email);

      if (foundUser[0]) {
         res.status(409).json("Username Taken")
      } 
      else if (email === '' || password === '' || name === ''){
         res.status(406).json("Please fill in all fields")
      }
      else {

         const salt = bcrypt.genSaltSync(10);
         const hash = bcrypt.hashSync(password, salt)

         const newUser = await db.auth.registerUser(name, email, hash);
         
         
         req.session.user = {
            user_id: newUser[0].user_id,
            email: newUser[0].email,
            name: newUser[0].name,
            is_admin: newUser[0].isadmin
         };
         
         

         res.status(200).json(req.session.user);
      }
}

async function deleteUser(req, res){
    const {user_id} = req.session.user;
    
    const db = req.app.get('db');
    await db.auth.deleteUser(user_id);
    req.session.destroy();
    res.sendStatus(200);
}

module.exports = {
    login,
    logout,
    register,
    deleteUser,
    editUser
}