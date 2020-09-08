import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('API Examples with JSONtest.com', () => {
    it('should use an echo service', () => {
        browser.call(() => {
            return chai.request('http://echo.jsontest.com')
                    .get('/key2/value2/key1/value1')
                    .then((response) => {
                        expect(response).to.have.status(200);
                        expect(response.body.key1).to.equal('value1');
                        expect(response.body.key2).to.equal('value2');
                    });
        });
    });
});