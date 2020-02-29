
# React-Assign-UserData-Display
Simple Front end React App which Search, Sort and display details of each user from API with Pagination and good animation. 


## Table of Content
* Description
* Technologies
* Setup
* Application design
* Status



## Description
Simple Front end React App which Search, Sort and display details with Pagination and good animation.It has two Veiws TableVeiw and Detail Veiw.

### Table Veiw
This is the landing Page of the App with the route "/", where there is a list of all the users in table.List is Paginated 5 rows per page. All the coloumns are Sortable in ascending and dscending order, there is a search bar on the right above table which give responsive search on first name. It filters all the user with the first name and display the filterd list in table.All Rows are clickable on clicking on the row it will take you to the Details Page.

### Details Veiw
when a user click on the any of the row in Table Veiw it will route to this veiw, here all the Details of the user(which is clicked) is shown.There is back button on the top right which again route you to the landing page.


## Technologies
* Node.js
* Reactjs
* react-router-dom(for routing)
* CSS3(for styling and animation)


## Setup

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app.

```cmd
npm install -g create-react-app
```
### Cloning and Running the Application in local
Clone the project into local.

Install all the npm packages. Go into the project folder and type the following command to install all npm packages. dont forget to add all dependencies.

```cmd
npm install
```
### In order to run the application Type the following command

```cmd
npm start
```
The Application Runs on localhost:3000

## Application design
### Containers
StateFull Files are kept in this folder.It containes TableVeiw,DetailVeiw and Pages.
#### Pages
This is the container for Pagination.
#### TableVeiw 
it contains two Main and TableHead files
#### Main 
This is the file in which data is fetched using fetch method and send to the table head file.
Sorting Logic is kept in this file.It has two children TableHead and Spinner(for better UI) 
#### TableHead
In this file it gets users data from parent file(Main) as a props, structure of the table coloumn is in this file, it has two childrens Pages and Users component . this divide user data into the comonents.
#### DetailVeiw
This is Detail Veiw Component where all the detail of selected user is displayed. In this component.It also have spinner for better UI.
### Components
All the Dumb or stateless Files are kept in this folder.It has Layout, Pages, Spinner, TableBody
#### Layout
This is only a Wrapper for the Routes.
#### Spinner
This is simple component with css  for Loader (UI).
#### Tablebody
This is for Table body , or all the list of users max five per rows.

## Status:
Application is Completed.
Below is the URL link of the Application.
https://ankit-pro01.github.io/React-App-UserDataDisplay/#/
