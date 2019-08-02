
const api = require('../src');
const config = require('../.eslintrc');

describe('API', () => {

    it('should export ESLint configuration', () => {
        expect(api).toBe(config);
    });

});
