# 🌍 WanderLust – Vacation Rental Platform 🏡

## Project Summary

WanderLust is a Full Stack Web Application inspired by modern vacation rental platforms, enabling users to explore, list, review, and manage vacation properties such as houses, villas, apartments, and farmhouses. The platform provides an intuitive user experience with secure authentication, property image uploads, interactive maps, and comprehensive property management features.

Users can create accounts, list their own properties, upload images, view property locations on an interactive map, leave reviews, and manage their listings seamlessly. The application follows the MVC architecture for maintainability and scalability while ensuring a responsive and secure user experience.

---

## 🚀 Live Demo

**Live Application:** https://wanderlust-4b0m.onrender.com/

**GitHub Repository:** https://github.com/DebugNinja0204/Wanderlust

---

## ✨ Features

### 👤 User Authentication & Authorization

* Secure user registration and login
* Passport.js authentication
* Session-based authentication
* Authorization for protected routes
* User-specific property management

### 🏡 Property Listings

* Create new property listings
* Edit existing listings
* Delete listings
* Upload property images
* View detailed property information
* Display property location on an interactive map

### ⭐ Reviews & Ratings

* Add reviews to properties
* Delete reviews
* View user-generated feedback
* Improve trust and engagement

### 🗺️ Interactive Maps

* Mapbox integration for location visualization
* Property location markers
* Better property discovery experience

### ☁️ Image Upload & Storage

* Cloudinary integration for image hosting
* Optimized image delivery
* Secure image storage

### 🔒 Security Features

* Input validation using Joi
* Authentication and authorization middleware
* Secure session handling
* Error handling and flash messaging

### 📱 Responsive Design

* Mobile-friendly interface
* Responsive layouts using Bootstrap
* Smooth user experience across devices

---

## 🎨 Frontend

### Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap 5
* EJS Templates

### Features

* Responsive UI
* Dynamic rendering using EJS
* Interactive forms
* Property cards and listing pages
* Flash messages and notifications

---

## 🛠️ Backend

### Technologies Used

* Node.js
* Express.js

### Features

* RESTful routing
* Authentication and authorization
* CRUD operations for listings
* Review management
* Error handling middleware
* Session management

---

## 🗄️ Database

### Database Management System

* MongoDB Atlas

### Features

* Structured schemas using Mongoose
* Efficient querying
* Relationship management between users, listings, and reviews
* Cloud-hosted database

---

## ☁️ Cloudinary Image Storage

All listing images are securely stored and managed using Cloudinary.

### Benefits

* Fast image delivery
* Reliable cloud storage
* Image optimization
* Easy image management

---

## 🏗️ Project Architecture

The project follows the MVC (Model-View-Controller) architecture:

### Models

* User
* Listing
* Review

### Views

* EJS templates
* Reusable partials
* Dynamic pages

### Controllers

* Listing controllers
* Review controllers
* Authentication controllers

### Routes

* Listing routes
* Review routes
* User routes

---

## 📦 Technologies & Packages Used

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Authentication & Security

* Passport.js
* Passport Local
* Passport Local Mongoose
* Express Session
* Connect Mongo
* Cookie Parser
* Connect Flash

### Validation

* Joi

### File Uploads & Media

* Multer
* Cloudinary
* Multer Storage Cloudinary

### Utilities

* Dotenv
* Method Override
* EJS Mate

### Maps & Location

* Mapbox API

---

## 📂 Core Functionalities

### For Guests

* Browse all listings
* View listing details
* Explore property locations
* Read reviews

### For Registered Users

* Create listings
* Upload images
* Edit and delete own listings
* Post reviews
* Manage account sessions

---

## 🚀 Deployment

The application is deployed on Render and connected to MongoDB Atlas for database management.

### Deployment Stack

* Render (Hosting)
* MongoDB Atlas (Database)
* Cloudinary (Image Storage)
* Mapbox (Location Services)

---

## ⚙️ Environment Variables

Create a `.env` file and add:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

## 👨‍💻 Author

**Nishanth Gardas**

GitHub: https://github.com/DebugNinja0204

---

## 🌟 Future Enhancements

* Wishlist/Favorites Feature
* Property Booking System
* Payment Gateway Integration
* Advanced Search & Filters
* User Profile Dashboard
* Real-Time Notifications
* Admin Panel
* AI-Based Property Recommendations

---

If you found this project helpful, consider giving it a ⭐ on GitHub!
