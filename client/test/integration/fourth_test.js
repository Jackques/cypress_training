describe('Bonus exercise', function () {

  it('Exercise: Skipping the login screen', function () {
    cy.request({
      method: 'POST',
      url: 'http://the-internet.herokuapp.com/authenticate',
      form: true,
      body: {
        username: 'tomsmith',
        password: 'SuperSecretPassword!'
      }

    })
      .visit('http://the-internet.herokuapp.com/secure');
    cy.wait(5000);
  });

  it('Exercise: Retrieving data through an API', function () {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1'
    })
      .debug()
    //   .visit('http://the-internet.herokuapp.com/secure');
    // cy.wait(5000);
  });

});
