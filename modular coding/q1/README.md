# Modular JavaScript Application

A complete modular JavaScript application demonstrating ES6 modules, authentication, and API integration.

## Features

- **ES6 Modules**: Component-based architecture using import/export
- **Authentication System**: Signup and login with localStorage
- **Protected Routes**: Access control for authenticated users
- **API Integration**: Fetches and displays todos from JSONPlaceholder API
- **Responsive Design**: Mobile-friendly interface with gradient styling

## Project Structure

```
q1/
├── index.html              # Home page
├── signup.html             # User registration page
├── login.html              # User login page
├── todos.html              # Protected todos page
├── components/
│   ├── navbar.js           # Reusable navbar component
│   └── footer.js           # Reusable footer component
├── modules/
│   └── displayTodos.js     # Todo rendering module
├── scripts/
│   ├── signup.js           # Signup logic
│   ├── login.js            # Login logic
│   └── todos.js            # Todos page logic
└── styles/
    └── main.css            # Global styles
```

## Setup & Usage

1. **Start a Local Server** (required for ES6 modules):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server -p 8000
   
   # Using VS Code Live Server extension
   Right-click index.html > Open with Live Server
   ```

2. **Access the Application**:
   - Open browser to `http://localhost:8000`

3. **User Flow**:
   - Visit home page → Click "Get Started"
   - Create account on signup page
   - Login with credentials
   - View todos fetched from API
   - Logout to return to home

## Components

### navbar.js
- Exports `createNavbar()` function
- Conditional rendering based on login state
- Shows Home/Todos/Logout when logged in
- Shows Home/Signup/Login when logged out
- Handles logout and navigation

### footer.js
- Exports `createFooter()` function
- Displays copyright with dynamic year
- Includes footer navigation links

### displayTodos.js
- Exports `displayTodos(data)` function
- Renders todo cards in grid layout
- Shows status badges (Complete/Pending)
- Handles empty state
- Applies completed styling

## Scripts

### signup.js
- Handles user registration
- Validates password confirmation
- Checks for duplicate emails
- Stores users in localStorage
- Redirects to login on success

### login.js
- Handles user authentication
- Validates credentials against localStorage
- Sets currentUser session
- Redirects to todos page on success

### todos.js
- Protects route (redirects if not logged in)
- Fetches first 20 todos from API
- Uses displayTodos module for rendering
- Shows loading state

## LocalStorage Structure

### users
```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
]
```

### currentUser
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## API

- **Endpoint**: `https://jsonplaceholder.typicode.com/todos`
- **Method**: GET
- **Usage**: Fetches todos, displays first 20

## Styling

- Gradient purple theme (#667eea to #764ba2)
- Card-based layout with hover effects
- Responsive grid system
- Form styling with validation states
- Status badges for todo completion
- Mobile-responsive design

## Browser Compatibility

- Chrome 61+
- Firefox 60+
- Safari 10.1+
- Edge 16+

ES6 modules require modern browsers or a local server (not file:// protocol).

## Key Concepts Demonstrated

1. **ES6 Modules**: Import/export for code organization
2. **Component Reusability**: Shared navbar/footer across pages
3. **Separation of Concerns**: Separate files for logic, presentation, styling
4. **Async/Await**: For API calls
5. **LocalStorage**: For user data and session management
6. **Protected Routes**: Client-side route protection
7. **Form Validation**: Password matching, email validation
8. **Dynamic Rendering**: Conditional UI based on auth state
9. **Fetch API**: For external data retrieval
10. **Event Handling**: Form submissions, logout clicks

## Notes

- Passwords stored in plain text (not production-ready)
- No backend validation (client-side only)
- Session persists until logout
- Requires local server for module imports
