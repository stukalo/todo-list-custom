import { deepCopy } from '../deepCopy';

describe('deepCopy', () => {
    it('should copy correctly', () => {
        const testData = [
            {
                expected: {},
                source: {},
            },
            {
                expected: [],
                source: [],
            },
            {
                expected: null,
                source: null,
            },
            {
                expected: void 0,
                source: void 0,
            },
            {
                expected: {
                    key: 'value',
                },
                source: {
                    key: 'value',
                },
            },
            {
                expected: [{
                    key1: 'value1',
                    key2: 'value2',
                }, {
                    key3: [{
                        key4: 'value4',
                    }],
                }],
                source: [{
                    key1: 'value1',
                    key2: 'value2',
                }, {
                    key3: [{
                        key4: 'value4',
                    }],
                }],
            },
            {
                expected: {
                    key: {
                        subKey: 'subKey',
                    },
                    key1: {
                        subKey1: 'subKey1',
                    },
                },
                source: {
                    key: {
                        subKey: 'subKey',
                    },
                    key1: {
                        subKey1: 'subKey1',
                    },
                },
            },
            {
                expected: {
                    key: {
                        subKey: {
                            subKey: 'subKey',
                            date: new Date(0),
                        },
                    },
                    key1: {
                        subKey: {
                            subKey: 'subKey',
                        },
                    },
                },
                source: {
                    key: {
                        subKey: {
                            subKey: 'subKey',
                            date: new Date(0),
                        },
                    },
                    key1: {
                        subKey: {
                            subKey: 'subKey',
                        },
                    },
                },
            },
        ];

        testData.forEach(data => {
            const actual = deepCopy(data.source);

            assert.deepEqual(actual, data.expected);
        });
    });
});