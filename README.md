# Inventory Management Modal using ShadCN

This project is a part of an Inventory Management System for warehouses in manufacturing companies. It is designed to manage the check-in and check-out process of inventory items. The focus is on tracking product details, including their origin, destination, serial numbers, usage, and reasons for the request.

## Features

- **Modal for Inventory Management:** A modal triggered by a "Manage Inventory" button that allows administrators to manage the check-in and check-out process.
- **Product Management:** Add multiple products using a multi-select dropdown.
- **Serial Numbers Input:** Enter serial numbers for specific products.
- **Usage and Reason Descriptions:** Text areas to describe the usage of products and provide a reason for the request.
- **Validation:** Proper validation for all fields with error messages for required fields.
- **Responsive Design:** Styled with ShadCN to ensure a responsive and visually appealing design.

## Project Structure

The modal includes the following fields:

1. **Products:** A multi-select dropdown to add multiple products.
2. **Product Issuance:** A dropdown or text field to specify which products are being issued.
3. **Serial Numbers:** Input fields for entering serial numbers of the specified products.
4. **Usage:** A textarea for describing the usage of the products.
5. **Reason:** A textarea for providing the reason for the request.
6. **Buttons:** "Submit" and "Cancel" buttons for form actions.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/RanitManik/Modal-using-ShadCN.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Modal-using-ShadCN
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Technology Stack

- **Frontend:** NextJS, React, ShadCN, TailwindCSS, Zod
- **Deployment:** Vercel

## Future Improvements

- Improve validation logic for enhanced user experience.
- Optimize performance by reducing re-renders and improving state management.
- Add more customization options for the modal design.

## Feedback and Contributions

Feel free to provide any feedback or suggestions by opening an issue in this repository.

## License

This project is open source and available under the [MIT License](LICENSE).
