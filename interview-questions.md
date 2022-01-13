# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: A key word that passes information from parent to child in one direction (read only); they act as  arguments. 

  Researched answer: Props are arguments passed into React components; consider function arguments in JavaScript and attributes in HTML; Props are also how you pass data from one component to another, as parameters, you will get an error if you try and change it's value. To send props into a component, use the same syntax as HTML attributes: The component receives the argument as a props object; passed to components via HTML attributes.

cite: w3 School, React Props, https://www.w3schools.com/react/react_props.asp. Accessed on 9 Jan 2022


2. What is a DOM event?

  Your answer: The act of a user interacting with a web browser via, click on a button, typing on the keyboard. An event can also happen by the browser.

  Researched answer:
 A DOM event is an enhancement of how JavaScript can be used to interact with the document, events are changes that occur in a document. These can be caused by the user by a click of a mouse, typing on the keyboard, and scrolling up/down. By the user may clicking on an element, this action will generate an event, or events can occur without the user interacting directly with a page element. For example, when the browser has completed loading the document, a DOM event is generated and can be monitored using JavaScript. By including event listeners in the document HTML and/or the JavaScript code, we can use DOM events to act as triggers that run JavaScript commands. Event listeners are methods that trigger a JavaScript function to run when a specified event occurs. There are a few ways to add these to the document or script.


3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming is a programming stule, where you design your code to function like objects, similarly modeled to how the real world functions.

  Researched answer:
  Object-oriented programming (OPP)is a programming paradigm based ont the concept of objects, which contains data, code, attibutes and methodes. A feature of objects is that an object's own procedures can access and often modify the data fields of itself (objects have a notion of this or self). The four principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism.

  cite: 
  MDN Web Docs
  freeCodeCamp


4. What is the difference between a Float and an Integer in Ruby?

  Your answer: An intergers are whole numbers. Float are considered, real exact numbers in Ruby, to include decimals. 

  Researched answer: An integer is simply a sequence of digits, e.g., 12, 100. Or in other words, numbers without decimal points are called Integers. 
  A float represents real numbers using the native architecture’s double- precision floating-point representation.


5. Ruby has an implicit return. What does that mean?

  Your answer: It returns the value of the last evaluated expression. 

  Researched answer: When return isn’t explicitly called within a method then Ruby returns the value of the last executed instruction in the method.


## Looking Ahead: Terms for Next Week

1. Instance Variable: 
A variable declared in a class, but outside of a meth or any code block. They hold value that must be reference by more than one method, consturctor or block, or essential parts of an object's state that must be present throughout the class.

2. PostgreSQL:
PostgreSQL: A realational database that is an advance version of SQL; used in advance object-relational datatbase management systems that provide an extenion to subset SQL. Used as a the primary data store or data warehouse for many web, mobile, geospatial, and analytics applications.

cite: PostgreSQL. “Re: What is PostgreSQL?, https://www.postgresql.org/about/ Accessed 9 Jan 2022 

3. Ruby on Rails: 
An open-source software that  contains web application framework (collection of code) built on the Ruby language. Also used for building apps on front and back end. Used by various well know companies, such as: GitHub, shopify, airbnb, and Square, just to name a few. 

cite:Jesus Castello, RubyGuide "What is Ruby on Rails & Why Is It Useful?", https://www.rubyguides.com/2018/10/what-is-ruby-on-rails/. Accessed 9 Jan 2022 

4. ORM: Object-Relational Mapping - a programming technique which desciptor(describes data) between object code and relational database; it uses that bottom up, top-down, and meet in the midde approach.
-gives the ability to write queries using the object-oriented language instead of SQL. 

-connects the rich objects of an application to tables in a relational database management system. Using ORM, the properties and relationships of the objects in an application can be easily stored and retrieved from a database without writing SQL statements directly and with less overall database access code.

RubyGuide, "What is Active Record", https://guides.rubyonrails.org/active_record_basics.html. Accessed 9 Jan 2022 


5. Active Record:
An active recorde is the M in Model–view–controller (MVC) which is the model - which is the layer of the system responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database. It is an implementation of the Active Record pattern which itself is a description of an Object Relational Mapping system. A basic understanding of relational database management systems (RDBMS) and structured query language (SQL) is helpful in order to fully understand Active Record. 

cite: RailsGuide, https://guides.rubyonrails.org/active_record_basics.html
