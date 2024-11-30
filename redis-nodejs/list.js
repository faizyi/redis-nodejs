import client from "./client.js";


async function init() {
    // await client.lpush("number", "one") 
    // await client.lpush("number", "two") 
    // await client.lpush("number", "three") 
    // await client.lpush("number", "four") 
    const result = await client.rpop("number")
    console.log(result)
}
init();