/**
 * @jest-environment jsdom
 */

import { setCookie } from '../../src/helpers/cookieHelper';
import {mockToken} from '../mockValues';

const mockCookie = `token=${mockToken}` 

describe('setCookie', () => {
    it('should return the expected cookie', () => {
        expect(setCookie('token', mockToken)).toEqual(mockCookie);
    });
});