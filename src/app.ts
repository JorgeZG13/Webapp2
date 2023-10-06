import { PrismaClient } from '@prisma/client';
import { create } from 'domain';
const prisma = new PrismaClient();

const createUser= async ()=>{
    const userCreated= await prisma.autorModel.create({
        data:{
            cedulautor:"1315789618",
            nombreautor:"Jorge",
            correoautor:"Jzambrano020@gmail.com",
            generos:{
                create:{
                    generoliterario:"prueba"  
                }
            }
        }
    });
    console.log(userCreated)}
