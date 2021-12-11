# Rent-my-car application

## General architecture

![enter image description here](https://i.postimg.cc/N0T8jd2B/Untitled-Diagram-drawio.png)


Initially we created a diagram of the desired database: https://dbdiagram.io/d/61b3737c8c901501c0eac286

As in the description in the image above, the Api (Hasura) requires a token to validate a response. The backend relies heavily on Hasura. It contains all the database and it handles all operations including CRUD with GraphQL queries. Data is being requested and added to Hasura using GraohQL from the frontend application.

After a visual of the database diagram was done we started using Hasura. In total 4 schemas were introduced: Cars, Transaction, Review and Users. Each of them has tables containing data for the database. These tables and schemas were created manually using the Hasura interface, however some data was added using the available SQL script.  

We integrated AWS Cognito in tha application for sign in and sign up operations. Cognito is an user identity and data synchronization service that can be used in our app as a scalable service. We used this for documentation and best practices: https://docs.aws.amazon.com/cognito/latest/developerguide/multi-tenant-application-best-practices.html

Aws cognito comunicates with the application using Aws Lambda functions. After an user is registered a query is automatically made and the user's data is added to the database using Hasura. After a successful login AWS Cognito return a JTW Token used for security purposes. 

AWS S3 service is also integrated in the backend application which is used as document storage. For examples uploading car images or profile pictures of the users.

A mock design was made in figma for a general overview of the app: https://www.figma.com/file/omOWUf7ANlLmVCAiGI47YM/Rent-My-Car?node-id=0%3A1
