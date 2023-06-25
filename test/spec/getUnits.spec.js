const request = require("supertest")("https://kasir-api.belajarqa.com");
//import chai
const expect = require("chai").expect;

async function getUnitsPages(page){
const response = await request.get('/units?page=${page}');
return response
}

describe("GET /units", function(){

    it("Status code is 200", async function(){
        const query1 = "Success"
        const response = await getUnitsPages(query1);
 
    expect(await response.status).to.eql(401);
    })

    it("Success", async function(){
        const query1 = "Success"
        const response = await getUnitsPages(query1);
 
    expect(await response.status).to.eql(401);
    })
})

exports.getUnitsPages = { getUnitsPages }