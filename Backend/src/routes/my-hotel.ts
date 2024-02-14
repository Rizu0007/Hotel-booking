import express, { Request  , Response } from "express";
import multer from 'multer'
import cloudinary from "cloudinary"
import { promises } from "dns";
import { compare } from "bcryptjs";
import Hotel, { HotelType } from "../models/hotel";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
const router=express.Router();

const storage=multer.memoryStorage();
const upload=multer({
    storage:storage,
    limits:{
        fileSize:5*1024 * 1024 //5mb

    }
})
router.post("/" , verifyToken,  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel type is required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("Price per night is required and must be a number"),
    body("facilities")
      .notEmpty()
      .isArray()
      .withMessage("Facilities are required"),
  ], 
 upload.array('imageFiles' ,6) , async (req:Request , res:Response)=>{
try {
    const imageFiles=req.files as Express.Multer.File[];
    const newHotel:HotelType=req.body;

    //upload the images

    const uploadPromises=imageFiles.map(async(Image)=>{
        const b64=Buffer.from(Image.buffer).toString("base64");
        let dataUrl="data:" + Image.mimetype+";base64,"+b64;
          const res=await cloudinary.v2.uploader.upload(dataUrl);
          return res.url;

    })
    const imagesUrls=await Promise.all(uploadPromises);

newHotel.imageUrls=imagesUrls;
newHotel.lastUpdated=new Date();

newHotel.userId=req.body;
 const hotel=new Hotel(newHotel)
 await hotel.save();

 res.status(201).send(hotel)

} catch (error) {
    console.log("Error Create Hostels" , error);
    res.status(500).json({message:"toook wrong"})

}

})
export default router;