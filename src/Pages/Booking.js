import React, { useEffect } from 'react';
import { H2, H3, Paragraph } from 'govuk-react';
import { OrderedList, ListItem, InsetText } from 'govuk-react';
import { Button, ButtonArrow } from 'govuk-react';
import { TopNav } from 'govuk-react/dist/govuk-react.cjs.prod';
import { Footer } from 'govuk-react';
import '../Styles/Booking.css';

const Booking = () => {

    useEffect(() => {
        window.scroll(0, 0)
        
    }, [])
    
  return (


  
    <div>
      
      <div className='Header'>
        <TopNav
          company={<TopNav.Anchor href="https://example.com" target="new"><TopNav.IconTitle>GOV.UK</TopNav.IconTitle></TopNav.Anchor>}
          serviceTitle={<TopNav.NavLink href="https://example.com" target="new">Book a theory test</TopNav.NavLink>}
        />
      </div>

      <div className='Body'> 
        <H2>
          Before you start
        </H2>

        <Paragraph>
          You are here to book your theory test for:
        </Paragraph>

        <OrderedList listStyleType="bullet">
          <ListItem>
            car
          </ListItem>
          <ListItem>
            motorcycle
          </ListItem>
          <ListItem>
            lorries, buses and coaches
          </ListItem>
        </OrderedList>
        
        <Paragraph>
          You will need to provide your personal details, driving licence number and payment details.
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

      <div className='Footer'>
        <Footer meta={<Footer.MetaCustom>Built by the{' '}<Footer.Link href="/">Government Digital Service</Footer.Link></Footer.MetaCustom>} />
      </div>
    </div>
  );
}

export default Booking
