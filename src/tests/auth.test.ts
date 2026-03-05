import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";


// mock request
const reqMock = {
    headers: {
        'authorization': 'ApiKey 123-456-789'
    }
}

describe('APIKey', () => {
    test('returns API key from header', () => {
        const APIKey = getAPIKey(reqMock['headers']);
        expect(APIKey).toBeTypeOf('string');
        expect(APIKey).toBe('123-456-789');
    });
});