import {  fastify } from "fastify";

const app = fastify({
    logger: "on"
})

const personA = {
    firstName: "jack",
    lastName: "red", 
    age: 12    
}

const   numbers = [1, 2, 4, 7]


//headers
app.get("/", (req, res) => {
    console.log("The rerquest:: ", req.headers)
    return req.headers
})

//params
app.get("/numbers/:number", async (req, res) => {
    return numbers.find((number) => number.toString() === req.params.number) || "Number is not found" 
})

//data
app.post("/userInfos", (req, res) => {
    numbers.push(req.body.number)
    return numbers
})

//queryString
app.get("/numbers", (req, res) => {
    return req.query
})  


// req validation through JSON schema

const schema = {
    headers: {
        type: "object",
        properties: {
            accept: {type: "string"}
        }        
    },
    params: {
        required: ["id"],
        type: "object",
        properties: {
            id: {type: "number"}
        }
    },
    body: {
        // required: ["name"],
        // type: "object",
        // properties: {
        //     name: {type: "string"}
        // }
    },
    queryString: {
        type: "object",
        properties: {
            filter: {type: "string"}
        }
    }
}


app.post("/example/:id", {schema}, ({headers, params, body, query}, res) => {
    return {
        message: "request processed succ!",
        // headers,
        // params,
        // body,
        // query
    }
})  

//connecting to a databse


app.listen({ host: "0.0.0.0", port: 3000 });


