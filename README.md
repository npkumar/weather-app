## Weather App

### Usage

- A loading screen appears while fetching data from the OpenWeatherMap API
- Once loaded, you are presented with a dashboard where you can access weather for next 5 days by swiping or using the navigation arrows.
- Temperature units can be toggled to use Fahrenheit, Celsius or Kelvin.
- A bar chart below shows the temperature variations for a given day in 3 hour segements (total 8).
- Application is responsive, supports >= 375px device width
- Future improvement could be getting user location before making call a call to OpenWeatherMap API.
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Additional supporting libraries used [Apex Charts](https://apexcharts.com/) and [Swiper JS](https://swiperjs.com/)

| Loading Screen                                                                                                           | Dashboard                                                                                                                  |
|--------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| ![weather_loading](https://user-images.githubusercontent.com/53559161/88260661-c8741900-ccff-11ea-9509-f808b3c98e77.gif) | ![weather_dashboard](https://user-images.githubusercontent.com/53559161/88260656-c611bf00-ccff-11ea-881b-24e36885a816.gif) |


### Installation

In the project directory, you can run `yarn install` and then `yarn start` to run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing

In the project directory, you can run `yarn install` and then `yarn test`<br />
Launches the test runner in the interactive watch mode.


### Production build

In the project directory, you can run `yarn build` which builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

