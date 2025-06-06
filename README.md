Cucumber Playwright Automation Framework
This repository provides a robust automation framework that integrates:
    • Web UI Automation using Playwright
    • API Automation using Playwright
    • Behavior-Driven Development (BDD) with Cucumber.js
The framework is built with Node.js and TypeScript, promoting modularity, scalability, and ease of maintenance.
Project Structure

??? .vscode/                 # VSCode configurations
??? Pageobjects/             # Page Object Models
??? features/                # Cucumber feature files
??? lib/                     # Custom libraries and helpers
??? reports/                 # Test execution reports
??? screenshots/             # Captured screenshots on test failures
??? src/                     # Step definitions and support code
??? utils/                   # Utility functions
??? .env.dev                 # Environment variables for development
??? .env.tst                 # Environment variables for testing
??? .gitignore               # Git ignore rules
??? .npmrc                   # NPM configurations
??? .prettierignore          # Prettier ignore rules
??? .prettierrc              # Prettier configuration
??? CHANGELOG.md             # Project changelog
??? LICENSE                  # MIT License
??? README.md                # Project documentation
??? cucumber.js              # Cucumber configuration
??? eslint.config.js         # ESLint configuration
??? package-lock.json        # NPM lock file
??? package.json             # Project dependencies and scripts
??? renovate.json            # Renovate configuration
??? tsconfig.json            # TypeScript configuration
    • Behavior-Driven Development (BDD): Write human-readable test scenarios using Gherkin syntax.
    • Cross-Browser Testing: Execute tests across Chromium, Firefox, and WebKit browsers.
    • Modular Architecture: Implement Page Object Model (POM) for reusable and organized code.
    • Environment Configuration: Manage different environments using .env files.
    • Comprehensive Reporting: Generate detailed reports and capture screenshots on test failures.
    • Code Quality Tools: Maintain code standards using ESLint and Prettier.
Ensure the following tools are installed on your system:
    • Node.js (v14 )
    • npm
Installation
    1. Clone the Repository
       
       git clone https://github.com/SampathkvAutomation/cucumber-playwright.git
       cd cucumber-playwright
    2. Install Dependencies
       
       
       npm install
    3. Install Playwright Browsers
       
       
       npx playwright install
 Running Tests
    • Execute All Tests


  npx cucumber-js
    • Run Specific Feature File


  npx cucumber-js features/your-feature-file.feature
    • Run Tests with Specific Tags

  npx cucumber-js --tags "@yourTag"
    • Run Tests in Headed Mode

  npx cucumber-js --world-parameters '{"headless": false}'
 Reporting
    • Generate HTML Reports
      After test execution, reports are available in the reports/ directory.
    • View Reports
      Open the generated HTML report in your browser to review test results.
 Configuration
    • Cucumber Configuration: Customize settings in cucumber.js for test directories, timeouts, reporters, etc.
    • TypeScript Configuration: Adjust compiler options in tsconfig.json as needed.
    • Prettier Configuration: Maintain code formatting standards using .prettierrc.
    • ESLint Configuration: Enforce code quality using eslint.config.js.
 Best Practices
    • Page Object Model (POM): Structure your page interactions within the Pageobjects/ directory for reusability.
    • Environment Variables: Manage sensitive data and environment-specific settings using .env files.
    • Logging and Debugging: Utilize Playwright's tracing and video recording features for debugging.
    • Continuous Integration: Integrate with CI tools like GitHub Actions, Jenkins, or GitLab CI for automated testing pipelines.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
License

