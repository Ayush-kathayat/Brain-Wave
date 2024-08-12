import "./actionPanel.css";

const ActionPanel = ({handleOpenModal}) => {
  const panelData = [
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
  ];

  return (
    <>
      <div className="action-panel">
        {panelData.map((data, index) => (
          <div key={index} className="action-wrapper" onClick={() => handleOpenModal(data.heading , data.description , data.icon, data.hash_map)}>
            <img src={data.icon} alt="module" />
            <h1>{data.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActionPanel;

// <div className="drop-down">
//   <div
//     className="create-module"
//     onClick={() =>
//       handleOpenModal(
//         "Create New Module",
//         "Add Item To This Module",
//         "./folder.svg",
//         {
//           "Module Name": "Enter Module Name",
//         }
//       )
//     }
//   >
//     <img src="./folder.svg" alt="module" />
//     <h1 className="create-module-title"> Create Module</h1>
//   </div>

//   <div
//     className="add-link"
//     onClick={() =>
//       handleOpenModal("Add New Link", "Link", "./link.svg", {
//         URL: "Enter URL",
//         "Display Name": "Enter Display Name",
//       })
//     }
//   >
//     <img src="./link.svg" alt="" />
//     <h1 className="add-link-title">Add a Link</h1>
//   </div>

//   <div className="upload">
//     <img src="./upload.svg" alt="" />
//     <h1 className="upload-title">Upload</h1>
//   </div>
// </div>;
