import "./box.css";

const Box = () => {
  return (
    <>
      <div
        className="box-container"
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
      >
        {/* this grabber icon will only appear here when someone hovers over the box container */}

        <div className="grabber-icon-wrapper ">
          <img src="./grabber.svg" alt="grab me" />
        </div>

        <div className="box-content">
          <div className="box-right">
            <div className="box-icon">
              <img src="./folder.svg" alt="box-icon" />
            </div>
            <div className="box-content-info">
              <h2 className="box-content-info-title">
                ARTIFICIAL INTELLIGENCE
              </h2>
              <p className="box-content-info-description">
                Add Items To This Module
              </p>
            </div>
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
