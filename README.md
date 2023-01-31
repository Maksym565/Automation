# Playwright auto test

This autotests was developing by using playwright framework

## Installation

1. Get the repository to your local PC
2. Install node.js && npm on your local machine 
3. Run command below to install all dependencies

```bash
npm install
```

## Usage

```bash
// You can use scripts from package.json file

// "test": "npx playwright test"
npm run test # Will run all tests
// "report": "npx playwright show-report"
npm run report # Report of latest local run will be opened with screenshot
// "format": "npx prettier --write tests && npx prettier --write src"
npm run format # Used prettier with default configuration to format code
```

## Additional info

Report was stored in test-results && playwright-report folders. Added Prettier but with default configurations. Also added default gitHub workflow.
