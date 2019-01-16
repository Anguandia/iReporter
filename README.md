# iReporter

### INTRODUCTION

> This product is a demonstration model of the user interface for an online events logging and tracking application designed for the web browser client.
>
> The end-to-end application will provide a platform for any concerned persons to draw public and stakeholder attention to such incidences of public concern as corruption cases, in the product referred to as **Red Flag(S)** and calls to stake holder attention threats/occurrences that need mobilization for intervention like natural disasters, failing/wanting public infrastructure and others, collectively termed **intervention records** in this product.  
This user interface models the pages necessary to create the said records, manipulate, track, view and process them
>
> Additionally, it also provides interfaces for user account operations as signup, profile edit, and login for categories of users as standard and administrator
>
> The product, though a non functional prototype, simulates the intended actual feel the intended integrated piece, One can go ahead and explore the functions and operations to get an impression of the functioning of the will-be complete product

### FEATURES
> The front-end package features the following;
>
> A familiar feel across all pages with the same header at the top, a similar navigation bar beneath the header, a footer at the bottom and the main content in the middle with two columns for pages that in some way interact with the records and a single section for those that do not, like the signup, login and user account pages  
The entire page has a background image that shall be upgraded to animated images in the course of time.
>
> Pages that provide interfaces to single record vies, manipulations and creation display a map showing the location of occurrence of the record which map can conversely be used to extract the exact geolocation coordinates of the record if reporting from within.
>
> Other features include interfaces for:
  > - Uploading image(still and video), audio and text files of any format along with the record
  > - Full manipulation activities of creating, editing viewing making trackable and tracking, and deleting records.
  >> Record tracking is implemented by status updates from an administrator account and records' dashboards in the user/admin account for a summary of records by numbers in each of the four categories of status
  > - User account management through creating and editing profile and account particulars
  > - A home page where non registered users can still view a listing of all public/non-confidential records together with a map showing locations of the occurrences
  > - Preferring anonymity in reporting
    
### OPERATIONS AND FEATURES DESCRIPTION

#### HOME PAGE
  
  > ##### *Description*
  >
  > The default page accessed with the base URL. This page displays a summary list of all records in a wide left side subsection of the main content view with the locations' map adjacent in a right-side sibling subsection, [click here](https://anguandia.github.io/iReporter/) for to explore
  >
  > - It also comes with the \'universal\' navigation page providing links to the [Login](#login), [Signup](#signup) and [Report](#report) pages
  > - The report menu item is a shortcut for [creating](https://anguandia.github.io/iReporter/new_record.html) a new record and accepts new records from anonymous/non-registered users too. For an anonymous user however, the user menu items will all be inactive while for the logged-in user, all menu items are active
  >
  > ##### *Scope*
  >
  > This model can not authenticate users and actually has no user modules. Therefore, while the full suite application will bar accessing other items on the user menu when in the [create record page](https://anguandia.github.io/iReporter/new_record.html) with user support and authentication from the back-end, this demo will allow full access to the user menu items
  >
  > ##### *Features and Operations Exploration*
  >
  > Clicking on the menu links in will yield the related sub-menus or pages.
  >
  > ##### *Prospects*
  >
  > A later version will have a help link in the main navigation bar and no user menu when one navigates to the report page from the home page
    
#### SIGNUP
  
  > ##### *Description*
  >  
  > The signup page is simple but sufficient, providing a signup form with mandatory fields marked in red and basic input data validation click [here](https://anguandia.github.io/iReporter/signup.html) to see.
  >
  > ##### *Scope*
  > 
  > No simulations of an actual signup built
  > 
  > ##### *Prospects*
  > 
  > Signup experience simulation will be incorporated in the next version.
  > 
  > ##### *Features and Operations Exploration*
  > 
  > The only feature that can be tried out is validation of the mandatory fields, try submitting without filling in the fields marked as required or with a non email format input in any of the email field and see the result 

 #### LOGIN
  
   > ##### *Description*
   >
   > The [login](https://anguandia.github.io/iReporter/login.html) page is equally simple but sufficient, providing a login form which can take in either a username or email in combination with a password and a submit button that seeks the user login type as either admin or user
   >
   > ##### *Scope*
   >
   >Full login experience simulation is incorporated, providing action feedback for selection of login type and even a virtual login and redirect into a typical profile page of the user-type \'logged-in\'.
   >> Validation is built into the page but the experienced had to be sacrificed for the simulation of successful login and access to subsequent pages. An understanding of this trade-off can be understood by looking at a summary of the technical [implementation summary](#technologies-used)
   >> The current version however falls short of providing a password reset link and alternative login methods, ommitions from project planning
   >
   > ##### *Prospects*
   >
   > - Inclusion of social media login, a password reset link and another linking back to signup page for non existent users are the highest on the inclusion agenda
   > - The hover menu for login-type selection is only a demo to enable the user access other pages have a feel of the final product. It therefore shall not be present in a working version of this product, the user-type determination being transferred to the user support modules of the back-end
   >
   > ##### *Features and Operations Exploration*
   >
   > - The test user should navigate to the signup page from the signup menu item in the navigation bar on the [home page](#home-page)
   > - Test user should then hover over the submit button; a hover menu for user type-selection will be displayed on hover
   > - Select a type of user from the hover menu by ***only*** hovering and clicking on the type of choice. A hover menu will not respond to tab and enter keys, see [technical details](#technologies-used) for an understanding of this apparent anomaly
   
 #### USER PROFILE
 
   > ##### *Description*
   >
   > This is the page where a standard registered user is redirected on successful login. See [here](https://anguandia.github.io/iReporter/user_profile.html) for a view
   > - The page defaults to a summary list display of all records created by the particular user in the main content section on the left and a map with markers showing the locations occurrence of the record incidences  clicking on a particular record should display the record [details](#record-details)
   > - This summary records view provides a search field for inputting a record id for searching a record by its Id
   > - The records' list can also be sorted by any of the fields by clicking the field name (in the blue band at the very top of the records display table)
   > - Atop the records display is a brazen dashboard summarizing the records by numbers in each of the four states of processing; Draft, Under investigation, resolved and rejected with the figures in colors conventionally deemed to reflect the states  Clicking on any one of the dashboard display items should produce a sorted list of records in the particular state in the summary display below
   > - Sandwiched between the dashboard and universal navigation bar is the user menu bar with menu items that open different user action pages viz;
   >> - The edit record menu which loads a page with interfaces for [editing](#edit-record) existing record fields
   >>  - The create record item loads a page for [creating](#create-record) a new record
   >>  - The View all page which is where the current page defaults
   >>  - The account item is a link to the user account related [operations](#account-page) of profile and security management
   >  
   > ##### *Scope*
   >
   > - This version only goes as far as enabling searching and sorting of the records displayed in the main view section, selecting a given record from the list by clicking on it is not implemented in this version
   > - Filtering is only limited to by-Id for demo purposes
   > - Sorting is fully implemented
   >
   > ##### *Prospects*
   >
   > - Subsequent versions will incorporate both single and multiple record selection from the list display
   > - Searching by any field will be enabled in the next version
   > - A provision will be made to reverse the sorting order
   >
   > ##### *Features and Operations Exploration*
   >
   > - Login as admin [directions here](#login) for logging in
   > - Hover down to the main records display section and key in an existing Id from the list
   >>  You will see the the list being filtered out as you keep keying in the serial number if in list, else, all records will be filtered out if no match for number keyed in
   > - click on the heading \"record id\" to sort by id, or respective field name to sort by field
   > - You will see the records sorted by id or chosen field in ascending order
     
 #### RECORD DETAILS
 
   > ##### *Description*
   >
   > This is actually the record [edit page](https://anguandia.github.io/iReporter/user_record_view.html) and provides the following interfaces;
   > - A set of three buttons clearly labeled for deleting a record, editing contact adding location and editing the comment associated with the given record
   > - The given record is displayed in detail in the main content window and except for deleting the record, all editable fields are edited in place and a feedback message displayed in the space of the function buttons
   >
   > ##### *Scope*
   >
   > All the record altering operations are fully simulated future versions will probably factor in only test user feed back
   >
   > ##### *Features and Operations Exploration*
   >
   > Click each function button in turn and follow instructions to the end to see result
   >
   > If an edit function button, lookout for the target field for alteration in the detail display for entering new values and seeing changes as well as the very space with the function buttons for system response
     
 #### CREATE RECORD
   
   > ##### *Description*
   
   > - This page displays a self descriptive form for inputting the new record details in the main content window see [here](https://anguandia.github.io/iReporter/new_record.html) for exploration of features
   > - At the top of the form is a set of two radios to select the type of record being created so that the appropriate form will be rendered.  The red flag form has additional optional fields for capturing details of the parties involved in the act off corruption which is only rendered when the red flag record type is selected
   >> The extra field of parties involved provides for adding more parties
   > - A check box is also provided to opt for anonymity in reporting
   > - Deeper description can be added to the record by clicking on the detail button at the bottom of the form to display a text input field
   > - Similarly other optional files can be added
   > - A reset button clears all the data in the un-submitted form to tart anew
   >
   > ##### *Scope*
   > 
   > All operation simulations included
   >
   > ##### *Features and Operations Exploration*
   
 #### ACCOUNT PAGE
 
   > ##### *Description*
   >
   > This page features a set of four button interfaces for the respective functions of changing the user password, name and profile picture all in the main view window and a user profile summary in the adjacent right side section with provisions for a profile picture, username and email  Click [here](https://anguandia.github.io/iReporter/user_account.html) for a tour of the features
   >
   > ##### *Scope*
   >
   > - only change password operation has been simulated
   > - Same for all users
   >
   > ##### *Prospects*
   >
   > Subsequent versions will have a provision for editing user contact details as well. The profile section will also be upgraded to cater for user feedback and new developments
   >
   > ##### *Features and Operations Exploration*
   >
   > Click on the change password button and follow through to get a virtual experience of the product
   
 #### ADMIN PROFILE
 
   > Pretty similar to the [uer profile](#user-profile) except edit field limited to status
   >> The admin dashboard and view all work like the user counter parts except for all records in the system
   >
   > ##### *Scope*
   >
   > The status update function, just like all user edit functions is fully simulated
   >
   > ##### *Features and Operations Exploration*
   >
   > Similar to user edit function operations

### TECHNOLOGIES USED
>
> 1. HTML for the document structure
> 2. CSS for the document layout and looks
> 3. JAVA SCRIPT 
  > - For implementing interactive actions with page and greatly so, for simulating actual behavior of the different pages when in service
  > - For collecting reusable components across pages to eliminate repetition and allow external styling since html object tags, i-frames and html fragment includes are tricky in implementation

### ACKNOWLEDGEMENTS:

> A great deal of indebtedness to Andela Uganda for providing not only an opportunity to explore and exploit talent, but also the environment, resources and nurturing
>
> A lot of contribution and mentoring from the learning facilitators at the Andela Level-up program is plainly unequaled in the realization of this product to this stage, especially the patience and understanding the facilitators unceasingly exercised

### PRODUCT LINKS AND RELATED INFORMATION
> 1. Code repository: <https://github.com/Anguandia/iReporter> is a public repository. Contributions and comments will be appreciated
> 2. Link for hosting: <https://anguandia.github.io/iReporter/> is where the product is hosted.
This is not a paid service
> 3. Pivotal tracker: <https://www.pivotaltracker.com/n/projects/2232384> is the link containing the project plan and implementation details. This too is a public project and there fore not at any fee.
> 4. Licencing: GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
