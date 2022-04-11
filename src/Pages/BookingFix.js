// import React, { useEffect } from "react";
// import {
//   Page,
//   H2,
//   Backlink,
//   Paragraph,
//   UnorderedList,
//   H4,
//   H3,
// } from "govuk-react";
// import { OrderedList, ListItem, InsetText } from "govuk-react";
// import { Footer, Button, ButtonArrow, SectionBreak } from "govuk-react";
// import "../Styles/BookingFix.css";

// export default function BookingFix() {
//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);

//   return (
//     <div className="Booking">
//       <Page>
//         <div className="Container">
//           <div className="LeftInfo">
//             <H2 class>Before you start </H2>

//             <Paragraph>
//               You are here to book your theory test. You will need to provide
//               your personal details, driving licence number and payment details.
//             </Paragraph>

//             <p>
//               This page is also available in{" "}
//               <a href="https://en.wikipedia.org/wiki/Markdown">
//                 {" "}
//                 Welsh (Cymraeg)
//               </a>
//             </p>

//             <H3>Book a test online</H3>
//             <Paragraph>You need your:</Paragraph>

//             <OrderedList listStyleType="bullet">
//               <ListItem>UK driving licence number</ListItem>
//               <ListItem>email address</ListItem>
//               <ListItem>credit or debit card</ListItem>
//             </OrderedList>

//             <Button icon={<ButtonArrow />} start>
//               Start now
//             </Button>

//             <H3>Do you need support?</H3>

//             <Paragraph>
//               If you are having difficulties with the booking process, contact
//               the Driver and Vehicle Standards Agency (DVSA) to get help.
//             </Paragraph>

//             <Button start>Continue Here</Button>
//           </div>

//           <div className="RightInfo">
//             <H3>Already booked?</H3>
//             <Button>See Details Here</Button>

//             <Paragraph>
//               [Cancel](http://localhost:3000/cancel) or
//               [reschedule](https://en.wikipedia.org/wiki/Markdown) your booked
//               test using a reference number.
//             </Paragraph>

//             <SectionBreak level="LARGE" visible />

//             <H4>Related topics</H4>

//             <OrderedList className="RelatedTopicsList" listStyleType="none">
//               <ListItem>
//                 <Paragraph>
//                   [Contact DVLA](https://www.gov.uk/contact-the-dvla)
//                 </Paragraph>
//               </ListItem>
//               <ListItem>
//                 <Paragraph>
//                   [Adding categories to your driving
//                   licence](http://localhost:3000/cancel)
//                 </Paragraph>
//               </ListItem>
//               <ListItem>
//                 <Paragraph>
//                   [Become a qualified dangerous goods (ADR) vehicle
//                   driver](http://localhost:3000/cancel)
//                 </Paragraph>
//               </ListItem>
//             </OrderedList>
//           </div>
//         </div>
//       </Page>
//       <div className="Footer">
//         <Footer
//           meta={
//             <Footer.MetaCustom>
//               Built by the{" "}
//               <Footer.Link href="/">Government Digital Service</Footer.Link>
//             </Footer.MetaCustom>
//           }
//         />
//       </div>
//     </div>
//   );
// }

// /* <Page beforeChildren={<BackLink href="#">Back</BackLink>}>*/
