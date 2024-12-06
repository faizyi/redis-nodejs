import client from "./client.js";

async function init() {
    // await client.set("msg:5" , "form nodejs")
    // await client.expire("name", 5)
    const result = await client.get("msg:5")
    console.log(result)
}
init();