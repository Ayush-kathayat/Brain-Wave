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
            <Typography className="ques">
              Question: How do I create an account on your to-do list website?{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Answer: To create an account, click on the "Sign Up" button
              located at the top right corner of the homepage. Enter your
              desired username, email, and password, then click "Create
              Account". After signing up, you can log in to your account using
              your credentials.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accord">
          <AccordionSummary>
            <Typography>
              Question: How can I add a task to my to-do list?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Answer: To add a task, first log in to your account. Once logged
              in, click on the "+ Task" button located at the top right corner
              of the dashboard. A form will appear where you can enter the
              details of your task, including the title, description, due date,
              and category. After filling in the details, click "Save Task" to
              add the task to your to-do list.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accord">
          <AccordionSummary>
            <Typography>Question: How can I categorize my tasks? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Answer: Our to-do list website allows you to categorize your tasks
              based on their importance, urgency, or any other criteria that
              suits your needs. When adding a task, select the appropriate
              category from the dropdown menu in the task creation form.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accord">
          <AccordionSummary>
            <Typography>
              Question: What happens if I forget my password?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Answer: If you forget your password, don't worry! Click on the
              "Forgot Password?" link located below the login form. Enter your
              registered email address and follow the instructions sent to your
              email to reset your password.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </>
  );
};

export default Faq;

