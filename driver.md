# Driver and Car Management.

We have been talking about `NodeJS` and `NoSQL` with `MongoDB`. It is now time to practice what we have learnt.

## Your Mission
We would like to create an app to manage our company. Our company has `n` amount of cars 
and `n` drivers so that we can tell what driver drives a certain car

## Your Task
### Step 1:
Think about this for a second, what fields and data types do we require in our models.

Company should have a :name, :logo, :address, :city, :telephone, :createdAt, :updatedAt

Company should also a have driver: hmm... we should add a :driver and embedded in driver, we need to know driver needs a
:name, :age, :image

Company should also have a car: for car i'd leave this to you to figure out what you need for this. 

> if you dont know what to do, we need to know the :name, :model, :year, :image

If Create a model for `Company`
    - The company should have: name, image(company logo), createdAt, updatedAt, drivers, cars
    - if our company has many drivers and many cars
    
*** Feel free to add as many fields as you see fit.

### Step 2:
 - Create folder called `company` 
 - Add an EJS file in your views called `new.ejs` 
 - Create a form in `new.ejs` to add data to your
  
### Step 3:
 - Modify your `Company` model
 - change :driver to :drivers and make it an array of objects
 - change also :car to :cars and also make it an array of object.


