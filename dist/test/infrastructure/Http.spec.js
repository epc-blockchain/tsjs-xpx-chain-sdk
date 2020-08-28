"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const Http_1 = require("../../src/infrastructure/Http");
const QueryParams_1 = require("../../src/infrastructure/QueryParams");
const expect = chai.expect;
describe('Http', () => {
    class TestHttp extends Http_1.Http {
    }
    const testHttp = new TestHttp();
    describe('queryParams', () => {
        it('should get undefined values when no param', () => {
            const result = testHttp.queryParams(undefined);
            expect(result.page).to.be.undefined;
            expect(result.id).to.be.undefined;
            expect(result.order).to.be.undefined;
        });
        it('should get values', () => {
            const q = {
                id: 'aaaaaaaaaaaaaaaa',
                pageSize: 100,
                order: QueryParams_1.Order.DESC,
            };
            const result = testHttp.queryParams(q);
            expect(result.id).to.be.equal('aaaaaaaaaaaaaaaa');
            expect(result.pageSize).to.be.equal(100);
            expect(result.order).to.be.equal(QueryParams_1.Order.DESC);
        });
    });
    describe('pageQueryParams', () => {
        it('should get undefined values when no param', () => {
            const result = testHttp.pageQueryParams(undefined);
            expect(result.page).to.be.undefined;
            expect(result.pageSize).to.be.undefined;
        });
        it('should get values', () => {
            const q = {
                page: 5,
                pageSize: 100,
            };
            const result = testHttp.pageQueryParams(q);
            expect(result.page).to.be.equal(5);
            expect(result.pageSize).to.be.equal(100);
        });
    });
});
//# sourceMappingURL=Http.spec.js.map