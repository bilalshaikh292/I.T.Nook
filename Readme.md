# I.T. Nook - Computer Solutions

Welcome to **I.T. Nook**, a one-stop solution for all your IT and computer repair needs. This project is a comprehensive platform designed to assist users with computer repair services, troubleshooting, and much more. With a user-friendly interface and efficient backend, the platform ensures seamless service delivery and excellent user experience.

---

## 🌟 Features

- **Computer Repair Services**: Quick and reliable solutions for hardware and software issues.
- **Booking System**: Schedule repair services online with ease.
- **Dynamic Search**: Search and filter solutions for specific IT problems.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Tech Blog**: Informative posts and guides for tech enthusiasts.
- **Admin Dashboard**: Manage service requests, track progress, and analyze performance.

---

## 🚀 Live Demo

You can view the project live at:  
[**I.T. Nook - Computer Solutions**](https://i-t-nook-computer-solution.vercel.app/)

---

## 🛠️ Technologies Used

### Frontend:
- **React.js**: For building a dynamic and responsive user interface.
- **CSS**: For custom styling and layout.

### Backend:
- **Node.js & Express.js**: Server-side logic and API handling.
- **MongoDB**: Database for storing user information, service requests, and logs.

### Other Tools:
- **Git**: Version control system.
- **Vercel**: Deployment for seamless hosting.

---



# This IS Specificaly for VRV Security

# Authentication, Authorization, and Role-Based Access Control (RBAC) in I.T. Nook

The **I.T. Nook** project employs robust mechanisms for authentication, authorization, and role-based access control (RBAC) to ensure data security, proper access management, and seamless user experiences. Below is an overview of how these components are implemented.

---

## 🔐 **Authentication**

Authentication verifies the identity of users accessing the platform. The implementation uses:

1. **JWT (JSON Web Tokens)**:
   - Users log in with their credentials (e.g., email and password).
   - Upon successful authentication, a **JWT token** is generated and sent to the user.
   - The token contains encoded user information (e.g., user ID) and an expiration time.


2. **Session Management**:
   - Tokens are validated with each request to ensure session integrity.
   - Expired or invalid tokens require the user to re-authenticate.

---

## 🛂 **Authorization**

Authorization ensures users have access only to the resources and actions permitted to them. The platform employs:

1. **Token Validation**:
   - The JWT token is verified for authenticity and expiry.
   - Invalid tokens or users without tokens are denied access.

2. **Middleware for Protected Routes**:
    - A dedicated middleware is implemented to validate each admin request by querying the database to confirm if the user holds an admin role. If the user is not an admin, the middleware blocks the request and prevents further processing, ensuring secure access to administrative functionalities.
   - If a token is missing or invalid, the request is blocked.
---
# Role-Based Access Control (RBAC) in I.T. Nook

The **I.T. Nook** project incorporates a simple yet effective **Role-Based Access Control (RBAC)** mechanism to differentiate between two user roles: 

1. **Admin**
2. **Normal Users**

RBAC is implemented using an **`isAdmin`** flag, stored in the user database schema. This approach ensures streamlined access management and enhances the platform’s security.

---

## 🚦 **How RBAC Works**

### **Role Differentiation**
- **Admin**: Users with the `isAdmin` flag set to `true`. Admins have elevated privileges to perform tasks like managing users, viewing analytics, and handling service requests.
- **Normal Users**: Users with the `isAdmin` flag set to `false`. Normal users can perform actions like booking services and tracking their own repair statuses.

---

For detailed implementation, please refer to the file located at backend/utils.js, where the middleware logic is defined and maintained. This file includes the database query and validation mechanism to verify whether a user holds the required admin privileges before granting access to administrative routes.