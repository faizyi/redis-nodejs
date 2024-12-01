import express from "express";
import axios from "axios";
import client from "./client.js";
const app = express();

app.get("/", async (req, res)=>{
    const cacheData = await client.get("todos");
    if(cacheData) return res.json(JSON.parse(cacheData));
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
    await client.set("todos", JSON.stringify(data));
    await client.expire("todos", 30);
    return res.json(data)
});

app.listen(5002, ()=>{
    console.log(`Server on 5002`)
})