# Archonnect Frontend
Building a React and Redux front-end application using the custom archonnect API service. bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This application uses Routing to traverse between a list of house plans and details of a houseplan when it is clicked.

# Live Demo

> TBD

![screenshot](public/screenshot.png)

## Built With
- React-redux
- Redux
- Node.js
- React-Create-App
- Archonnect API
- npm
- Heroku
- CSS
- ES6
- jest
- eslint
- stylelint

## Getting Started

### Prerequisites
  * Git
  * npm
  * Node.js
  * IDE (Intergrated Development Enviroment)
  * Web Browser (Chrome, Mozilla)

### Steps
- From the command line/terminal clone the repository

```
$ git clone https://github.com/Elbie-em/archonnect_mvp_front-end.git
```

**Available Scripts**

cd into the project directory, and you can run:

```
$ npm install

Installs all dependencies
```

```
$ npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
```

```
$ npm test

Runs all tests
```

## Deployment

Instructions from [Heroku Buildpack](https://github.com/mars/create-react-app-buildpack).

Generate a react app.
replace *$APP_NAME* with the name for your unique app.

```
npx create-react-app@3.x $APP_NAME
```
Create the heroku app.
replace *$APP_NAME* with the name for your unique app.

```
heroku create $APP_NAME --buildpack mars/create-react-app
```

Deploy.

```
git push heroku master
```
Visit the app's public URL in your browser.

```
heroku open
```

## Application features

- The user is able to sign up for the service.
- The application allows the user to view a list of houseplans up for bid.
- The user can view detailed information about a houseplan *view* .
- The user is able to add a plan to their favourites.
   
## Author

👤 **Elbie Moonga**

- GitHub: [@Elbie-Em](https://github.com/Elbie-em)
- Twitter: [ElbieEm](https://twitter.com/ElbieEm)
- LinkedIn: [elbie-moonga](https://www.linkedin.com/in/elbiemoonga/) 

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Elbie-em/archonnect_mvp_front-end/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](microverse.org)
- [Alexey Savitskiy on Behance](https://www.behance.net/gallery/37706679/Circle-(Landing-page-Dashboard-Mobile-App))
- [Kris Kuchinka - Codepen](https://codepen.io/kriskuchinka/pen/PqMejr)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 📝 License
