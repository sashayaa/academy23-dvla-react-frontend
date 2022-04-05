// import axios from 'axios';
import React, { useEffect } from 'react';
import { Page, H1 } from 'govuk-react';
import '../Styles/Home.css';
import { Paragraph } from 'govuk-react';
import { OrderedList, ListItem } from 'govuk-react';
import { Button, ButtonArrow } from 'govuk-react';
import { Footer } from 'govuk-react';


// const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata";

export default function Home() {

    useEffect(() => {
        window.scroll(0, 0)
        
    }, [])

    return (
            <div>
                <Page>
                    <H1>
                        Book your theory test
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
                        [Cancel](http://localhost:3000/cancel) or [rechedule](https://en.wikipedia.org/wiki/Markdown) your booked test using a reference number from:
                    </Paragraph>

                    <OrderedList listStyleType="bullet">
                        <ListItem>
                            A recent reminder letter from DVLA.
                        </ListItem>
                        <ListItem>
                            Confirmation e-mail from DVLA.
                        </ListItem>
                    </OrderedList>

                    <Footer meta={<Footer.MetaCustom>Built by the{' '}<Footer.Link href="/">Government Digital Service</Footer.Link></Footer.MetaCustom>} />
                
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