Use Case: Instead of manually filling out the resume, we automate the process. This allows authors to easily apply for jobs.

Technology ->
FrontEnd: React.js
Backend: Django or Node.js or Flask
Database: MongoDB
Pages on the Website
Homepage (Signup, Login, Description)

1.1 Create a Signup page (form) and login page.
Dashboard

2.1 Search Jobs Title, List the jobs.
2.2 List based on preference.
2.3 Apply Button.
Job Apply

3.1 Upload the resume and crawl it.
3.2 Make a prompt to check the details.
3.3 Submit Confirmation.

Admin Login Page

4.1 Dashboard: Total Open jobs, Closed Jobs, Total Companies.
4.2 CRUD a Job.
4.3 Email Notification for job approval status.
4.4 Track the applications and update the user via an email.
Future Upliftment
Chatbot for application filling.
Model

Collections: admin and user

Admin:

1.1 Jobs:
Job ID
Description
Company name
Title
Application Valid Date
Experience Level
Location
Employee Count
1.2 Admin Login:
Username
Password
1.3 Jobs Applied: List the people who have applied to that Company Specific Job.
1.4 Notification Card: Toast.

User:

2.1 User Signup:
Name
Email
Password
Confirm Password
Salutation
Gender
Phone Number
Current Position
2.2 Login:
Username
Password
Remember
Forgot Password
Signup
Home Page

Status No Login:

Nav Bar: Job portal, Jobs, Companies, Search (Filters), Alerts, Log in.
Page:
Part 1: Statistics: Slider, Total available Jobs, Companies Available, Placed Status.
Part 2: Companies logos (6 items).
Part 3: Footer.
Post Login:

Nav Bar: Job portal, Jobs, Companies, Search (Filters), Alerts, Logged-in Name and Update, Sign out.
Page:
Part 1: Statistics: Slider, Total available Jobs, Companies Available, Placed Status.
Part 2: Companies logos (6 items).
Part 3: Footer.
Job Search Page
Jobs: List All the jobs, Apply Button.
A new page named upload resume.
Upload Resume:
Upload Resume Choose File
Entries Should be made, namely:
Projects
Education
Experience
Technical Skills
Certifications
Review and Submit, Alert.
Companies Page
Companies: List all the companies.
Search
Filters: Title, Company, Experience.
Loop and print.