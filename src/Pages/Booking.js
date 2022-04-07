import React, { useEffect } from 'react';
import { Page, BackLink, H2, H3, H4, Paragraph } from 'govuk-react';
import { OrderedList, ListItem, InsetText } from 'govuk-react';
import { Footer, Button, ButtonArrow, SectionBreak } from 'govuk-react';
import '../Styles/Booking.css';

const Booking = () => {

    useEffect(() => {
        window.scroll(0, 0)
        
    }, [])
    
  return (

    <div className='Main'>
      <div className='Page'>

        <Page beforeChildren={<BackLink href="#">Back</BackLink>}>

          <div className='Body'>
            <div className='Left'>
              <H2>
                Before you start
              </H2>

              <Paragraph>
                You are here to book your theory test. You will need to provide your personal details, driving licence number and payment details.
              </Paragraph>

              <InsetText>
                <Paragraph mb={0}>
                  This page is also [available in Welsh (Cymraeg)](https://en.wikipedia.org/wiki/Markdown).
                </Paragraph>
              </InsetText>

              <H3>Book a test online</H3>
              <Paragraph>
                You need your:
              </Paragraph>

              <OrderedList listStyleType="bullet">
                <ListItem>
                  UK driving licence number
                </ListItem>
                <ListItem>
                  email address
                </ListItem>
                <ListItem>
                  credit or debit card
                </ListItem>
              </OrderedList>

              <Button
              icon={<ButtonArrow />}
              start
              >
                Start now
              </Button>

              <H3>
                Do you need support?
              </H3>

              <Paragraph>
                If you are having difficulties with the booking process, contact the Driver and Vehicle Standards Agency (DVSA) to get help.
              </Paragraph>

              <Button start>
                Continue Here
              </Button> 
            </div>

            <div className='Right'>
              <H3>Already booked?</H3>
              <Button>
                See Details Here
              </Button>

              <Paragraph>
                [Cancel](http://localhost:3000/cancel) or [reschedule](https://en.wikipedia.org/wiki/Markdown) your booked test using a reference number.
              </Paragraph>

              <SectionBreak
                level="LARGE"
                visible
              />

              <H4>
                Related topics
              </H4>

              <OrderedList className='RelatedTopicsList' listStyleType="none">
                <ListItem>
                  <Paragraph>[Contact DVLA](https://www.gov.uk/contact-the-dvla)</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>[Adding categories to your driving licence](http://localhost:3000/cancel)</Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>[Become a qualified dangerous goods (ADR) vehicle driver](http://localhost:3000/cancel)</Paragraph>
                </ListItem>
              </OrderedList>

            </div>

          </div>
          
        </Page>

      </div>
      <div className='Footer'>
        <Footer meta={<Footer.MetaCustom>Built by the{' '}<Footer.Link href="/">Government Digital Service</Footer.Link></Footer.MetaCustom>} />
      </div>
    </div>
  );
}

export default Booking
