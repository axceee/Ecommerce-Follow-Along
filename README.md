# E-commerce Follow-Along Project

## Milestone 4 Progress

### Learning Goals
- Created a User Model to define the structure of user data in the database.
- Implemented a User Controller to manage user-related operations.
- Configured Multer to handle file uploads, allowing users to upload profile images.

### Steps Completed
1. Defined the user schema in `backend/models/user.models.js`.
2. Implemented user-related operations in `backend/controllers/user.controllers.js`.
3. Configured Multer for file uploads in `backend/config/multer.js`.

### Next Steps
- Continue to build out more advanced features for the app.
- Reach out to the mentor for any questions or guidance needed.

### Backend Setup
- Structured backend folders for routes, controllers, models, and middleware.
- Initialized and configured a Node.js server using Express.
- Integrated MongoDB for efficient data storage.
- Implemented basic error handling to ensure the server runs smoothly.

### How to Run
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in the `backend` directory with the following content:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

3. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
- Ensure the frontend is set up with Tailwind CSS.

### How to Run
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Additional Notes
- Ensure the repository is publicly accessible.
- Push the code to the same GitHub repository from the previous milestones.
- Share the repository link in the submission area.