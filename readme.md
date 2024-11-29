# API Documentation

## API Endpoint

To test the API, use the following URL:

**API URL:**  
- [https://evi3hyd4cc.execute-api.ap-northeast-1.amazonaws.com/prod/hello?name=John](https://evi3hyd4cc.execute-api.ap-northeast-1.amazonaws.com/prod/hello?name=John)

### API Behavior
- **Example Request 1:** `/hello?name=John`  
  **Response:** `Hello, John`
  
- **Example Request 2:** `/hello`  
  **Response:** `Hello, World`

---

## Testing Locally

To test the API locally, follow these steps:

1. **Run Unit Tests:**
   - Execute the following command to run the tests:
     ```bash
     yarn test  or you can run workflow mannually for testing.
     ```

2. **Run ESLint:**
   - To check for code linting issues, use the following command:
     ```bash
     yarn lint
     ```

3. **Run API:**
    - To access swagger docs locally:
    ```bash
     yarn start
     ```



---

## Deployment Guidelines

Follow these steps to deploy the application:

1. **Build the Application:**
   - First, you need to build the project by running:
     ```bash
     yarn build
     ```

2. **Deploy the Application:**
   - Once the build is complete, deploy the application by running:
     ```bash
     yarn deploy
     ```

---

## Continuous Integration & Continuous Deployment (CICD)

With the CICD setup, the following actions will be automatically performed whenever you push changes to the `main` branch:

- **Linting:** Automatically run lint checks.
- **Unit Tests:** Automatically run the unit tests to ensure the code behaves as expected.
- **Build:** Automatically build the project.
- **Deployment:** Automatically deploy the project to the AWS environment.

No manual intervention is required for these steps once changes are pushed to the `main` branch.

---

