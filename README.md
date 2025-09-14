# User Management System - Frontend

A modern, responsive user management application built with Next.js, featuring comprehensive CRUD operations, advanced filtering, pagination, and a beautiful UI.

## ⚙️ Prerequisites

Before running this application, make sure you have:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Backend API** running (see backend README for setup)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sewwwandifernando/User-Management-App-FE.git
cd user-management-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Rename the provided .env.examplee file to .env

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001

```

### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🚀 Features

### Core Features
- **User Registration**: Add new users with comprehensive form validation
- **User Listing**: View all users with responsive table/card layouts
- **User Editing**: Update existing user information
- **User Deletion**: Remove users with confirmation dialogs
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Advanced Features
- **Global Search**: Search across multiple user fields simultaneously
- **Advanced Filtering**: Filter by name, email, country, and date ranges
- **Smart Pagination**: Configurable items per page with smooth navigation
- **Sorting**: Sort by any column with ascending/descending options
- **Validation**: Client-side validation with instant feedback
- **Loading States**: Skeleton loaders and progress indicators
- **Error Handling**: Comprehensive error messages and retry mechanisms

### UI/UX Features
- **Modern Design**: Clean, professional interface using shadcn/ui components
- **Dark Mode Support**: Built-in theme switching capabilities
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Animations**: Smooth transitions and micro-interactions
- **Toast Notifications**: Success and error feedback
- **Breadcrumb Navigation**: Clear navigation hierarchy

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.5.3** - React framework with App Router

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
frontend/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.js                # Root layout component
│   ├── page.js                  # Home page (redirects to /users)
│   ├── users/                   # Users module
│   │   ├── page.js             # Users listing page
│   │   ├── new/                # Add new user
│   │   │   └── page.js
│   │   └── [id]/               # Dynamic user routes
│   │       └── edit/
│   │           └── page.js     # Edit user page
│   └── test-api/               # API testing page (development)
│       └── page.js
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   ├── table.jsx
│   │   └── ...
│   ├── Layout/                  # Layout components
│   ├── PaginationControls.js   # Pagination component
│   ├── SearchFilters.js        # Advanced search and filtering
│   ├── UserForm.js             # User creation/editing form
│   └── UserTable.js            # Users data table
├── lib/                         # Utility libraries
│   ├── api.js                  # API layer with error handling
│   └── utils.js                # Utility functions
├── public/                      # Static assets
│   ├── next.svg
│   ├── vercel.svg
│   └── ...
├── package.json                 # Dependencies and scripts
├── next.config.mjs             # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── components.json             # shadcn/ui configuration
└── jsconfig.json              # JavaScript configuration
```

## 📋 API Integration

The frontend communicates with the backend through a RESTful API. The API layer (`lib/api.js`) provides:

### API Functions
- `getUsers(filters, pagination)` - Fetch users with filtering and pagination
- `getUserById(id)` - Get user by ID
- `createUser(userData)` - Create new user
- `updateUser(id, userData)` - Update existing user
- `deleteUser(id)` - Delete user

### API Configuration
- **Base URL**: Configurable via `NEXT_PUBLIC_API_URL`
- **Error Handling**: Automatic error parsing and user-friendly messages
- **Request/Response**: JSON format with standardized error responses

## 🎨 UI Components

### Core Components

#### UserForm
- **Purpose**: Handle user creation and editing
- **Features**: Real-time validation, date picker, error handling

#### UserTable
- **Purpose**: Display users in responsive table/card format
- **Features**: Sorting, mobile cards, delete confirmation

#### SearchFilters
- **Purpose**: Advanced search and filtering interface
- **Features**: Global search, field filters, date ranges

#### PaginationControls
- **Purpose**: Navigate through paginated data
- **Features**: Page numbers, items per page, result counts

### Form Validation

The application includes comprehensive validation:

#### Client-side Validation
- **Name**: 2-50 characters, letters and spaces only
- **Email**: Valid email format, uniqueness checked
- **Mobile**: 10-15 characters, international format supported
- **Birthday**: Cannot be future date, reasonable age limits
- **About You**: 10-250 characters minimum
- **Country**: 2-20 characters, letters and spaces only

#### Server-side Validation
- Backend validation mirrors client-side rules
- Database constraints for email uniqueness
- Sanitization of input data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

### Coding Standards
- Use ESLint configuration
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


