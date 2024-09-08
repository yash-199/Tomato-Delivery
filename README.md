# Tomato-Delivery

Tomato-Delivery is a full-stack food ordering website built with React JS, MongoDB, Express, Node JS, and Stripe. This project allows users to browse food items, add them to their shopping cart, and place orders with online payment through the Stripe payment gateway.

## Features

- **User Authentication**: Sign up and log in functionality for customers.
- **Shopping Cart**: Add food items to a cart and manage orders.
- **Stripe Payment Integration**: Seamless online payment processing using Stripe.
- **Order Status**: Track and update the status of placed orders.
- **Admin Panel**: Manage food items, orders, and user accounts from an admin dashboard.

## Tech Stack

- **Frontend**: React JS
- **Backend**: Node JS, Express JS, MongoDB
- **Database**: MongoDB
- **Payment Gateway**: Stripe

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

bash
git clone https://github.com/yash-199/Tomato-Delivery.git
cd Tomato-Delivery`

This will install the following dependencies:

express
mongoose
jsonwebtoken
bcrypt
cors
dotenv
body-parser
multer
stripe
validator
nodemon

Create a .env file in the server directory and add the following variables:

bash
Copy code
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
