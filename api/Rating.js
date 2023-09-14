



import express from "express";
import prisma from "./lip/index.js";


const router = express.Router()


router.get("/"  ,async (req,res) => {
 
    const rating = await  prisma.rating.findMany()


    if(rating.length === 0){
        res.status(401).json({mssege : "not found rating"})
    
        return rating


       }
   

})


router.get("/:id"  ,async (req,res) => {
     
    const {id}  = req.params.id
 
    const onerating = await  prisma.restrunt.findUnique({
        where : {
            id : Number(id)
        }
    })

    if(!onerating){

        res.status(401).json({mssege : "not created onerating"})
    }

    return onerating

     
})








router.post("/"  ,async (req,res) => {
 
    const {name , email} = req.body
    const creaRating = await  prisma.rating.create({
        data : {
            name,
            location
        }
    })



    if(!creaRating){
        res.status(401).json({mssege : "not created creaRating"})
    
        return creaRating


       }
   

})





router.put("/:id"  ,async (req,res) => {
 
    const { location,
    food ,
    name } = req.body
    const {id} = req.params.id
    const edited = await  prisma.rating.create({
        data : {
            name,
            location,
     
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
    const dleetd = await  prisma.rating.delete({
       
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