import "./actionPanel.css";

const ActionPanel = ({handleOpenModal , className}) => {
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
      <div className={className}>
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

