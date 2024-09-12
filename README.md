# Inventory Management Modal using ShadCN

This project was completed as part of the selection process for a Frontend Developer internship with @Vitco. The task involved creating a modal using ShadCN for an Inventory Management System, focusing on managing the check-in and check-out process of inventory items. I’m excited to share that I successfully got the internship!

<details>
<summary>Table of Contents</summary>

   1. [Project Overview](#project-overview)
   2. [References](#references)
   3. [Live Demo](#live-demo)
   4. [Features](#features)
   5. [Technology Stack](#technology-stack)
   6. [Installation and Setup](#installation-and-setup)
   7. [Usage Instructions](#usage-instructions)
   8. [Validation Details](#validation-details)
   9. [Design and Styling](#design-and-styling)
   10. [License](#license)
   11. [Contact](#contact)

</details>

## Project Overview

This project is designed as a component of an Inventory Management System for warehouses in manufacturing companies. It focuses on managing the check-in and check-out process of inventory items, including tracking product details, serial numbers, reasons for requests, and product usage. The modal component, implemented using ShadCN, provides a user-friendly interface for these functionalities.

## References

- **Project Instructions**: [Selection Process Details](https://docs.google.com/document/d/1yfdrKL61M0bSsCkAfeAy-lum-g665dVta6MX2KL74iU/edit)  
  This document outlines the task requirements and expectations for the modal component as part of the selection process for the Frontend Developer internship at Vitco.

- **Video Reference**: [Modal Design Video](https://www.canva.com/design/DAGKwaYsf6w/E3ml4YPlyUDwgu9m0Y7JHg/watch?utm_content=DAGKwaYsf6w&utm_campaign=designshare&utm_medium=link&utm_source=editor)  
  This video provides visual guidance and design inspiration for creating the modal, demonstrating key design elements and interactions.

## Live Demo

You can view the live demo of the application at: [Modal using ShadCN](https://modal-using-shadcn.vercel.app/)

## Features

- **Manage Inventory Button**: A button on the main page that triggers the modal.
- **Modal Form**: The modal includes the following fields:
  - **Products**: Multi-select dropdown for selecting multiple products.
  - **Product Issuance**: Text field or dropdown to specify the products being issued.
  - **Serial Numbers**: Input field for entering serial numbers for the selected products.
  - **Usage**: Textarea for describing the usage of the products.
  - **Reason**: Textarea for providing the reason for the request.
- **Validation**: Includes validation for all required fields with appropriate error messages.
- **Responsive Design**: Styled using ShadCN to ensure the modal is visually appealing and responsive across various devices.


## Technology Stack

![image](https://github.com/user-attachments/assets/01132d92-7f03-4c4f-a339-59a5e788bcad)

- **Frontend:** NextJS, React, ShadCN, TailwindCSS, Zod
- **Deployment:** Vercel


## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/RanitManik/Modal-using-ShadCN.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd Modal-using-ShadCN
    ```

3. **Install Dependencies**

    Ensure you have Node.js and npm installed. Install the required dependencies with:

    ```bash
    npm install
    ```

4. **Run the Development Server**

    Start the development server with:

    ```bash
    npm run dev
    ```

5. **Access the Application**

    Open your browser and go to `http://localhost:3000` to view and interact with the application.

## Usage Instructions

1. **Opening the Modal**
   - On the main page, click the **Open Modal** button to display the modal.

2. **Filling Out the Modal Form**
   - **Products**: Use the multi-select dropdown to choose multiple products from the list.
   - **Product Issuance**: Specify which products are being issued. This can be done via a text field or dropdown, depending on the implementation.
   - **Serial Numbers**: Enter serial numbers for the selected products in the provided input field. Initially, the list of serial numbers will be empty.
   - **Usage**: Describe the usage of the products in the textarea.
   - **Reason**: Provide the reason for the request in the textarea.

3. **Submitting or Canceling**
   - Click **Submit** to save the entries or **Cancel** to close the modal without saving any changes.

## Validation Details

- **Products**: Ensures at least one product is selected.
- **Product Issuance**: Validates that the issuance details are provided.
- **Serial Numbers**: Checks that serial numbers are entered correctly.
- **Usage and Reason**: Both fields are required and must not be empty. 

Error messages are displayed for missing or incorrect entries to guide the user.

## Design and Styling

- **ShadCN**: Utilized for modern and responsive styling.
- **Responsiveness**: The modal is designed to be functional and visually appealing across different screen sizes and devices.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or further clarification, please feel free to reach out.

<table>
  <tr>
    <th></th>
    <th>Social Media</th>
    <th>Username</th>
    <th>Link</th>
  </tr>
  <tr>
    <td><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="20" /></td>
    <td>Email</td>
    <td><code>ranitmanik.dev@gmail.com</code></td>
    <td><a href="mailto:ranitmanik.dev@gmail.com" target="_blank">Email</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" width="20" /></td>
    <td>LinkedIn</td>
    <td><code>Ranit Manik</code></td>
    <td><a href="https://www.linkedin.com/in/ranit-manik/" target="_blank">LinkedIn</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="20" /></td>
    <td>Instagram</td>
    <td><code>ranit_manik_</code></td>
    <td><a href="https://www.instagram.com/ranit_manik_/" target="_blank">Instagram</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" width="20" /></td>
    <td>Facebook</td>
    <td><code>RanitKumarManik</code></td>
    <td><a href="https://www.facebook.com/RanitKumarManik/" target="_blank">Facebook</a></td>
</tr>
</table>

---

<p align="center">
   Thank you for checking out this Project! 🗿
</p>
