import express from 'express';
import UserController from '../controls/UserController.js';
const userRoute = express.Router();
let uInstance = new UserController();

userRoute.get('/', uInstance.index);
userRoute.get('/:id', uInstance.show);
userRoute.post('/', uInstance.create);
userRoute.put('/:id', uInstance.update);
userRoute.delete('/:id'), uInstance.delete();

export default userRoute;