import { baseConfig as config } from './wdio.conf';
import { join } from 'path';

config.services.push(
    ['image-comparison',
    // The options
    {
        // Some options, see the docs for more
        baselineFolder: join(process.cwd(), './screenshots/reference/'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), './screenshots/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        // Options for the tabbing image
        tabbableOptions:{
            circle:{
                size: 18,
                fontSize: 18,
                // ...
            },
            line:{
                color: '#ff221a', // hex-code or for example words like `red|black|green`
                width: 3,
            },
        }
        // ... more options
    }
]);

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
    'test/specs/visualRegression/**/*.ts'
];

export { config };