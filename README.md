# wdio-typescript-boilerplate

A boilerplate TypeScript project for WebdriverIO, featuring examples of Selenium Standalone, API and visual regression testing.

## Features
* WebdriverIO 6
* TypeScript
* Mocha
* chai
* chai-http for API testing
* Cucumber
* wdio-image-comparison-service for visual regression testing
* Configurations for Selenium Standalone with Mocha and Cucumber, API, and visual regression testing

## Prerequisites
* Node v.12.16.1 or higher
* Latest versions of Chrome and Firefox

## Installation

```
# Clone the Git repository:
git clone https://github.com/ivo-plamenov/wdio-typescript-boilerplate.git
# Install the dependencies:
npm install
```

## Test Execution

```
# Selenium Standalone tests
npm run test:selenium

# API tests
npm run test:api

# Visual regression testing
npm run test:visual
```