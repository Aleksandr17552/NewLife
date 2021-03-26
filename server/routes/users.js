import express from 'express';
import userController from '../controller/user.controller'
const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getOneUser);
router.put('/', userController.updateUser);
router.delete('/:id', userController.deleteUser);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

export default router;
