
import {v2 as cloudinary} from 'cloudinary';
import songModel from '../models/songModule.js';
export const addSong = async(req, res) =>  {
    try{

        const name =req.body.name;
                const desc =req.body.desc;
        
                const album =req.body.album;
                const audioFile =req.files.audio[0];
        
                const imageFile =req.body.image[0];
                const audioUpload =await cloudinary.uploader.upload(audioFile.path, {resource_file :"video"});
                const imageUpload =await cloudinary.uploader.upload(audioFile.path, {resource_file :"image"});
                const duration ='${Math.floor(audioUpload.duration/60)}:${{Math.floor(audioUpload.duration % 60)}'
               console.log(name, desc, album, audioFile, imageFile, imageUpload,audioUpload    );
               const songData={
                name, desc,album,audioFile,imageFile,audioFile,imageUpload,duration
               }
               const song =songModel(songData);
               await song.save();
               res.json({success:true, message:"Song Added "})

               
               
        
        
    }catch (error){
        res.json({success:false})

    }
   
  };
  
  export const listSong = async(req, res) => {

   try{

    const allSongs=await songModel.find({});

    res.json({success:true , songs:allSongs});

    
    
   }catch(error){
    res.json({success:false});



   }

  
  };
  export const removeSong= async(req,res)=>{
      try{

        await songModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message: "Song removed"});

      }catch(error){
        res.json({success:false});


      }


  }

  