
import express from "express";
import prisma from "./lip/index.js";


const router = express.Router()


router.get("/"  ,async (req,res) => {
 
    const users = await  prisma.user.findMany()


    if(users.length === 0){
        res.status(401).json({mssege : "not found owners"})
    
        return users


       }
   

})


router.get("/:id"  ,async (req,res) => {
     
    const {id}  = req.params.id
 
    const user = await  prisma.user.findUnique({
        where : {
            id : Number(id)
        }
    })

    if(!user){
        res.status(401).json({mssege : "not created user"})

    }
    return user
    
  
})








router.post("/"  ,async (req,res) => {
 
    const {name , email} = req.body
    const createuser = await  prisma.user.create({
        data : {
            name,
            email
        }
    })



    if(!createuser){
        res.status(401).json({mssege : "not created owners"})
    
        return createuser


       }
   

})





router.put("/:id"  ,async (req,res) => {
 
    const {name , email} = req.body
    const {id} = req.params.id
    const edited = await  prisma.user.create({
        data : {
            name,
            email
        }, 
        where : {
            id : Number(id)
        }
    })



    if(!edited){
        res.status(401).json({mssege : "not created owners"})
    
        return edited


       }
   

})




router.delete("/:id"  ,async (req,res) => {
 
    const {id} = req.params.id
    const dleetd = await  prisma.user.delete({
       
        where : {
            id : Number(id)
        }
    })



    if(!dleetd){
        res.status(401).json({mssege : "not created owners"})
    
        return dleetd


       }
   

})








export default router