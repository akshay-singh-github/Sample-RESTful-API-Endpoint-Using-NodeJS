# Sample-RESTful-API-Endpoint-Using-NodeJS

## RESTful API Endpoint Implementation Overview :
<br/>![Alt text](./Images/APIOverView.JPG?raw=true "API Overview")

## Technologies Used:
1. **Front End** : AngularJS, HTML, CSS, Bootstrap.
1. **Back End** : ExpressJS, NodeJS.
1. **Unit Testing** : Chai, Mocha.

## API Documentation
<br/>![Alt text](./Images/APIDocumentation.JPG?raw=true "API Documentation")

## Steps to Compile and Run the code:
1. Open a Terminal (or Command Prompt for Windows.).
1. Create a new directory by typing below command in terminal and pressing Enter.<br/>**_mkdir Tesing_Sample_API_Implementation_**
1. Enter the created directory by typing below command in terminal and pressing Enter.<br/>**_cd Tesing_Sample_API_Implementation_**
1. Clone the repository with sample on local System by typing below command in terminal and pressing Enter.<br/>**_git clone https://github.com/akshaysingh1520/Sample-RESTful-API-Endpoint-Using-NodeJS.git_**
1. Enter the cloned code directory (or repository) by typing below command in terminal and pressing Enter.<br/>**_cd Sample-RESTful-API-Endpoint-Using-NodeJS_**
1. Run the below command in terminal and press Enter to install all the project dependencies.<br/>**_npm install -d_**
1. Run the below command in terminal and press Enter to start API server.<br/>**_node app.js_**
1. Open a browser like Google Chrome, Firefox etc. and type below url in the url address bar and press Enter.<br/>**_http://localhost:3000/#!/_**
1. Below UI will appear in the browser.<br/> ![Alt text](./Images/HomeScreen.jpg?raw=true "Home Screen")
1. Please enter the valid Latitude, Longitude and Radius to see the results.<br/> ![Alt text](./Images/HomeScreenResults.JPG?raw=true "Results")

## Steps to Run the Unit Tests:

1. To run Unit tests make sure that the API Server is running. i.e. Steps 1 - 7 mentioned above should be performed at least.
1. Open a new Terminal and Enter the cloned code directory (Similar to step 5 mentioned above).
1. After entering the cloned repository i.e. "Sample-RESTful-API-Endpoint-Using-NodeJS", run the below command.<br />**_npm test_**
1. All the Unit tests for testing the RESTful API Endpoint are run and results are displayed in terminal.
Please see the output in the below image for reference.<br/> ![Alt text](./Images/UnitTestsResults.JPG?raw=true "Unit Test Results")

## Error Handling in UI:

1. For invalid Latitude.
<br/>![Alt text](./Images/invalidLatitude.JPG?raw=true "Invalid Latitude.")
1. For invalid Longitude.
<br/>![Alt text](./Images/invalidLongitude.JPG?raw=true "Invalid Longitude.")
1. For invalid Radius.
<br/>![Alt text](./Images/invalidRadius.JPG?raw=true "Invalid Radius.")