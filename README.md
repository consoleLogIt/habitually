
# See in Action
[click me](https://habitualli.web.app/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Directory Structure`

 
         |-- App.css   
         |-- App.js
         |-- index.css
         |-- index.js                             # app entry point
         |-- store.js                             # find create-store here
         |-- actions                              # find all actions inside this
                  |-- creators.js                    # find all action creators here
                  |-- types.js                       # find all action types here
         |-- Components
                  |-- index.js                       # import and export all components from here 
                  |-- dailyView                      # for displaying habits in daily view 
                           |-- DailyView.jsx
                  |-- header                         # for displaying header of the app
                           |-- HomeHeader.jsx
                  |-- homeView                       # container for daily or week view
                           |-- HomeView.jsx
                  |-- modal                          # pop-up for adding habits
                           |-- AddHabbit.jsx
                  |-- sidebar                        # container for habits
                           |-- Sidebar.jsx  
                           |-- sidebar.module.css
                           |-- TaskList.jsx
                  |-- weeklyView                     # for displaying habits in week view
                           |-- WeeklyView.jsx
                  |-- reducers                       # find all reducers logic here
                           |-- dailyReducer.js       # reducer logic for daily view
                           |-- index.js              # find combine reducer here  
                           |-- weeklyReducer.js      # reducer logic for week view
