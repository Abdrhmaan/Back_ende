

import express from "express";
import users from "./User.js"
import restrunt from "./Restarunte.js"
import rating from "./Rating.js"

const server = express()

server.use(express.json())


server.use("/api/user" , users)
server.use("/api/restrunt" , restrunt)
server.use("/api/rating" , rating)






export default server