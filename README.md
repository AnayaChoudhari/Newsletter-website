
# Mailchimp Newsletter Signup Website

## Overview

This project is a Full Stack Web Development template for a newsletter signup page. The backend is implemented using Node.js and Express.js, and the Mailchimp API is utilized for managing newsletter subscriptions.

## Features

- Newsletter signup form with fields for first name, last name, and email.
- Express.js backend to handle form submissions.
- Integration with the Mailchimp API for adding subscribers to a mailing list.
- Simple success and failure pages based on the Mailchimp API response.
- Easy configuration for Mailchimp API key and list ID.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AnayaChoudhari/Newsletter-website.git
   cd mailchimp-newsletter-signup
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   node app.js
   ```

   The server will be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000).
2. Fill out the signup form with your first name, last name, and email.
3. Click the "Subscribe" button.
4. Check the console for API response details.
5. You will be redirected to a success or failure page based on the API response.

## Configuration

Set your Mailchimp API key in the `api_key` variable in `app.js`:

```javascript
const api_key = "your-mailchimp-api-key";
```

Update the Mailchimp list ID in the `url` variable in `app.js`:

```javascript
const url = "https://<server>.api.mailchimp.com/3.0/lists/<list-id>/members";
```

## Contributing

Contributions are welcome! If you have suggestions, improvements, or find any issues, please create a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Node.js and Express.js for backend development.
- Mailchimp for providing the API for managing newsletters.
- [requests](https://www.npmjs.com/package/requests) module for making HTTP requests.

## Contact

For questions or inquiries, please contact [anayachoudhari02@gmail.com].

```

Replace placeholders such as `your-mailchimp-api-key`, `<server>`, and `<list-id>` with the appropriate information. Adjust the configuration section based on your Mailchimp setup.
