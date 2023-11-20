# Bad Bank Web Application

Bad Bank is a simple web application that allows users to create accounts, deposit and withdraw money, check their account balance, and view all user data. It serves as a basic banking system for managing user accounts.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create Account:** Users can create new accounts by providing their name, email, password, and initial balance.

- **Deposit and Withdraw:** Users can deposit and withdraw money from their accounts, updating their account balances accordingly.

- **Check Balance:** Users can check their account balance at any time.

- **View All Data:** Users can view all account data, including names, emails, balances, and passwords.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure Node.js is installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).

- MongoDB: You need a MongoDB database to store account data. You can set up a MongoDB instance locally or use a cloud-based solution like MongoDB Atlas.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/bad-bank.git

2. Change into the project directory:
   
   ```bash
   cd bad-bank

3. Install the project dependencies using npm:
   
   ```bash
   npm install

## Usage

1. Start the server:

   ```bash
   npm start

2. Access the Bad Bank web application by opening a web browser and navigating to http://localhost:3000/.

3. Use the web application to create accounts, perform transactions, and view account data.

## Endpoints

The following API endpoints are available for interacting with the application:

- **POST /account/create:** Create a new user account.
- **POST /account/deposit/:email/:amount:** Deposit money into a user's account.
- **POST /account/withdraw/:email/:amount:** Withdraw money from a user's account.
- **GET /account/balance/:email:** Check the balance of a user's account.
- **GET /account/all:** Retrieve all user account data.
- **POST /account/login/:email/:password:** Log in to a user account.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing account data.
- **React:** JavaScript library for building user interfaces.
- **Bootstrap:** CSS framework for styling the web application.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.