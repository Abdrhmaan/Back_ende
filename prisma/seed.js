import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient()


async function seed(){

    try{


        await prisma.user.create({
            data : {
                name : "xaanmadoowe",
                email : "madoowe@gmail.com",
                password : 1234
            }
        })
        await prisma.user.create({
            data : {
                name : "jirde",
                email : "jirde@gmail.com",
                password : 8765
            }
        })

        await prisma.user.create({
            data : {
                name : "faarax",
                email : "qaajie@gmail.com",
                password : 347
            }
        })


        await prisma.restrunt.create({
            data : {
                location : "garoowe",
                food : "baaasto",
                name : "basto macaam",
                authorId : 1
                
            }
        })
        await prisma.restrunt.create({
            data : {
                location : "garoowe",
                food : "baaasto",
                name : "basto macaam",
                authorId : 2
                
            }
        })
        await prisma.restrunt.create({
            data : {
                location : "garoowe road",
                food : "baaasto",
                name : "basto macaam",
                authorId : 3
                
            }
        })


        await prisma.rating.create({
            data : {
             location : "bsso",
             name : "cde",
             restruntId : 1
                
            }
        })
        await prisma.rating.create({
            data : {
             location : "bsso",
             name : "cde",
             restruntId : 2
                
            }
        })
        await prisma.rating.create({
            data : {
             location : "bsso",
             name : "cde",
             restruntId : 2
                
            }
        })





    } catch(error){
        console.log(error)
        process.exit(1)
    } finally{
       await  prisma.$disconnect 
    }


}

seed()