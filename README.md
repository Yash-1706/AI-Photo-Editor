# AI Photo Editor

AI Photo Editor is a powerful and user-friendly web application that allows users to enhance their photos with advanced filters and adjustments. With its AI-powered background removal feature, users can effortlessly remove the background of their images. It also offers a modern and responsive design with theme toggling for an enjoyable user experience.

---

## **Features**

- **Image Upload**: Easily upload an image to the editor for enhancement.
- **Custom Filters**: Apply various effects, including:
  - Brightness Adjustment
  - Saturation Adjustment
  - Contrast Adjustment
  - Grayscale
  - Sepia
  - Blur
  - Invert Colors
  - Opacity Control
- **AI Background Removal**:
  - Leverage the [remove.bg API](https://www.remove.bg/) for AI-driven background removal.
- **Theme Toggle**:
  - Switch between Light and Dark themes to suit your preference.
- **Reset Changes**: Revert the image to its original state with a single click.
- **Save Image**: Download the edited image to your device.

---

## **Technologies Used**

- **Frontend**:
  - HTML5: For structuring the application.
  - CSS3: For responsive styling, including a modern dark/light theme toggle.
  - JavaScript: For dynamic functionality and interactivity.
- **API Integration**:
  - [remove.bg API](https://www.remove.bg/api): For AI-powered background removal.

---

## **Getting Started**

### **Prerequisites**

1. A modern web browser (e.g., Chrome, Firefox, Edge).
2. An API key from [remove.bg](https://www.remove.bg/) for background removal.

### **Setup Instructions**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yash-1706/ai-photo-editor.git
   cd ai-photo-editor
   ```

2. **Open the Application**:
   Open the `index.html` file in your preferred web browser.

3. **Configure the API Key**:
   Replace the placeholder API key in `script.js` with your actual key:
   ```javascript
   const apiKey = 'Your-API-Key'; // Replace with your actual API key
   ```

---

## **How to Use**

1. **Upload Image**:
   - Click the "Upload Image" button to select an image from your device.

2. **Apply Filters**:
   - Use the provided sliders to adjust brightness, saturation, and contrast.
   - Apply additional effects like grayscale, sepia, blur, invert, and opacity.

3. **Remove Background**:
   - Click the "Remove Background" button to use the AI feature. Ensure the API key is configured.

4. **Save or Reset**:
   - Save the edited image using the "Save" button.
   - Reset all changes using the "Reset" button.

---

## **Folder Structure**

```plaintext
ai-photo-editor/
├── index.html       # Main HTML file
├── style.css        # Application styling
├── script.js        # Application functionality
└── README.md        # Documentation
```

---

## **Dependencies**

- [Font Awesome](https://fontawesome.com/): Icons for buttons and UI elements.
- [remove.bg API](https://www.remove.bg/api): For AI-powered background removal.

---

## **Screenshots**

Dark Mode
![Screenshot 2025-01-05 165629](https://github.com/user-attachments/assets/aa44dbef-9b4a-4880-ae6f-19df1229e0cb)

Light Mode
![Screenshot 2025-01-05 165650](https://github.com/user-attachments/assets/f307170b-5dab-458f-b3a6-c188c21956f7)


---

## **Contributors**

Yash Gaikwad
https://github.com/Yash-1706

Feel free to fork the repository and contribute to the project!

