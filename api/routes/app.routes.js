
import express from "express"
import path from "path";


const router = express.Router();
// Define your routes here
router.get("/", (req, res) => {
    res.sendFile(path.resolve("blogog/index.html"));
});


export default router;
//import appRouter from "../../../blogog/index.html";