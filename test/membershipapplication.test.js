const assert = require('assert');

var membershipApplication = require('../membershipapplication.js');
describe('membershipapplication requirements', function()
{
    var validApp;
    before(function()
    {
        validApp = new membershipApplication({
            first: 'Test',
            last : "user",
            email : "test@test.com",
            age: 30,
            height: 66,
            weight: 180
        });
    });

    describe('Application is successful if...', function()
    {
        it("application is valid if all are valid", function()
        {
            assert(validApp.isValid(), "Not valid");
        });
    });

    describe("Application is invalid if..", function(){
        // it.skip('is past the validUntil date', function(){

        // });
        it('it is expired', function(){
            var myApp = new membershipApplication({
                validUntil: Date.parse("01/01/2010")
            })

            assert(myApp.expired());
        });

        it("email is 4 chars or less", function(){
            var myApp = new membershipApplication({
                email: 'vik'
            });

            assert(!myApp.emailIsValid());
        });

        it("Test if email doesn't contain @ symbol", function(){
            var myApp = new membershipApplication({
                email: 'thisthisthisnosymbol'
            });

            assert(!myApp.emailIsValid());
        })

        it("Email is required and has not been provided", function()
        {
            var myApp = new membershipApplication();
            assert(!myApp.emailIsValid());
        });
    })
})
