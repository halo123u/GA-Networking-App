# GA-Networking

[GA Networking](https://vast-temple-53081.herokuapp.com/)

## Technologies Used to Build GA Networking

For our app, we used Express to handle back-end functionality and React to handle front-end functionality. We used PostGreSQL to create our databases and the Google Material Design framework for our CSS. We also incorporated the Meetup API for our Events page.

## General Approach To Building The App

When we first had the idea for this app, we wanted to build a dating app for GA students, both because we thought it would be fun but also because the challenge of building even a basic dating app excited us. However, we spoke to some UX Design students about our app in the beginning stages and they seemed to struggle with the purpose of our app. They suggested we pivot and repurpose our app as a networking tool for GA students who may not get the chance to interact with others outside of their own cohorts. We figured we would not have to change much of what we were planning to implement in terms of basic components, and it allowed us to avoid any potentially thorny social issues that had come up initially.

Once that decision to pivot was made, we set about getting to work on building the app by splitting the group so that two of us would build everything on the backend while the other two would build the React components on the front end. Since the Express portion of the app was mostly completed within the first couple days of building the app, all four of us began to work on the front end while each of us focusing on specific components. We started by working everything associated with authentication (Home page, login and register pages), the user profiles and messaging components. We then moved to the feed and events components. Again, we split duties here, with a couple of us working on functionality while the others worked on styling. When someone had an issue, the others in the group would gladly help out if they could. Workflow throughout the project was fairly seamless, with the only conflicts being very minor and easy to solve.

## Installation Instructions for Necessary Dependencies

Navigate to the main directory of the app (i.e. outside the `client` folder) in your terminal, type `npm install --save`, then type in the names of the following NPM packages exactly as written (alphabetical order not necessary):

    axios 
    bcryptjs
    body-parser
    cookie-parser
    dotenv
    express
    express-session
    isomorphic-fetch
    morgan
    passport
    passport-local
    pg-promise

Navigate to the app's `client` folder, where you will install the dependencies for the React front-end of the app. In the `client` folder, type `yarn add`, then type the names of the following dependencies, exactly as written just like with the Express dependencies above:

    axios
    react-router-dom

Some dependencies are already present in the initialized React app, but the above two dependencies will need to be installed separately.

## App User Stories

Our goal for this app is for General Assembly students, teachers, and alumni to have their own localized networking tool so that they can network or collaborate with one another. As students currently enrolled in an Immersive program, our group members realized that due the intense nature of the course, we have minimal interaction with other GA people outside of people directly associated with our cohort. But if we wanted to meet people taking other courses, there isn't really a quick and convenient way to do so. 

With this app, users will be able to link directly with other users who are affiliated with GA and reach out to them in order to expand their network and collaborate. Users will also be able to find events close to GA's campus that, while not directly affiliated with the school, provides a handy guide to other potential networking opportunities thanks to the integration of the Meetup API.

While mixers set up by staff are fine and usually involve free food (always a bonus), they are still awkward experiences because it feels like students are being forced to interact with strangers. With our app, users can choose to put as much effort into reaching out to other students, teachers, or alumni as they feel comfortable with, thereby reducing that awkwardness from the mixers and giving people more control over a process that is uncomfortable for many.

## [Final Wireframes](./'Project 3 Final Wireframes')

## [ERD](./public/GANetworkingERD.png)

## Unsolved Problems & Hurdles

As described above, one of the first and most important hurdles we had to overcome was what we wanted our app to be. We had to change the entire purpose of our app on a dime, which was scary for us but ultimately I feel like we pulled through.

One frustrating problem that we had was with our events data. When we made the call to the Meetup API, we wanted to show a description for each event which would inform the user what that event was about. However, when it rendered, it would have html tags in the body. We tried using `regular expression` to remove them, but it didn't work, so we ultimately just decided to remove it and direct users to get more info from the event's page on Meetup, which has the description anyway.

While messaging works in the sense that you can send and receive them, it does so in a very primitive fashion, and when a message is deleted, it's deleted from both users. We looked at using Firebase for messaging, but it just didn't line up with everything else in our app, so we weren't able to fit realtime messaging in with everything else we were working on.