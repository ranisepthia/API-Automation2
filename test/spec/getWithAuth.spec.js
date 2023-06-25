const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;

const AUTH = "Bearer 0833dfe3-6917-4b19-9eb4-717937f86255"

describe("Post /units", function(){
    it("Create new units", async function(){
        const response = await request
                        .post("/units")
                        .data({
                         "name": "gram",
                         "description": "weight measurement",
                         "unitId": "24b8f836-d74a-46a7-9cf8-8b7f7cd283bf",
    })
    
    .set({
        Authorization : AUTH,
        Accept : "application/json"
    })

    expect(await response.statusCode).to.eql(401)
    console.log(response)
   
    })
})