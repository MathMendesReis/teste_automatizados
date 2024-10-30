import http from "node:http"

const products = [
  {id:1,name: "camiseta",price:29.99}
]

const app = http.createServer((request,response)=>{
  if(request.method === "GET" && request.url === "/products"){
    response.setHeader("Content-Type","application/json")
    response.end(JSON.stringify(products))
  }
})


export {app}