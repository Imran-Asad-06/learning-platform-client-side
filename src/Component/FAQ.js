import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h2>Frequently Ask Question</h2>
         <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>When does the new academic session start? 

         </Accordion.Header>
          <Accordion.Body>
          The new academic session in universities and colleges across the country will begin from October 1, while the admission process has to be completed by September 30, according to new guidelines of the rules
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is the structure of academic levels? 
            </Accordion.Header>
          <Accordion.Body>
          The academic structure and its elements are the building blocks for an academic institution, from the institution itself down to degrees. Components of the structure include such things as academic careers, academic departments, plans and subplans, subjects, etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is the age requirement for the admission? </Accordion.Header>
          <Accordion.Body>
          Currently College Students and Admission Candidate..
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Interested in getting started with you, what do I need to provide?</Accordion.Header>
          <Accordion.Body>
          I will need your hosting and domain details, contents, images, videos for your pages designing and your courses too.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

        </div>
    );
};

export default FAQ;