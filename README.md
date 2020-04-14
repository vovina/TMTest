# TMTest
There are two main functions on this project:
   1. TrendMicroTestFunction. This is the main fuction which responsible for getting the Security Group names.
   2.  AuthFunction. This function authorize access to the TrendMicroAPI and in result the TrendMicroTestFunction
 
TrendMicroAPI is the created API in the AWS API Gateway.

For authorization, a user needs to send in the header the following token:
Authorization: allow or Authorization: deny
Please notice that an invalid token will result in a Null response.

**Build:**

Using the follosing command, applicaiton will be build. 

    sam build

The application can be invoked locally in a Docker image using the followin command. 

    sam local invoke "TrendMicroTestFunction"

For the deployment to AWS, the following command can be used:

    sam deploy --guided
The API URL will be generated after a successfull build such as this:

> *Key                 TrendMicroTestApi 
> Description         API Gateway endpoint URL for Prod stage for Trend Micro Test function 
> Value       > https://lyladuewvb.execute-api.ap-southeast-2.amazonaws.com/Prod/GetSecurityGroups/*

For a manual test, Postman can be used for sending a Get request to the generated URL with the follwoing HTTP header

    Authorization: allow

The response will be similar to this:

> [
>     "MySecurityGroup",
>     "default" 
>     ]

**End To End Testing:**

The end to end testing has been implemented using Newman.
Newman can be installd using the bellow command:

    npm install -g newman

After running the previous sam deploy --guided command, grab the base url and replace it in the EnvironmentVariables.json file.

the final test can be executed using the bellow command:

     newman run .\TrendTest.postman_collection.json -e .\EnvironmentVariables.json 

                               
  


