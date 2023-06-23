# Spalk TechTest

# Hi, I am Pankaj Puri

## About The Project:
### Please read the details about the project in the provided pdf file. Navigate-> pankajpuri/spalkTechTest/Spalk Tech Test - Software Engineers 2022.pdf

### Main Purpose of the project
-  To implement a parser that: Reads a byte stream from standard input
-  Extract the packet IDs while parsing valid streams else displaying errors.
  
### NOTE: To take the this to next level I have built the client and server-side both by utilising the mpegts-parser.js method.

### Client side built With
- `React.Js`
- `Axios`
### Server-side API built with
- `Node.JS`
- `Express.JS`
- `jest`


### Getting Started
To run this programme you need 
- Visual Studio Code.
- You can download VSCode using the following link [VSCODE](https://code.visualstudio.com/download)

### Prerequisites

- You need to install node [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Go to your Terminal and install npm
- npm type in your terminal `npm install npm@latest -g`

### Installation

Go to your terminal and follow the instruction

- Clone the repo

`gh repo clone pankajpuri/spalkTechTest`

- Navigate to mpegts-Parser-API-Node

 - **files** folder contains test files and their outputs.
 - **models** content `mpegts-parser.js` which takes mpeg stream file and extract PacketIDs if available else throws back the error with packets and offsets.
 - **routers** folder content `mpegts-parser.js` which handle the route operation and send back the response.
 - **tests** folder contain the **test** file `mpegts-parser.test` which has two unit tests in it.

- Install NPM packages

 `npm install`
 
- To run the test file, type the following script in the terminal under this directory: /spalkTechTest/mpegts-Parser-API-Node/
 `npm test` 
 
 ### OR
 
- To run the test file from the command line
 `cat ./files/test_success.ts | node ./models/mpegts-parser.js`
 
### Next: If we want to take this feature to the next level for client use purposes.
## If you want to run the client side and use API from mpegts-Parser-API-Node
- Enter `node server.js` in the terminal under mpegts-Parser-API-Node for example:`/spalkTechTest/mpegts-Parser-API-Node% node server.js`
- Next
- Right click on the **client folder** and click on **Open in integrated terminal**.
- **components** folder is under the source folder which contains the main frontend for the client-side view.
- **styles** folder contains `uploadStream.css` which contains styles for the uploadStream.js file.
- **services** folder contains `httpService.js` which contains the `uploadMedia` function that handles the HTTP request.
- 
- Install NPM packages

 `npm install`
 
- To run the test file type
 `npm start`

 ## Now on the browser under [http](http://localhost:3000/) 
 - upload test_success.ts or test_failure.ts file and hit the upload button 
 


### Please visit my portfolio by clicking the link below.

[https://pankajpuri.github.io/portfolio/](https://pankajpuri.github.io/portfolio/)
