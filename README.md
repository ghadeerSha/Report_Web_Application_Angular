# Report_Web_Application_Angular
Farmer Hoggett would like to create a web application that will allow the public to help catch and report his missing pigs.

Each Pig Report will have at least the following attributes (you may add others as you see fit):

- Reporting person’s info: a name + phone number
- Pig info: the breed (i.e., “Pot-bellied” or “unknown”), the Pid (i.e., 101). You may allow multiple reports with the same Pid; it will be the person who first reports it who will claim the prize.
- Location: contains a unique location name, longitude, and latitude of where the pig was caught. This is where Farmer Hoggett should go pick up the pig.
- Extra notes: contains some extra information to farmer Hoggett about where to find the pig (i.e., “under the drinking fountain outside B9200”)
- Time/Date: Contains the date and time of the created report.
- Status: when a report is first created, the status will be set to READY FOR PICKUP. Once farmer Hoggett retrieves the pig, he can set it to RETRIEVED (please see below).
 <img width="695" alt="WebAngular_report" src="https://github.com/ghadeerSha/Report_Web_Application_Angular/assets/167367841/4a662f7c-ffc0-4dfb-acc5-cc0281792265">

User Requirements:

Data Table

A data table of all pig reports should be displayed on the application's main page. 
- the user shall be able to sort the reports by Location, Reported by, or Time Reported.
  
- Buttons or links shall be provided to change the status and delete individual reports. If the delete or the change status button is clicked, the app will ask for confirmation along with a prompt for a password; the valid password is “OINK!!” (all-caps).

- If an invalid password is entered, the operation is disallowed.
  
  <img width="536" alt="WebAngular_password" src="https://github.com/ghadeerSha/Report_Web_Application_Angular/assets/167367841/264b88f7-a5b0-4f1f-96b2-445dc7827d01">

- Links shall be provided for each pig report to reveal the full information about the report. This can be a pop-up modal or a new page.
  <img width="401" alt="WebAngular_details" src="https://github.com/ghadeerSha/Report_Web_Application_Angular/assets/167367841/d7c31bf1-0e44-4dbe-8abe-c15e01d437d8">

The user shall have the ability to create a new pig report by clicking on the CREATE PIG REPORT button. When (and only when) the button is clicked, a pig report creation form shall be shown to the user. 

Map

- A map indicating all pig reports shall be shown using markers. 
- Clicking on an individual markers on the map shall show the number of reports at that location. 

  <img width="716" alt="WebAngular_maps" src="https://github.com/ghadeerSha/Report_Web_Application_Angular/assets/167367841/2c98abf0-9c10-423e-bb17-8817aece7e51">


Technical Requirements

The exact designs and workflows are totally up to you (but please be mindful of usability and creativity).
- You must use Angular as the framework for your application.
- Your application should give meaningful feedback on incorrect inputs or error situations. 
- Your application must have proper creativity and usability (i.e. it should be intuitive to use and learn) 
- You must use the data manager API to save your data.
- You must use the Leaflet maps API to display the pig reports.
