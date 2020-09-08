import { baseConfig as config } from './wdio.conf';

config.capabilities = [
    {
        maxInstances: 10,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu'],
        },
    }
];

config.specs = [
    'test/specs/api/**/*.ts'
];

export { config };