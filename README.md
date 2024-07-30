# SecureConnect

## Overview

SecureConnect is a specialised job search platform designed for security 
professionals. The platform allows job seekers to create profiles, search 
and apply for jobs, and manage their applications. Employers can post job 
listings, manage applications, and communicate with potential candidates.
Admins can oversee the platform, managing users and job postings to ensure 
appropriate content.

## Deployment and Setup

To run the SecureConnect application locally, follow these steps:

### 1. Clone the repository
```
git clone https://github.com/Wailahmed/sia-security.git
cd sia-security
```

### 2. Install packages

```
npm install
```
### 3. MongoDB Setup
You must setup MongoDB as accordance to the environment variables:
```
MONGODB_URI="<CONNECTION LINK>"
MONGODB_DB="<DATABASE NAME>"
MONGODB_COL_APPLICATIONS="applications"
MONGODB_COL_FEEDBACK="feedback"
MONGODB_COL_JOBS="jobs"
MONGODB_COL_NOTIFICATIONS="notifications"
MONGODB_COL_REPORTS="reports"
MONGODB_COL_USERS="users"
```


### 4. Running the Application Locally
This is a Next.JS application, a React Framework. To run this application locally:
```
npm run dev
```
After you can access the application through your web browser in `localhost:3000`.



## Online Hosted

The SecureConnect platform is hosted online using the AWS Amplify service and can be accessed by the following web address: <https://main.dzorpq0t28qqg.amplifyapp.com>


## Features

- User Authentication: Job seekers and employers can create accounts and log in.
- Job Search: Users can search for jobs based on title, location, and job type.
- Job Applications: Job seekers can apply for jobs, and employers can manage applications.
- Profile Management: Users can update their profiles with personal information and qualifications.
- Notifications: Users receive notifications for job applications and new job postings.


## Usage

- Job Seeker: Create an account, search for jobs, view job details, and apply for jobs.
- Employer: Create an account, post job listings, view applications, and communicate with job seekers.
- Admin: Manage users and job postings to ensure appropriate content on the platform.




## API Endpoints

| API Route                 | POST | GET | PUT | DELETE |
|:--------------------------|:-----|:----|:----|:-------|
| `/api/applications`       | No   | Yes | No  | No     |
| `/api/applications/[id]`  | No   | Yes | No  | Yes    |
| `/api/feedback`           | No   | Yes | No  | No     |
| `/api/feedback/[id]`      | No   | Yes | No  | Yes    |
| `/api/jobs`               | No   | Yes | No  | No     |
| `/api/jobs/[id]`          | No   | Yes | Yes | Yes    |
| `/api/notifications/`     | No   | Yes | No  | No     |
| `/api/notifications/[id]` | No   | Yes | No  | Yes    |
| `/api/reports`            | No   | Yes | No  | No     |
| `/api/reports/[id]`       | No   | Yes | No  | Yes    |
| `/api/users`              | Yes  | Yes | No  | No     |
| `/api/users/[id]`         | No   | Yes | Yes | Yes    |


## Application Structure


```
sia-security/
├── components
├── pages/
│   └── api
├── public
├── store
└── styles
```


## Technologies Used

- Frontend: React, Next.js (Serverless with Next.JS API Routes)
- Database: MongoDB
- Styling: CSS Modules
- Icons: Font Awesome



