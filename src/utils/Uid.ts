export default function generateUID() {
    const timestamp = Date.now(); // Get the current timestamp in milliseconds
    const random = Math.random().toString(36).substring(2, 8); // Generate a random string
    return `${timestamp}-${random}`; // Combine timestamp and random string
  }
  