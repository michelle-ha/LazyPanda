![alt text](https://github.com/michelle-ha/LazyPanda/blob/master/app/assets/images/PngItem_2512217.png "Lazy Panda Logo")

# BoredPanda

[BoredPanda Link](https://lazy-panda.herokuapp.com/#/)

LazyPanda is a BoredPanda clone, which is a social media application that allows users to post and share anything ranging from somber news articles to entertaining, cute animal pictures. Rails was implemented for the backend, while React/Redux was utilized for the frontend.

![alt text](https://github.com/michelle-ha/LazyPanda/blob/master/app/assets/images/boredpanda%20screenshot.png "LazyPanda Screenshot")

# Technologies Used
* Technologies Used
* Ruby / Rails
* React.js
* AJAX
* JBuilder
* Redux
* JavaScript
* Webpack
* Node.js
* HTML5 / CSS3
* Amazon Web Service (S3)

## Features

### User creation

A modal is used for user login and registration. A demo user account is offered for viewers to experiment with the site's features without creating an account. 

![alt text](https://github.com/michelle-ha/LazyPanda/blob/master/app/assets/images/modal.png "Modal Screenshot")

### Creating Posts

Registered users are able to create their own posts in order to start up a new topic and share their insights. Only the author of the post is able to edit or delete the post. Pictures are able to be added and previewed in the post creation form.

![alt text](https://github.com/michelle-ha/LazyPanda/blob/master/app/assets/images/createPost.png "Create Post Screenshot")

In order for the "Add Post" button to only permit registered users to access the form page, a conditional was made in which the button action changed in regards to if the user was logged in or not. If the user was not, the login modal will appear on the screen. If the user was, they would be re-directed to another page. 

![alt text](https://github.com/michelle-ha/LazyPanda/blob/master/app/assets/images/code.png "Code Screenshot")

## Future Plans
* Be able to properly render sub-posts to a post's show page
* Allow users to comment on posts
* Allow users to vote on posts in order to move them higher up the page
