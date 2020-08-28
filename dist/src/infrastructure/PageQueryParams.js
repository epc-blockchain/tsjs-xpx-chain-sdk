"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The query params structure describes pagination by page number and page size.
 *
 * @since 1.0
 */
class PageQueryParams {
    /**
     * Constructor
     * @param pageSize
     * @param page
     */
    constructor(
    /**
     * Page size between 10 and 100, otherwise 25
     */
    pageSize, 
    /**
     * Page number should be non negative number, otherwise 0 (first page)
     */
    page) {
        this.pageSize = pageSize;
        this.page = page;
        this.pageSize = (pageSize && pageSize >= 10 && pageSize <= 100) ? pageSize : 25;
        this.page = (page && page >= 0) ? page : 0;
    }
}
exports.PageQueryParams = PageQueryParams;
//# sourceMappingURL=PageQueryParams.js.map