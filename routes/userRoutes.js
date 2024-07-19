import express from 'express';
import userController from '../controllers/usercontroller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', userController.register); // POST /users
router.get('/', auth.checkAuth, auth.isAdmin, userController.getUsers); // GET /users
router.post('/login', userController.login); // POST /users/login
router.post('/logout', auth.checkAuth, userController.logout); // POST /users/logout
router.get('/profile', auth.checkAuth, userController.getUser); // GET /users/profile
router.put('/profile', auth.checkAuth, userController.updateUser); // PUT /users/profile
router.delete('/profile', auth.checkAuth, userController.deleteUser); // DELETE /users/profile

export default router;
