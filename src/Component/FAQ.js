import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h2>Frequently Ask Question</h2>
         <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Will my new website look good on my mobile phone, tablets and other devices ?

         </Accordion.Header>
          <Accordion.Body>
          Yes, I build mobile responsive websites which render differently depending on the screen size from which it is viewed. Mobile responsive websites are a crucial part of your success today as most people tend to access websites these days using mobile devices
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Is it PBN website or Real website?
            </Accordion.Header>
          <Accordion.Body>
          Please be assure that your guest post and article will be posted on real website with 100% traffic from organic sources such as Google and social media traffic (Linkedin, Facebook etc). This is exclusive gig and you can only post your article on the website through this gig only.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Will it be easy to edit my website? I am not a web developer.</Accordion.Header>
          <Accordion.Body>
          Absolutely. It'll be very easy to use and changes can be made easily from your dashboard. I'll also be happy to offer guidance in any way I can :)
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