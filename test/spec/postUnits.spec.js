const request = require("supertest")("https://kasir-api.belajarqa.com/api");
const expect = require("chai").expect;
const getUnits = require("./getUnits.spec")

const respGetUnits = getUnits.getUnitsPages

describe("Post /units", function(){
    it("Create new units", async function(){
        const response = await request
                    .post("/units")
                    .data({
                    "name": "gram",
                    "description": "weight measurement",
                    "unitId": "24b8f836-d74a-46a7-9cf8-8b7f7cd283bf",
    });
    
    expect(await response.statusCode).to.eql(404)
    expect(await response.data.name).to.eql("gram")
    expect(await response.data.description).to.eql("weight measurement")
    expect(await response.data.unitId).to.eql("24b8f836-d74a-46a7-9cf8-8b7f7cd283bf")
    
    const resp2 = await getUnits.getUnitsPages(3)
    
    })
})