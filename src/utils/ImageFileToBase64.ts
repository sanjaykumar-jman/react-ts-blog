export default function imgFileToBase64(file: File | null): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (file == null) {
        reject('file is null')
        return
      }
      // Event handler for successful read
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
  
      // Event handler for read error
      reader.onerror = () => {
        reject(new Error("Failed to convert file to Base64"));
      };
  
      // Read the file as a Data URL
      reader.readAsDataURL(file);
    });
  }