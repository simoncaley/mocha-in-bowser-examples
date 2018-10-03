import { apiUrlBTC } from "../global.data.js";

describe("N Exchange BTC Suite", function() {
  it("Fetch response back from API", async function() {
    const response = await fetch(apiUrlBTC);
    chai.expect(response.status).to.equal(200);
    chai.expect(response.statusText).to.equal("OK");
  });
});

describe("N Exchange BTC Suite - JSON Responses", function() {
  it("Code is BTC & Name is bitcoin ", async function() {
    let response = await fetch(apiUrlBTC).then(function(response) {
      return response.json();
    });
    chai.expect(response).to.be.a("object");
    chai.expect(response.code).to.equal("BTC");
    chai.expect(response.name).to.equal("bitcoin");
  });
  it("Is a crypto currency", async function() {
    let response = await fetch(apiUrlBTC).then(function(response) {
      return response.json();
    });
    chai.expect(response).to.be.a("object");
    chai.expect(response.is_crypto).to.equal(true);
  });
});
