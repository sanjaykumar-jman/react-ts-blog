export default function base64ToFile(dataUrl: string, filename: string): File {
    // Extract base64 data from the data URL
    const [metadata, base64Data] = dataUrl.split(',');
    const mimeType = metadata.match(/:(.*?);/)?.[1]; // Extract the MIME type from metadata
  
    if (!mimeType) {
      throw new Error('Invalid Data URL: Unable to extract MIME type');
    }
  
    // Decode the base64 string to binary data
    const byteString = atob(base64Data); // Decode the base64 string
  
    // Create an array of byte values
    const byteArray = new Uint8Array(byteString.length);
  
    for (let i = 0; i < byteString.length; i++) {
      byteArray[i] = byteString.charCodeAt(i);
    }
  
    // Create a Blob from the byte array
    const blob = new Blob([byteArray], { type: mimeType });
  
    // Convert the Blob to a File object and return it
    return new File([blob], filename, { type: mimeType });
  }
  