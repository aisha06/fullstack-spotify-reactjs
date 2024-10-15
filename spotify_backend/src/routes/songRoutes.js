import { addSong, listSong,removeSong } from '../controller/songController.js';
import express from 'express';
import upload from '../middlleware/multer.js'


const songRouter=express.Router();

// const { addSong, listSong } = songController;
songRouter.post('/add',upload.fields([{name:"image",maxCount:1},{name:"audio",maxCount:1}]),addSong);
songRouter.get('/list',listSong);
songRouter.post('./remove',removeSong);




export default songRouter;
