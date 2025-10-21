# Contact Form Validation

This project contains a JavaScript script that adds client-side validation to a contact form. It ensures that all fields are filled out correctly before submission and provides instant feedback for invalid inputs.

## Features
- Real-time validation on field blur
- Email format checking
- Minimum message length validation
- Smooth scroll to success message
- Auto-hide success message after 5 seconds

## How It Works
The script listens for form submissions and prevents the default reload behavior.  
Each field is validated for completeness and correctness using custom logic in the `ValidityField()` function.  
If all fields are valid, a success message appears briefly, and the form resets.

## Files
- **index.html** – Contains the main structure.
- **contact.html** - Contains the Form structure
- **about.html** - Contains the about structure
- **style.css** – Styles for whole project
- **script.js** – Validation logic and interactive behavior.

## Usage
Include the script in your HTML file:
```html
<script src="script.js"></script>
