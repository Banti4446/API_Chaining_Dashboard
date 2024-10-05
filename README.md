# Chaining Dashboard

## Overview

The **Chaining Dashboard** is a responsive web application designed to demonstrate complex API interactions, including both GET and POST requests. The dashboard allows users to create workflows that chain multiple API calls, where the response from one API is utilized in subsequent API requests. This project showcases proficiency in asynchronous operations, state management, data transformation, and handling different HTTP methods using React.js and Tailwind CSS.

![Demo Screenshot] 

![{4D4FC6F9-0E68-4C4A-95BE-CFA014171F6C}](https://github.com/user-attachments/assets/9e95de8d-1ba6-4f4a-b327-d38389e61467)


## Features

- **Visual Workflow Builder:** Users can create and manage API workflows by selecting APIs, mapping response fields to request parameters, and transforming data as needed.
- **API Integration:** Seamless integration with mock APIs for fetching users, creating posts, and retrieving comments.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS, ensuring optimal performance across devices.
- **State Management:** Efficient state handling using React's `useState` and `useEffect` hooks.
- **Error Handling:** Robust error handling and loading states to enhance user experience.
- **Data Flow Visualization:** Clear visual representation of data flow between chained APIs.

## Technical Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (`useState`, `useEffect`)
- **API Handling:** Axios
- **Version Control:** Git

## Setup Instructions

Follow these steps to set up and run the project locally.

### **Prerequisites**

- **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git**: [Download Git](https://git-scm.com/downloads)

### **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/chaining-dashboard.git
   cd chaining-dashboard
   npm start
