# DEALIT

**DEALIT** is a full-stack C2C marketplace that allows users to buy and sell products through online listings. Users can create their own postings, browse other listings, manage their postings, upload multiple images, and view listing locations on an interactive map.

🔗 **Live Application:** https://dealit.onrender.com/postings
🔗 **GitHub Repository:** https://github.com/Nexit-ux/dealit

---

## Features

### User Authentication & Authorization

* User registration and login
* Authenticated users can create product postings
* Users can modify their own postings
* Authorization prevents users from modifying other users' postings

### Product Listings

Users can create listings containing:

* Title
* Description
* Price
* Location
* Country
* Multiple images

Users can also view listings created by other users.

### Multiple Image Uploads

* Supports multiple images for a single product listing
* Images are stored and managed using **Cloudinary**

### Search & Marketplace Browsing

* Browse available product postings
* View individual product details
* Search and discover marketplace listings

### Location Visualization

* Integrated **Mapbox** for location visualization
* Displays an interactive map marker corresponding to a listing's location

### AI-Powered Listing Assistance

* Integrated an LLM API to assist sellers in generating and refining product descriptions
* Helps users create more detailed and professional listing descriptions

---

## Tech Stack

### Frontend

* EJS
* JavaScript
* Bootstrap
* HTML/CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Express Session

### APIs & Services

* REST APIs
* Cloudinary
* Mapbox
* OpenRouter

### Development Tools

* Git
* GitHub
* npm

---

## Application Architecture

DEALIT follows the **MVC (Model-View-Controller)** architecture.

```text
                         DEALIT
                           │
                           ▼
                    ┌─────────────┐
                    │    User     │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │    Views    │
                    │ EJS + CSS   │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Routes    │
                    │  Express.js │
                    └──────┬──────┘
                           │
                           ▼
              ┌────────────────────────┐
              │     Controllers /      │
              │      Middleware       │
              └───────────┬────────────┘
                          │
                          ▼
                    ┌─────────────┐
                    │   Models    │
                    │  Mongoose   │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   MongoDB   │
                    └─────────────┘

              External Services
              ├── Cloudinary → Images
              ├── Mapbox     → Maps
              └── OpenRouter → AI
```

---

## Project Structure

```text
dealit/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
│
├── app.js
├── schema.js
├── middleware.js
├── package.json
└── README.md
```

> The structure above represents the application's MVC organization. Refer to the repository for the current implementation.

---

## Core API Operations

DEALIT uses RESTful routes to manage marketplace postings.

| Operation | Description                               |
| --------- | ----------------------------------------- |
| Create    | Create a new product posting              |
| Read      | View all postings and individual postings |
| Update    | Modify a user's own posting               |
| Delete    | Remove a user's own posting               |

These operations are implemented using **Node.js, Express.js, and MongoDB/Mongoose**.

---

## AI Integration

DEALIT integrates an LLM through **OpenRouter** to assist sellers with product descriptions.

### Workflow

```text
Seller enters product information
              ↓
       AI assistance requested
              ↓
        LLM processes input
              ↓
   Description generated/refined
              ↓
       Seller reviews content
              ↓
        Listing is published
```

The feature is designed to reduce the effort required to write product descriptions.

---

## Image Management

Product listings support multiple images.

```text
User
 │
 ▼
Upload multiple images
 │
 ▼
Cloudinary
 │
 ▼
Image URLs stored with listing
 │
 ▼
Images displayed on listing page
```

This allows each marketplace posting to contain multiple product images rather than being limited to a single image.

---

## Location Integration

DEALIT uses **Mapbox** to visualize listing locations.

When a listing contains a location:

```text
Listing Location
       ↓
    Mapbox
       ↓
Interactive Map
       ↓
 Location Marker
```

Users can therefore see the geographical location associated with a product listing.

---

## Security & Validation

The application includes:

* Authentication using Passport.js
* Authorization for user-specific actions
* Session management
* Request validation
* Middleware-based access control
* Centralized error handling

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Nexit-ux/dealit.git
cd dealit
```

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm start
```

The application will start locally using the configuration defined in the project.

---

## Deployment

DEALIT is deployed and publicly accessible.

**Live Application:**
https://dealit.onrender.com/postings

The application is deployed using **Render**.

---

## Future Improvements

Potential future enhancements include:

* AI-based price estimation
* AI-powered scam detection
* Intelligent product recommendations
* AI-powered product categorization
* Multilingual listing translation
* Image quality analysis
* Advanced marketplace search

---

## Author

**Malladi Nikhil Durgesh**

Computer Science & Engineering
ACE Engineering College, Hyderabad

**GitHub:** https://github.com/Nexit-ux
**LeetCode:** https://leetcode.com/u/Nexit/
