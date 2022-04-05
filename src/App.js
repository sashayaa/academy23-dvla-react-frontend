import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// import { Page, H1, BackLink } from 'govuk-react';
// import { Paragraph } from 'govuk-react';
// import { OrderedList, ListItem } from 'govuk-react';
// import { Button, ButtonArrow } from 'govuk-react';
//const axios = require('axios').default;
const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return "No post!";

  return (
    <div>
      <h1>{post.firstName}</h1>
    </div>
  );
}


// function App() {
//   return (
    // <div className="App">
    //   <Page beforeChildren={<BackLink href="#">Back</BackLink>}>
    //     <H1>
    //       Book your theory test here
    //     </H1>
      
    //     <Paragraph>
    //       Book a theory test for a specific date:
    //     </Paragraph>

    //     <Button
    //       icon={<ButtonArrow />}
    //       start
    //     >
    //       Start now
    //     </Button>


    //     <Paragraph>
    //       [Cancel](https://en.wikipedia.org/wiki/Markdown) or [rechedule](https://en.wikipedia.org/wiki/Markdown) your booked test using a reference number from:
    //     </Paragraph>

    //     <OrderedList listStyleType="bullet">
    //       <ListItem>
    //         A recent reminder letter from DVLA.
    //       </ListItem>
    //       <ListItem>
    //         Confirmation e-mail from DVLA.
    //       </ListItem>
    //     </OrderedList>
    //   </Page>
    // </div>
//   );
// }

// export default App;
