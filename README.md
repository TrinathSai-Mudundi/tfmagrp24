Significant Description of Local Findings App:

Local Findings -  Main goal is to simplify the process of finding local services such as local attractions, hospitals and stores. Many local people don’t know about the nearby points of interest or critical services. This app helps to connect users with best local attractions, hospitals and stores, making it easy for them to access and explore what’s available around them

in terminal in order to start the app use "npm start" and after it asks for operating system choose ios and the output will be displayed in simulator

The code uses React Navigation to set up the navigation stack, with each screen component imported and registered with the navigator.

Now, let's ensure each screen receives the necessary data. Using route.params in the screen components (Attractions, Business, Hospitals, Restaurants), data is passed after the navigation setup. Then the data which is in the given database is uploaded. 

With this setup, when the app starts, it will display the Home screen. From there, users can navigate to other screens like Attractions, Businesses, Hospitals, and Restaurants using buttons or gestures, and each screen will display the relevant information based on the selected city or search query.

When the user chooses a specific option from the displayed options, then it will redirect to the Google Maps page where the user can find the details of distance, directions, and other options. 

This Local Findings App will ensure the user a feasibility in navigating the screens, data passings, and UI rendering work.

The code and Output Screenshots

<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/2dd3882a-6a88-46b5-86b0-a76876293295">

This is the home screen of Local findings app where users can search their required city in two ways. The first one is by entering the city name in the search bar and then choose. The other one is by selecting the particular city in the “Select the Cities” where all the cities are displayed.


<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/5c3e1141-6123-4b92-b115-4d4f072ea760">

This is the screen where a user selects the first option i.e., by entering the city name in the search bar and then chooses the city.  We can view all the city names in the list display.

<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/12096b22-4e13-4a55-a072-1fe792d513d0">

Then the home screen navigates to this screen where the user can view the City short name on the right side of the search screen. All the subcomponents such as attractions, hospitals, businesses, and restaurants are displayed below in button format. Also, the main attraction of the selected city is displayed at the bottom of the page.

<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/9835be48-5fce-47f5-90ec-407af78e2b7d">

This is the screen where a user can view the list of screens, it can either be attractions or hospitals or businesses or restaurants. In the displayed screen above, the attractions of the city [ example chosen city is New York] are shown. It works the same for all the screens [ The code works same for all the subcomponents].

<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/2ddecf28-aa09-478a-90d0-9fe6ce7935a2">

This is the screen where when a user chooses a particular choice from the given options i.e., the screen then navigates to the google maps page where guidance such as directions, start, save, etc are provided.

<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/ee0e30c3-742b-4701-8ef2-fec95cb38bcd">

When the user chooses to navigate back and then choose another city, the user needs to remove the city. So user should choose the remove option which is shown in the above screenshot.

<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/ca20ddcf-6c68-4e59-a315-684bb25232c1">

This is the screen when the user chooses the second option to select the city where all the city names are displayed. The user has the feasibility to choose the city of their choice from the given options.


<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/452378f0-54a3-40d8-95df-17e2da852523">

After selecting the city of their choice [ For example: Cincinnati ], all the subcomponent screens are displayed and the main attraction of the city is displayed at the bottom of the page which is highlighted.


<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/f1629c97-2e65-48b3-a5c1-a228acc0ca46">

This screen is displayed when the user chooses the particular subcomponent screen [ the user here chooses the hospitals screen]. List of all the chosen subcomponent screen are shown.


<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/4a871743-3034-49a8-b6bf-becdb603d4ea">

The screen then navigated to the google maps page where the options such as directions, start, save, and share are shown. The user still has further feasibility to choose their choice.

<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/6f5edab7-1b44-45f9-9175-834d880f7c93">

When the user navigates back, and the user is in the subcomponent screen [ the user here chooses the hospitals screen of Cincinnati city], additionally the user has the option to choose the selected place of that particular city by entering the place of their choice [ the  user here chooses the Good Samaritan Hospital]


<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/8715597d-94cf-41cf-9d46-3c71b82ab505">

This is the screen when a user navigates back to the subcomponent screen and chooses the restaurants screen. All the restaurants of user chosen city are displayed here. The user can further choose that option and it will redirect to the google maps page where all the options can be visible.

<img width="500" alt="image" src="https://github.com/tfmagroup24/tfmagrp24/assets/167700528/ea5b20f2-33ed-4e1a-a75a-b8e3c305cf6d">

This screen is displayed when the user again navigates back and chooses the Businesses option. All the list of options of chosen subcomponent screen [i.e., the user can chooses businesses ] are displayed here. The user can further choose that particular option where it it will again navigate to google maps page.






https://github.com/tfmagroup24/tfmagrp24/assets/167700528/a64a2af0-ec5b-4fdd-a8e6-87a55dab3695


























