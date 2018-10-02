import apiUrl from "../global.data.js";

describe("test suite two", function() {
  it("should get JSON", async function() {
    const response = await fetch(apiUrl);
    console.log(response);
    chai.expect(response.status).to.equal(200);
    chai.expect(response.statusText).to.equal("OK");
  });
});

describe("test suite two", function() {
  it("Code is USD", async function() {
    let response = await fetch(apiUrl).then(function(response) {
      return response.json();
    });
    chai.expect(response).to.be.a("object");
    chai.expect(response.code).to.equal("USD");
    chai.expect(response.name).to.equal("USD");
  });
  it("should get JSON", async function() {
    let response = await fetch(apiUrl).then(function(response) {
      return response.json();
    });
    console.log(response);
    chai.expect(response).to.be.a("object");
  });
});
