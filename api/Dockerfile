# Setting base
FROM openjdk:8-jdk-alpine

# Setting the working directory
WORKDIR /app

COPY ./target/api-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 9090

# Running the code
CMD [ "java","-Djava.security.egd=file:/dev/./urandom","-jar","app.jar","--server.port=9090" ]