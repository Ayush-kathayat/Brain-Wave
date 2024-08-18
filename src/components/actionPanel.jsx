import "./actionPanel.css";
import { useState } from "react";
import uploadFile from "@/utilities/fileUpload";

const ActionPanel = ({
  handleOpenModal,
  className,
  panelKey,
  handleSubmitModal,
}) => {
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = async () => {
    try {
      const fileInfo = await uploadFile();
      setFileData(fileInfo);
      handleSubmitModal(fileInfo);
      // console.log("File Info:", fileInfo);
      // You can now use fileInfo.name and fileInfo.description as needed
    } catch (error) {
      console.error(error);
    }
  };

  const panelData = [
    {
      dropDown: [
        {
          heading: "Create Module",
          description: "Add Item to this Module",
          icon: "./folder.svg",
          title: "Add a Module",
          hash_map: {
            "Module Name": "Enter Module Name",
          },
        },
        {
          heading: "Add New Link",
          description: "LINk",
          icon: "./link.svg",
          title: "Add a Link",
          hash_map: {
            URL: "Enter URL",
            "Display Name": "Enter Display Name",
          },
        },
        {
          icon: "./upload.svg",
          title: "Upload",
        },
      ],
    },
    {
      folder: [
        {
          heading: "Edit Module",
          description: "Add Item to this Module",
          icon: "./edit.svg",
          title: "Edit Module Name",
          hash_map: {
            "Module Name": "Enter New Name",
          },
        },
        {
          icon: "./trash-2.svg",
          title: "Delete",
        },
      ],
    },
    {
      link: [
        {
          heading: "Edit",
          description: "Link",
          icon: "./edit.svg",
          title: "Edit Link",
          hash_map: {
            URL: "Enter URL",
            "Display Name": "Enter Display Name",
          },
        },
        {
          icon: "./external-link.svg",
          title: "Go to Link",
        },
        {
          icon: "./trash-2.svg",
          title: "Delete",
        },
      ],
    },
    {
      image: [
        {
          heading: "Edit",
          description: "Link",
          icon: "./edit.svg",
          title: "Rename",
          hash_map: {
            Name: "Enter New Name",
          },
        },
        {
          icon: "./download.svg",
          title: "Download",
        },
        {
          icon: "./trash-2.svg",
          title: "Delete",
        },
      ],
    },
    {
      file: [
        {
          heading: "Edit",
          description: "Link",
          icon: "./edit.svg",
          title: "Rename",
          hash_map: {
            Name: "Enter New Name",
          },
        },
        {
          icon: "./download.svg",
          title: "Download",
        },
        {
          icon: "./trash-2.svg",
          title: "Delete",
        },
      ],
    },
  ];

  const selectedPanel = panelData.find((panel) => panel[panelKey]);

  if (!selectedPanel) {
    return null;
  }

  const dataList = selectedPanel[panelKey];

  return (
    <div className={className}>
      {dataList.map((data, index) => (
        <div
          key={index}
          className="action-wrapper"
          onClick={() => {
            if (data.title === "Upload") {
              handleFileUpload();
            } else {
              handleOpenModal(
                data.heading,
                data.description,
                data.icon,
                data.hash_map
              );
            }
          }}
        >
          <img src={data.icon} alt="module" />
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ActionPanel;
