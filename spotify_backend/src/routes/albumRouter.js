
import { addAlbum,listAlbum,removeAlbum } from "../controller/albumController.js";
import upload from "../middlleware/multer.js";
import express  from "express";
const albumRouter = express.Router();

albumRouter.post('/add',upload.single('image'),addAlbum);

albumRouter.get('/list',listAlbum);

albumRouter.post('/remove',removeAlbum);

export default albumRouter;







