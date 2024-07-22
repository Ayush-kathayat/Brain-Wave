import React from "react";
import "./faq.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "	#0c2c21",
          fontSize: "2.5rem",
          fontWeight: "bold",
          cursor: "pointer",
          opacity: "0.8",
          color: "#fff",
          "&:hover": {
            opacity: "1",
          },
        },
      },
    },
  },
});

const Faq = () => {
  return (
    <>
      <div className="faq-wrapper">
        <div className="faq-title">
          <h className="title">Frequently Asked Questions</h>
        </div>
      </div>

      <ThemeProvider theme={theme}>
        <Accordion className="accord">
          <AccordionSummary>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Question 1: How can I upload and organize my course content?{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Answer: You can easily upload your course content, including
              links, images, and PDFs, through our intuitive interface. Simply
              create a new module, add your content, and categorize it to keep
              everything organized and easily accessible.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accord">
          <AccordionSummary>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Question 2: Is my data secure on this platform?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Answer: Yes, your data is secure. We use industry-standard
              security practices and robust authentication mechanisms to ensure
              that only you can access and modify your content. All data is
              stored securely in our backend database.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accord">
          <AccordionSummary>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Question 3: Can I access my content from multiple devices?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Answer: Absolutely! Our platform supports cross-device
              synchronization, so you can access your content from any device,
              anywhere. Any changes you make will be reflected across all your
              devices, ensuring a seamless experience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accord">
          <AccordionSummary>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Question 4: What happens if I forget my password?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Answer:If you forget your password, you can easily reset it using
              the "Forgot Password" feature on the login page. Follow the
              instructions to reset your password and regain access to your
              account securely.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </>
  );
};

export default Faq;
