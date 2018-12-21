# iReporter

INTRODUCTION
This product is the user interface design for an online reporting application. The reports are of two types; redflags and intervention records.

This user interface models the pages necessary to create the said records, manipulate, track, view and process them

Additionally, it also provides interfaces for user management as signup, account edit, and login for categories of users as standard and administrator

The product is a prototype and functionalities are simulated

FEATURES
The front-end package features the following;
A familiar feel across all pages with the same header at the top, a similar navigation barbeneath the header, a footer at the bottom and the main content in two panes in the middle

The entire page has a background image that shall be upgraded to animated images in the course of time.

For the user profile pages, the main content on the left displays the records listing and relevant operations menu while the right-side pane shows a map of the location of the event. This page also boasts aconspicous dashboard showing a summary of records by numbers of each of 3 statuses as Draft, Rejected or Resolved in colors loosely associated with the statuses
The action menu provides interfaces for user account management, view of all(permitted) records, detailed view of a particular record interfaces for manipulating and processing records; -- create, edit, and delete record for the user profile page and update status for the admin profile page
The main records view is a table searchable by record id*(other fields soon to be included for search) and sortable by status, id, lacation and owner(in the admin view)

The account page provides a button for password change and the subsequent password change form takes in the old, new and a confirmation of the new passwords. Data validation is incorporated

The individual order view page displays basic order details in the main page and a detailed description on the click of a details button.
it also provides options for editing the reporter contact, adding geolocation coordinates and deleting the record in the standard user view while a status update menu in the admin view

The login page validates all inputfieldds and provides a submenu for admin and standard user login redirecting to the respective profile pages when login is successful

The new records page provides a form for input of basic record detailsand an extra input field on click of a button for detailed description
It also provides options to select the type of report checking a radion and extra input fields for person/institution identity in raising a red flag.
The user is presented wth a checkbox to choose if to report anonymously.
Further down the form is a button for uploading any files with the report and a reset button to clear input yet to be submitted

Unregistered users can still view a summary of public records by navigating to the records page fromthe main navigation bar*(feature comming soon)

TECHNOLOGIES USED
1. HTML for the document structure
2. CSS for the document layout and looks
3. JAVASCRIPT forimplementing interactive actions with page and greatly so, for simulating actual behaviour of the different pages when in service

ACKNOWLEDGEMENTS:
A great deal of indebtedness to Andela uganda for providing not only an opportunity to explore and exploit talent, but also the environment, resources and narturing

A lot of contribution and mentoring from the learning facilaitators at the Andela Levelup program is plainly unequaled in the realization of this product to this stage, especially the patience and understanding the facilitators unceasingly exercised

PRODUCT LINKS AND RELATED INFORMATION
1. Code repository: https://github.com/Anguandia/iReporter is a bublic repository. Contributions and comments will be appreciated
2. Link for hosting: https://anguandia.github.io/iReporter/ is where the product is hosted.
This is not a paid service
3. Pivotal tracker: https://www.pivotaltracker.com/n/projects/2232384 is the link containing the project plan and implementation details. This too is a public project and there fore not at any fee.
4. Licencing: GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
