# About

This applications tracks the lists of  burgers that you want to eat.

# How to use

To use the application is very simple. Just follow the following steps and you are ready to go.

1. Enter the name of the burger you want to eat
2. Among the burges you want to eat, eat one of them
3. Update the list in applications by pressing the eat button on the corresponding burger
4. If you feel ashamed for eating a burger click on the x on list of burges you have eaten to delete it

# How it works

The applications runs using the RESTful API.

It uses the get method on load to retrieve the name of the burger and its eaten status to display on screen.

When entering a new burger,the application would use post to enter the burger into the database.

In updating and deleteing the burger, the put and delete methods respectively by using the corresponding id attached to the buttons.

All methods besides get would proceed to relod the page to show the chages currently made.


