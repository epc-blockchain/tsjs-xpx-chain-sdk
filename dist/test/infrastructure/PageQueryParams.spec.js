"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const PageQueryParams_1 = require("../../src/infrastructure/PageQueryParams");
const expect = chai.expect;
describe('PageQueryParams', () => {
    describe('constructor', () => {
        it('should get default values when no param', () => {
            const result = new PageQueryParams_1.PageQueryParams(undefined, undefined);
            expect(result.page).to.be.equal(0);
            expect(result.pageSize).to.be.equal(25);
        });
        it('should get default values when invalid param', () => {
            const result = new PageQueryParams_1.PageQueryParams(500, -1);
            expect(result.page).to.be.equal(0);
            expect(result.pageSize).to.be.equal(25);
        });
        it('should get values provided', () => {
            const result = new PageQueryParams_1.PageQueryParams(50, 5);
            expect(result.page).to.be.equal(5);
            expect(result.pageSize).to.be.equal(50);
        });
    });
});
//# sourceMappingURL=PageQueryParams.spec.js.map