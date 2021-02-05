// establishing handshake with the model
const User = require('../models/user');

// add user
exports.addUser = (userData, callback) => {
  console.log(userData);
  /// constructing query to create user 
  const userDao = new User(userData);
  userDao.save( (err, savedUser ) => {
    if(!err){
      console.log(`User created Successfully with ${savedUser.userId}`);
    }
    callback(err, savedUser); // send the db output 
  });
}

// to list all users
exports.getUsers = (callback) => {

  // exec query 
  User.find( {}, (err, userList) => {
    if(!err){
      console.log(`Users Fetched Successfully`);
    }
    callback(err, userList); // send the db output 
  });
}

// get user by id 
exports.getUserById = (_userId, callback) => {

  // exec query 
  User.findOne( { userId: _userId }, (err, userData) => {
    if(!err){
      console.log(`User Fetched Successfully`);
    }
    callback(err, userData); // send the db output 
  });  
}

// update User By Id
exports.updateUserById = (_userId, userData, callback) => {

    User.updateOne({userId: _userId}, userData, (err, status) => {
      if(!err){
        console.log(`User Updated Successfully`);
        status = {
          info: 'Updated Successfully!'
        }
      }
    
      callback(err, status); // send the db output 
    });
}

// delete 

