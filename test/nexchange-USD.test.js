import apiUrlUSD from "../global.data.js";

describe("N Exchange USD Suite", function() {
  it("Fetch response back from API", async function() {
    const response = await fetch(apiUrlUSD);
    chai.expect(response.status).to.equal(200);
    chai.expect(response.statusText).to.equal("OK");
  });
});

describe("N Exchange USD Suite - JSON Responses", function() {
  it("Code is USD & Name is USD", async function() {
    let response = await fetch(apiUrlUSD).then(function(response) {
      return response.json();
    });
    chai.expect(response).to.be.a("object");
    chai.expect(response.code).to.equal("USD");
    chai.expect(response.name).to.equal("USD");
  });
  it("Is not a crypto currency", async function() {
    let response = await fetch(apiUrlUSD).then(function(response) {
      return response.json();
    });
    chai.expect(response).to.be.a("object");
    chai.expect(response.is_crypto).to.equal(false);
  });
});
