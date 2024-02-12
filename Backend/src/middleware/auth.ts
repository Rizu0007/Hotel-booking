import express , {Request , Response} from 'express';
import { NextFunction } from 'express-serve-static-core';
import jwt, { JwtPayload } from 'jsonwebtoken'


const verifyToken=(req: Request, res: Response , next:NextFunction)=>{

    const token=req.cookies["auth_token"]
if(!token){
    res.status(401).json({message:"unauthrize "})
}

try {
    const decode=jwt.verify (token , process.env.JWT_SECRET_KEY as string);
    req.userId=(decode as JwtPayload).userId
} catch (error) {
    res.status(401).json({message:"unauthrize "})
    
}
}