/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {deepEqual} from 'assert';
import {expect} from 'chai';
import { AccountProperty } from '../../../src/model/account/AccountProperty';
import { Address } from '../../../src/model/account/Address';
import { PropertyType } from '../../../src/model/account/PropertyType';
describe('AccountProperty', () => {

    it('should createComplete an AccountProperty object', () => {
        const accountPropertyDTO = {
            propertyType: PropertyType.AllowAddress,
            values: ['906415867F121D037AF447E711B0F5E4D52EBBF066D96860EB'],
        };

        const accountProperty = new AccountProperty(
            accountPropertyDTO.propertyType,
            accountPropertyDTO.values.map((value) => {
                return Address.createFromEncoded(value);
            }),
        );

        expect(accountProperty.propertyType).to.be.equal(accountPropertyDTO.propertyType);
        deepEqual(accountProperty.values.length, accountPropertyDTO.values.length);
    });
});
