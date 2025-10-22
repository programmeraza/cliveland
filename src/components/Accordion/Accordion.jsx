import * as React from "react";
import MuiAccordion, { accordionClasses as muiAccordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, { accordionDetailsClasses as muiAccordionDetailsClasses } from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import "./Accordion.scss";
import { useTranslation } from 'react-i18next';

export default function Accordion() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  const steps = [
    {
      title: t('components.accordion.steps.screening.title'),
      text: t('components.accordion.steps.screening.text'),
    },
    {
      title: t('components.accordion.steps.interview.title'),
      text: t('components.accordion.steps.interview.text'),
    },
    {
      title: t('components.accordion.steps.verification.title'),
      text: t('components.accordion.steps.verification.text'),
    },
    {
      title: t('components.accordion.steps.decision.title'),
      text: t('components.accordion.steps.decision.text'),
    },
    {
      title: t('components.accordion.steps.onboarding.title'),
      text: t('components.accordion.steps.onboarding.text'),
    },
  ];

  const handleExpansion = (index) => (_, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <div className="accordion-block">
      <div className="container">
        <h1>{t('components.accordion.title')}</h1>
        <div className="accordion-block__wrapper">
          {steps.map((step, index) => (
            <MuiAccordion
              key={index}
              expanded={expanded === index}
              onChange={handleExpansion(index)}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 400 }}
              sx={[
                expanded === index
                  ? {
                    [`& .${muiAccordionClasses.region}`]: { height: "auto" },
                    [`& .${muiAccordionDetailsClasses.root}`]: { display: "block" },
                  }
                  : {
                    [`& .${muiAccordionClasses.region}`]: { height: 0 },
                    [`& .${muiAccordionDetailsClasses.root}`]: { display: "none" },
                  },
              ]}
            >
              <AccordionSummary
                expandIcon={<img src="./arrow.svg" alt="arrow" className="accordion-arrow"/>}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                className="accordion-block__summary"
              >
                <Typography component="span" className="accordion-block__title">
                  {step.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="accordion-block__details">
                <Typography>{step.text}</Typography>
              </AccordionDetails>
            </MuiAccordion>
          ))}
        </div>
      </div>
    </div>
  );
}
