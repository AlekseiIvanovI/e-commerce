# TechHub E-Commerce Website

TechHub is an e-commerce website that offers a wide range of tech products. This project is built with Next.js, a React framework for server-side rendering, and integrates with Stripe for secure online payments. It utilizes MongoDB to store product and order data and includes an Admin Dashboard for managing products, orders, and inventory. The content management system (CMS) allows easy management of product information.

## Live Demo

Check out the live demo of the TechHub E-Commerce Website: https://e-commerce-web-project.payloadcms.app/

## Features

- Browse and search for tech products
- Add products to the cart
- Adjust the quantity of products in the cart
- Remove products from the cart
- Securely process payments using Stripe
- Handle Stripe webhook payload for order fulfillment and server-side operations
- Store product and order data in MongoDB
- Admin dashboard for managing products, orders, and inventory
- Content management system for easy product management

## Technologies Used

- Next.js: React framework for server-side rendering
- Stripe API: Payment processing platform
- MongoDB: NoSQL database for storing product and order data
- Other dependencies such as Axios, Express, etc.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your system.
- MongoDB should be installed and running.
- Stripe account and API credentials are required.

### Installation

1. Clone this repository to your local machine or download the ZIP file.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```
   npm install
   `````

4. Create a `.env.local` file in the root directory and add the following environment variables:

   ```plaintext
   STRIPE_SECRET_KEY=your_stripe_secret_key
   MONGODB_URI=your_mongodb_uri
   ```

   Replace `your_stripe_secret_key` with your own Stripe API secret key. Replace `your_mongodb_uri` with the MongoDB connection URI.

5. Start the development server by running the following command:

   ``````
   npm run dev
   ```

6. Open your web browser and visit `http://localhost:3000` to access the TechHub e-commerce website.

### Admin Dashboard

To access the admin dashboard, visit `http://localhost:3000/admin` in your web browser. You will need to authenticate as an admin user to access the dashboard.

## Usage

1. Browse the available tech products on the website and add desired items to the cart.
2. Adjust the quantity of products in the cart if needed.
3. Proceed to checkout and enter the required shipping and payment information.
4. Complete the payment using the Stripe payment form.
5. Upon successful payment, you will receive an order confirmation.
6. Admin users can log in to the admin dashboard to manage products, orders, and inventory.

## Webhook Configuration

To handle Stripe webhook payload for order fulfillment and server-side operations, follow these steps:

1. Log in to your Stripe account.
2. Navigate to the **Webhooks** section.
3. Create a new webhook endpoint and provide the following details:
   - Endpoint URL: `http://your-website-url/api/webhooks/stripe`
   - Events to send: `checkout.session.completed`, `payment_intent.succeeded`, etc.
4. Save the webhook endpoint configuration.

The server will handle the Stripe webhook payload for order fulfillment and other desired server-side operations.

## CMS Configuration

To manage product information using the CMS, follow these steps:

1. Log in to the admin dashboard.
2. Navigate to the CMS section.
3. Use the provided interface to add, edit, or delete product information.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request.

## Acknowledgements

- [Next.js](https://nextjs.org) - React framework for server-side rendering
- [Stripe](https://stripe.com) - Payment processing platform
- [MongoDB](https://www.mongodb.com) - NoSQL database
- Other open-source libraries and dependencies used in this project

Feel free to customize and modify this README file according to your specific project requirements and add any additional sections or information as needed.
```

You can copy and paste the above markdown content into your README.md file on GitHub. Don't forget to replace `https://your-website-url` in the Live Demo section with the actual URL of your deployed website.
