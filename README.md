# LANDAS E-commerce Application

A modern React-based e-commerce application built with TypeScript, Vite, and TailwindCSS. This application provides a complete shopping experience with responsive UI components, authentication, and product showcase features.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Implementation Decisions](#implementation-decisions)
- [Library Choices](#library-choices)
- [SPA Routing Configuration](#spa-routing-configuration)

## Installation

### Prerequisites

- Node.js (v18.x or higher recommended)
- Yarn or npm

### Setup

1. Clone the repository

```bash
git clone https://github.com/ammarbinshakir/landas-ecommerce.git
cd example
```

2. Install dependencies

```bash
yarn
# OR
npm install
```

## Development

To start the development server with hot-reload:

```bash
yarn dev
# OR
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Building for Production

To build the application for production:

```bash
yarn build
# OR
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build locally:

```bash
yarn preview
# OR
npm run preview
```

### SPA Routing for Production Deployment

For Single Page Applications (SPA) with client-side routing, you need to configure your server to redirect all requests to `index.html`. This allows the React Router to handle the routing on the client side.

#### For Nginx:

```nginx
location / {
  root /path/to/dist;
  try_files $uri $uri/ /index.html;
}
```

#### For Apache (.htaccess in dist/ folder):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### For static file servers like Vercel, Netlify, or Firebase:

These platforms typically have built-in settings for SPAs. Refer to their documentation for specific configuration options.

## Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── components/          # Reusable UI components
├── features/            # Feature-based modules
│   ├── auth/            # Authentication feature
│   │   ├── components/  # Auth-specific components
│   │   ├── hooks/       # Auth-specific hooks
│   │   └── utils/       # Auth-specific utilities
│   └── main/            # Main feature modules
├── pages/               # Page components
├── routes/              # Routing configuration
│   ├── Router.tsx       # Main router component
│   └── routes.ts        # Route definitions
└── shared/              # Shared utilities and components
    ├── components/      # Shared UI components
    │   ├── atoms/       # Smallest UI components
    │   ├── molecules/   # Combination of atoms
    │   └── organisms/   # Complex UI components
    ├── constants/       # Application constants
    ├── hooks/           # Custom React hooks
    ├── layouts/         # Layout components
    ├── stores/          # State management stores
    ├── types/           # TypeScript type definitions
    └── utils/           # Utility functions
```

## Implementation Decisions

### Component Architecture

The project follows an Atomic Design methodology, organizing components into:

- **Atoms**: Smallest building blocks (buttons, inputs, etc.)
- **Molecules**: Groups of atoms functioning together
- **Organisms**: Complex UI components composed of molecules and atoms
- **Templates**: Layout components that arrange organisms
- **Pages**: Complete screens with specific business logic

### Routing

- React Router v7 for declarative routing with support for nested routes
- Authentication-protected routes with redirection logic
- Clear route definition structure for maintainability

### Styling

- TailwindCSS for utility-first styling approach
- Component-based styling using className composition with tailwind-merge and clsx
- Responsive design patterns implemented throughout the application

## Library Choices

### Core Libraries

- **React 19**: Latest version of React with improved performance and new features
- **TypeScript**: For static typing, better developer experience, and code quality
- **Vite**: Modern build tool with faster compilation and better developer experience than webpack

### Routing

- **react-router-dom v7**: Declarative routing for React applications

### Styling

- **TailwindCSS v4**: Utility-first CSS framework
- **@tailwindcss/aspect-ratio**: For maintaining consistent aspect ratios
- **@tailwindcss/line-clamp**: For truncating text at specific line counts
- **clsx & tailwind-merge**: For conditional and conflict-free className composition

### HTTP Client

- **Axios**: Feature-rich HTTP client with interceptors, request/response transformation

### Development Tools

- **ESLint**: For code quality and consistency
- **TypeScript ESLint**: For TypeScript-specific linting rules

## SPA Routing Configuration

The application uses React Router v7 with a configuration that:

1. Separates authenticated and non-authenticated routes
2. Provides automatic redirects based on authentication status
3. Supports nested layouts for different sections of the application

The router setup enables a seamless user experience by handling all routes on the client side, preventing page reloads during navigation.
