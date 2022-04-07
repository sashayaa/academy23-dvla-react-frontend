// import axios from 'axios';
import React, { useEffect } from "react";
import { Page, H1, H2, UnorderedList, H4, InsetText, Link, H5, H6 } from "govuk-react";
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
            <H1>Book your theory test</H1>

            <Paragraph>Book a theory test for a specific date:</Paragraph>

            <Button icon={<ButtonArrow />} start>
              Start now
            </Button>
            <H6 className="Wales">
              <Paragraph mb={0}>
                This page is also available in [Welsh(Cymraeg)](https://en.wikipedia.org/wiki/Markdown).
              </Paragraph>
            </H6>
            <br />
            <H4>Additional Info:</H4>
            <orderedList className="ListSize">
              <ListItem className="ListItemLeft">
                Call us on 4235903409 from 8-6{" "}
              </ListItem>
              <ListItem className="ListItemLeft">
                Email us at ergdrgerg@gov.uk
              </ListItem>
              <ListItem className="ListItemLeft">
                Send a Carrier Pigeon to captain driving.
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
      </Page>
    </div>
  );
}

//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return "Error";

//   return (
//     <div>
//       <h1>{post.firstName}</h1>

//     </div>
//   );
