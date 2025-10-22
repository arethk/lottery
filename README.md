# lottery

 This project started as an exercise of using Typescript, Express, React and NodeJS. Later a Spring Boot Java server project was added which mimics the NodeJS server.

 To run the NodeJS server, go to the server directory and run npm run dev

 To run the Spring Boot Java server, go to the java-server directory and run mvn clean install && java -jar ./target/lottery-0.0.1-SNAPSHOT.jar

 To run the client, go to the client directory and run npm run dev

 Open http://localhost:5173/ in your browser to see the UI.

 Make sure to run npm install in both directories before running npm run dev

 To chose which server to use during runtime, edit the getLotteryURL method in ApiClient.ts

 The server is designed to use multiple types of random number generators. There are 2 as of now, Basic via JavaScript Math.random() and Mersenne Twister via a NPM module. More can be added by extending an abstract class.
 