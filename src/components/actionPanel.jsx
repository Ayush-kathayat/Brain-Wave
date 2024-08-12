import "./actionPanel.css";

const ActionPanel = () => {
  const panelData = [
    { icon: "./folder.svg", title: "Create Module" },
    { icon: "./link.svg", title: "Add a Link" },
    { icon: "./upload.svg", title: "Upload" },
  ];

  return (
    <>
      <div className="action-panel">
        {panelData.map((data, index) => (
          <div key={index} className="action-wrapper">
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
