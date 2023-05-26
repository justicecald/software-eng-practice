const { expect } = require('chai');
const User = require('../class/user');

describe('User class', function() {
    it('Should create successfully', function() {
        let user = new User();

        expect(user).to.exist;
    });
})