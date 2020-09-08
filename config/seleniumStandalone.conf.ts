import { baseConfig as config } from './wdio.conf';

config.capabilities = [
    {
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true

    },
    {
        maxInstances: 5,
        browserName: 'firefox'
    }
];

config.specs = [
    'test/specs/ui/**/*.ts'
];

export { config };