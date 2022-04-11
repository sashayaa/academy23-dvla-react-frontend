// import axios from 'axios';
import React, { useEffect } from "react";
import { Page, H2, UnorderedList, H4, H3 } from "govuk-react";
import "../Styles/Home.css";
import { Paragraph } from "govuk-react";
import { OrderedList, ListItem } from "govuk-react";
import { Button, ButtonArrow } from "govuk-react";
import { Footer } from "govuk-react";

// const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata";

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="Home">
      <Page>
        <div className="Container">
          <div className="LeftInfo">
            <H2 class>Book your theory test online</H2>

            <H3> You will need your:</H3>

            <OrderedList className= "needsList" listStyleType="bullet">
              <ListItem>UK driving license number </ListItem>
              <ListItem>email address</ListItem>
              <ListItem>credit or debit card</ListItem>
            </OrderedList>

            <Button icon={<ButtonArrow />} start>
              Start now
            </Button>
      
            <p>
              This page is also available in{" "}
              <a href="https://en.wikipedia.org/wiki/Markdown">
                {" "}
                Welsh (Cymraeg)
              </a>
            </p>
            <br />
            <H3> Before you start</H3>
            <Paragraph>You must have lived in England, Wales or Scotland for at least 185 days in the last 12 months before the day you take your theory or driving test.</Paragraph>
            <br />
            <Paragraph>Car and motorcycle tests cost £23.</Paragraph>
            <br />
            <H4>Additional Info:</H4>
            <orderedList className="ListSize">
              <ListItem className="ListItemLeft">
                Call us on 0300 200 1122 from 8am to 4pm
              </ListItem>
              <ListItem className="ListItemLeft">
                Email us at theorycustomerservices@dvsa.gov.uk
              </ListItem>
            </orderedList>
          </div>
          <div className="RightInfo">
            <H2> Already Booked?</H2>
            <Button>See details here</Button>
            <Paragraph>
              [Cancel](http://localhost:3000/cancel) or
              [reschedule](https://en.wikipedia.org/wiki/Markdown) your booked
              test using a reference number from:
            </Paragraph>
            <OrderedList listStyleType="bullet">
              <ListItem>A recent reminder letter from DVLA.</ListItem>
              <ListItem>Confirmation e-mail from DVLA.</ListItem>
            </OrderedList>
            <H2>Related Topics</H2>
            <UnorderedList listStyleType="none">
              <ListItem>Passing your Practical test</ListItem>
              <ListItem>Trusted insurance providers</ListItem>
              <ListItem>Driving licence renewal</ListItem>
              <ListItem>How to buy a batmobile</ListItem>
            </UnorderedList>
          </div>
        </div>

      </Page>
      <div className="Footer">
          <Footer
            meta={
              <Footer.MetaCustom>
                Built by the{" "}
                <Footer.Link href="/">Government Digital Service</Footer.Link>
              </Footer.MetaCustom>
            }
          />
        </div>
    </div>
  );
}


