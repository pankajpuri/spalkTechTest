# Spalk TechTest

# Hi, I am Pankaj Puri

## About The Project:
### Please read the details about thie project in the provided pdf file. Navigate-> pankajpuri/spalkTechTest/Spalk Tech Test - Software Engineers 2022.pdf


### Client side built With
- `React.Js`
- `axios`
### Server side API buit with
- `Node.JS`
- `Express.JS`
- `jest`


### Getting Started
To run this programme you need 
- Visual Studio Code.
- You can download VSCode using following link [VSCODE](https://code.visualstudio.com/download)

### Prerequisites

- You need to install node [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Go to your Terminal and install npm
- npm type in your terminal `npm install npm@latest -g`

### Installation

Go to your terminal and follow the instruction

- Clone the repo

`gh repo clone pankajpuri/spalkTechTest`

- Navigate to mpegts-Parser-API-Node

 - files folder contains test files and their outputs.
 - models content `mpegts-parser.js` which takes mpeg stream file and extract PacketIDs if available else throws back the error with packets and offsets.
 - routers folder content `mpegts-parser.js` which handle the route operation and send back the response.
 - tests folder contain test file `mpegts-parser.test` which has two unit tests in it.

- Install NPM packages

 `npm install`
 
- To run the test file type
 `npm test` 
 
 ### OR
 
- To run the test file from the command line
 `cat ./files/test_success.ts | node ./models/mpegts-parser.js`
 
### Next
## If you want to run the client side and use API from mpegts-Parser-API-Node
- Enter `node server.js` in the terminal under mpegts-Parser-API-Node for example:`mpegts-Parser-API-Node% node server.js`
- Right click on the `client` and click on Open in integerated terminal or navgiate to client folder
- Component folder is under source folder which contains the main frontend for the client side view.
- Styles folder contains `uploadStream.css` which contain styles for uploadStream.js file.
- services folder contain `httpService.js` which contain `uploadMedia` function that handles the http request.
- 
- Install NPM packages

 `npm install`
 
- To run the test file type
 `npm start` 
 ## Now on the browser under [http](http://localhost:3000/) 
 - upload test_success.ts/ test_failure.ts file and hit the upload button 
 
 ### OR
 
- To run the test file from the command line
 `cat ./files/test_success.ts | node ./models/mpegts-parser.js`






### Please visit my portfolio by clicking the link below.

[https://pankajpuri.github.io/portfolio/](https://pankajpuri.github.io/portfolio/)
