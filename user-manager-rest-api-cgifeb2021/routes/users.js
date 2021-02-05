const express = require('express');
const userService = require('../services/usersService');
const router = express.Router();

// /api/users
// POST Method
router.post('/', (req, res, next) => {
  userService.addUser(req.body, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

// /api/users
/* GET users listing. */
router.get('/', (req, res, next) => {

  userService.getUsers((err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });

});

// api/users/:id 
// GET Method with URL Param - id
router.get('/:id', (req, res, next) => {

  console.log(`user id: ${req.params.id}`);

  userService.getUserById(req.params.id, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  })

});

// /api/users/:id 
// PUT Method with URL Param 
router.put('/:id', (req, res, next) => {

  console.log(req.params.id);
  console.log(req.body);

  userService.updateUserById(req.params.id, req.body, (err, data) => {
    if (!err) {
      userService.getUserById(req.params.id, (_err, _updatedUserData) => {
        if (!_err) {
          console.log(_updatedUserData);
          res.json(_updatedUserData);
        }else{
          res.json(err);
        }
      });
      
    } else {
      res.json(err);
    }
  });

});

// /api/users/:id 
// Todo: DELETE Method with URL Param
router.delete('/:id', (req, res, next) => {
  console.log(req.params.id);
  res.json({
    statusMessage: 'Deleted Successfully!'
  });
});

module.exports = router;
