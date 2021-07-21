// import { Request, Response, NextFunction } from "express";
// import { verifyToken } from "../models/user";

// export async function authToken(req: Request, res: Response, next: NextFunction){
//     let token = req.headers.token;
//     if(!token){
//         res.status(400).send( {
//             ok : false,
//             msg : 'Need header token'
//         });
//     }else{
//         if(!verifyToken(token)){
//             res.status(400).send( {
//                 ok : false,
//                 msg : 'token is not valid anymore'
//             });
//         }else{
//             next();
//         }
//     }
// }
