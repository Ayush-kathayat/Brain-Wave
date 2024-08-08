import "./box.css";

const Box = () => {
  return (
    <>
    <div className="box-container">
    {/* this grabber icon will only appear here when someone hovers over the box container */}

      <div className="grabber-icon-wrapper">
        <img src="./grabber.svg" alt="grab me" />
      </div>

      <div className="box-content">
        <div className="box-icon">
          <img src="./folder.svg" alt="box-icon" />
        </div>
        <div className="box-content-info">
          <h2 className="box-content-info-title">MODULE NAME WILL BE HERE</h2>
          <h2 className="box-content-info-description">STATUS BASED ON THE RESOUCE</h2>
        </div>
        <div className="box-content-more-icon">
          <img src="./more-vertical.svg" alt="more-icon" />
        </div>
      </div>
    </div>
    </>
  );

};

export default Box;
