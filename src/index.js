import dotenv from "dotenv";
import app from "./app.js";
import conectDB from "./db/database-connect.js";

dotenv.config({
    path: "./.env",
    override: true
})

const port = process.env.PORT || 3000;

conectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app is listening on port https://localhost:${port}`);
        });
    })
    .catch((err)=>{
        console.error("MongoDB connection error: ", err);
        process.exit(1);
    });