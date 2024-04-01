import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

// Function to check if running on LambdaTest
function isLambdaTest(): boolean {
    // Check if an environment variable named LAMBDATEST is set to true
    console.log(process.env.LAMBDATEST);
    return process.env.LAMBDATEST === 'true';
}

// Playwright config to run tests on LambdaTest platform and local
const config: PlaywrightTestConfig = {
    testDir: "tests",
    timeout: 60000,
    use: {},
    projects: isLambdaTest() ? getLambdaTestConfig() : getLocalConfig(),
};

// Function to return LambdaTest configuration
function getLambdaTestConfig(): PlaywrightTestConfig['projects'] {
    return [
        // LambdaTest configurations here
        // Example:
        {
            name: "chrome:latest:MacOS Ventura@lambdatest",
            use: {
                viewport: { width: 1920, height: 1080 },
            },
        },
        // Add other LambdaTest configurations as needed
    ];
}

// Function to return local configuration
function getLocalConfig(): PlaywrightTestConfig['projects'] {
    return [
        // Local configurations here
        // Example:
        {
            name: "chrome",
            use: {
                browserName: "chromium",
                channel: "chrome",
            },
        },
        // Add other local configurations as needed
    ];
}

export default config;




