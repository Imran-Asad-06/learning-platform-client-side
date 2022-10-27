import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is CORS?</Accordion.Header>
          <Accordion.Body>
          When a server has been configured correctly to allow cross-origin resource sharing, some special headers will be included. Their presence can be used to determine that a request supports CORS. Web browsers can use these headers to determine whether or not an XMLHttpRequest call should continue or fail.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase? What other options do you have to implement
            authentication?
            </Accordion.Header>
          <Accordion.Body>
          Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of  cloud server configuration.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
          The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
          Node.js is a JavaScript runtime used to create scalable server-side and networking applications via virtual private servers. It offers non-blocking input/output (I/O) operations and is built on event-driven, asynchronous architecture to help developers create various projects efficiently and easily.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

        </div>
    );
};

export default Blog;