// import { useState } from "react";

const uploadFile = () => {
  // const [iconi, setIconi] = useState("");
  return new Promise((resolve, reject) => {
    // Create an invisible file input element
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.png,.jpg,.jpeg"; // Acceptable file types

    // Trigger the file input click event to open the file dialog
    input.click();

    // Handle the file selection
    input.onchange = () => {
      const file = input.files[0]; // Get the selected file

      if (!file) {
        console.log("No file selected");
        reject("No file selected");
        return;
      }

      // Extract the file name and extension
      const fileName = file.name.split(".")[0]; // Name of the file
      const fileExtension = file.name.split(".").pop(); // File extension

      // if (
      //   fileExtension === "pdf" ||
      //   fileExtension === "png" ||
      //   fileExtension === "jpg" ||
      //   fileExtension === "jpeg"
      // ) {
      //   setIconi("./image.svg");
      // }

      // Return the file information
      const fileInfo = {
        "Module Name": fileName,
        description: fileExtension,
        icon: "./image.svg",
      };

      resolve(fileInfo); // Resolve the promise with the fileInfo object
    };

    // Handle cases where the file input is canceled
    input.oncancel = () => {
      reject("File selection was canceled");
    };
  });
};

export default uploadFile;