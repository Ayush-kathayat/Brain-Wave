import "./actionPanel.css";

const ActionPanel = ({ handleOpenModal, className, panelKey }) => {
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
          icon: "./folder.svg",
          title: "Edit Module Name",
          hash_map: {
            "Module Name": "Enter New Name",
          },
        },
        {
          icon: "./delete.svg",
          title: "Delete",
          
        },
      ],
    },
    {
      link: [
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
          onClick={() =>
            handleOpenModal(
              data.heading,
              data.description,
              data.icon,
              data.hash_map
            )
          }
        >
          <img src={data.icon} alt="module" />
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ActionPanel;
