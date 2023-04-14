# React-Native-Form

This is a simple Contact Us form created with React Native. 

The form takes input from 4 fields: Name, Mobile Number, Email, and Message. When the user clicks the submit button a mail is sent to info@redpositive.in that contains all the inputted information.

## Method

The form component is created in the `ContactUs.js` file. In this file input is taken using `TextInput` and the data is set to appropriate variables using `useState()` and set functions. The `handleSubmit` function validates the input data for each field. It checks if name contains only letters, phone number is 10 numbers, and if email is in a valid format. 

`react-native-email` is used to send the `emailBody` (that consists of the entered details) to the email address.

## Run the application

 - Download the zip file
 - Extract the zip and navigate to the root directory in your terminal
 - run `npm install` to install the relevant node modules
 - run the application using `npx expo start`
 - Note: The above command uses `expo` to run the app. You can find out more about expo here: https://expo.dev/client



