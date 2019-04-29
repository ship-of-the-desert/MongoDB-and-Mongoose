# Driver and Car Management.
We have been talking about `NodeJS` and `NoSQL` with `MongoDB`. It is now time to practice what we have learnt.

Aceel solved this problem in project 2, she said she wants to keep track of all her drivers and cars `(FANSAAY!!)`. In this light, we are going to develop a software that allows companies register their drivers and cars. 

Our application will be called `Driver Management`

## Your Mission
Create an app to manage our software. A company can have `n` amount of cars 
and `n` drivers so that we can tell what driver drives a certain car and the condition of the car before and after.

## Your Task
### Step 1:

1. Create a folder `mkdir driver_management` and `cd driver_management`.
1. `npm init` and complete all necessary information
1. `touch server.js`
1. `mkdir views`
1. Install and add Express and mongoose to your app from `npm`
1. set up a basic nodejs server with mongoose
1. `nodemon server` to start server and see if it all runs fine
1. `mkdir models && cd models`
1. `touch company.js`
1. require mongoose in the `company.js`


### Step 2:
1. Lets think about this for a second, what fields and data types do we require to build our models.
- Company should have a :name, :logo, :address, :city, :telephone, :createdAt, :updatedAt and :whatever.you.see.fit.
    
- Company should also a have driver: hmm... we should add a :driver and embedded in driver, we need to know driver needs a
:name, :age, :image

- Company should also have a car: for car I'd leave this to you to figure out what you need for this. 

> if you dont know what to do, we need to know the :name, :model, :year, :image

### Set up Routes
Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you.

#### Restful Routes
|#|Action|URL|HTTP Verb|EJS view filename|mongoose method|
|:---:|:---:|:---:|:---:|:---:|:---:|
|1| Index | /companys/ | GET | index.ejs | Company.find()|
|2| Show |/company/:id| GET| show.ejs | Company.findById()|
|3| New | /companys/new | GET | new.ejs | none |
|4| Create | /companys/ | POS T| none | Company.create(req.body)|
|5| Edit |||||
|6| Update |||||
|7| Destroy ||||||


### Views
 - Create the following EJS files in your `views` folder: `new.ejs show.ejs index.ejs` 
 - Create a form in `new.ejs` to add data to your company collection
 
 > Remember to require your model in your server.js
  
### Step 3:
 - Lets modify our `company` model again.
 - In an ideal suituation a company should have many cars and many drivers
 - change :driver to :drivers and make it an array of objects
 - change also :car to :cars and also make it an array of object.


