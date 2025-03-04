# Generic E-Commerce Company

## Milestone 6

### Learning Goals 🎯
- Implemented secure password encryption for user data
- Set up complete user data storage in the database

### Password Encryption Implementation
- Integrated bcrypt for secure password hashing
- Added pre-save middleware to automatically hash passwords
- Implemented password comparison method for future login functionality
- Followed security best practices for password storage

### Database Enhancements
- Added timestamps to track user creation and updates
- Ensured email uniqueness in the database
- Implemented secure password storage using bcrypt with salt rounds
- Maintained support for profile image storage

### Technical Details
- Used bcrypt for password hashing with 10 salt rounds
- Added mongoose middleware for automatic password encryption
- Implemented comparePassword method for future authentication
- Added timestamps for better user data tracking

## Milestone 5

### Learning Goals
- Create the frontend UI for users to register by filling out their details.
- Ensure that user inputs (like email and password) are properly validated before they’re submitted.

### Sign-Up Page
The Sign-Up page allows users to enter their details to create an account. This page includes fields for:
- Name
- Email
- Password

### Form Validation
Form validation ensures that the information users provide is correct and in the right format. The implemented validations include:
- Name: Required field
- Email: Must be a valid email format using regex validation
- Password: Minimum 6 characters
- Confirm Password: Must match the password field

### Features Implemented
- React state management using useState hook
- Real-time form validation with error messages
- Visual feedback for invalid fields using Tailwind CSS
- Network request handling with proper error management
- Responsive design that works on all device sizes

### Steps Completed
1. Created the Sign-Up page with HTML and Tailwind CSS.
2. Added form validation to ensure users input valid data.
3. Updated the routing to include the Sign-Up page.
4. Styled all pages using Tailwind CSS with animations.

### Submission Guidelines
- Pushed the code to the GitHub repository.
- Updated the README file with a new section summarizing the progress for Milestone 5.