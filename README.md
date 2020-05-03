# nodejs-hello-world

Example application using Docker to deploy with Elastic Beanstalk

# Setup Instructions

* clone:
`git clone https://github.com/nicolas-vazquez/nodejs-hello-world.git`
* install dependencies: `npm install`
* start server: `npm start`
* navigate to http://localhost:3000

# Docker Instructions:
* To build a docker image of the app, in your terminal, navigate to the app's root directory and run: `docker build -t nodejs-hello-world .`
* To run a docker container of the image you just build, run the command: `docker run -d -p 3000:3000 --name nodejs-hello-world nodejs-hello-world`
* Use the command `docker ps` to make sure your container is running

* If you are on mac or linux, navigate to http://localhost:3000 in your browser to view your running app.
* If you are on windows, navigate to http://\<**port docker runs on**\>:3000 in your browser to view your running app.