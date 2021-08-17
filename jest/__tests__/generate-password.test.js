const generatePassword = require('../generate-password');

describe('method generatePassword', () => {
    let password
    const generatePassword =  require('../generate-password')
    it('returns a generated password of lower-case characters and numberswith the length of 8', () => {
        password = generatePassword()
        expect(password).toMatch(/^[a-z0-9]{8}$/)
    })
});
