import './App.css';
import { Page, H1, BackLink } from 'govuk-react';
import { Paragraph } from 'govuk-react';
import { OrderedList, ListItem } from 'govuk-react';
import { Button, ButtonArrow } from 'govuk-react';
import { Link } from 'govuk-react';


function App() {
  return (
    <div className="App">
      <Page beforeChildren={<BackLink href="#">Back</BackLink>}>
        <H1>
          Book your theory test here
        </H1>
      
        <Paragraph>
          Book a theory test for a specific date:
        </Paragraph>

        <Button
          icon={<ButtonArrow />}
          start
        >
          Start now
        </Button>

        <Paragraph>
          Cancel or rechedule your booked test using a reference number from: 
          <a href='#'Cancel appointment/>
        </Paragraph>

        <Link href="#">
          Link example
        </Link>
        
        <OrderedList listStyleType="bullet">
          <ListItem>
            A recent reminder letter from DVLA.
          </ListItem>
          <ListItem>
            Confirmation e-mail from DVLA.
          </ListItem>
        </OrderedList>
      </Page>
    </div>
  );
}

export default App;
