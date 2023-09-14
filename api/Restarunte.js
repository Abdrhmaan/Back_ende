

import express from "express";
import prisma from "./lip/index.js";


const router = express.Router()


router.get("/"  ,async (req,res) => {
 
    const restrunte = await  prisma.restrunt.findMany()


    if(restrunte.length === 0){
        res.status(401).json({mssege : "not found restrunte"})
    
        return restrunte


       }
   

})


router.get("/:id"  ,async (req,res) => {
     
    const {id}  = req.params.id
 
    const onerestru = await  prisma.restrunt.findUnique({
        where : {
            id : Number(id)
        }
    })

    if(!onerestru){

        res.status(401).json({mssege : "not created user"})
    }

    return onerestru

     
})








router.post("/"  ,async (req,res) => {
 
    const {name , email} = req.body
    const creaRestrute = await  prisma.user.create({
        data : {
            name,
            email
        }
    })



    if(!creaRestrute){
        res.status(401).json({mssege : "not created creaRestrute"})
    
        return creaRestrute


       }
   

})





router.put("/:id"  ,async (req,res) => {
 
    const { location,
    food ,
    name } = req.body
    const {id} = req.params.id
    const edited = await  prisma.user.create({
        data : {
            name,
            location,
            food
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
    const dleetd = await  prisma.restrunt.delete({
       
        where : {
            id : Number(id)
        }
    })



    if(!dleetd){
        res.status(401).json({mssege : "not created restrunt"})
    
        return dleetd


       }
   

})








export default router