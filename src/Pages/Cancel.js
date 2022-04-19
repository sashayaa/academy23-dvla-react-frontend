import React from "react";
import axios from "axios";
import { useEffect, useState, react, CellHeader } from "react";
import "../Styles/Cancel.css";
import {
  TopNav,
  NavLink,Label,LabelText,ErrorText,HintText,
  Anchor,
  IconTitle,
  Page, Paragraph,ButtonArrow,BackLink,
  Footer,
  Table,
  Cell,
  Row,
  H5,
  H3,
  H4,
  Button,
  Input,
} from "govuk-react";
import { Link, BrowserRouter } from "react-router-dom";


const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata";

export default function ViewBooking() {
  const [post, setPost] = React.useState(null);
  const [requestState, setRequestState] = React.useState(false);
  const [dummyClientId, setDummyClientId] = React.useState();
  const [dvlaReference, setDvlaReference] = React.useState("");

  const handleChange = (e) => {
    setDvlaReference(e.target.value.trim());
  };

  const runAxiosRequest = (e) => {
    e.preventDefault();
    if (dvlaReference !== "") {
      setDummyClientId(parseInt(dvlaReference));
    }

    setRequestState(true);
  };

  const runAxiosDelete = (e) => {
    axios.delete(`${baseURL}/${dummyClientId}`)


    setRequestState(true);
  };

  React.useEffect(() => {
    axios.get(`${baseURL}/${dummyClientId}`).then((response) => {
      setPost(response.data);
    });
  }, [requestState, dummyClientId]);

  return (
        <div className="Cancel">
      <Page beforeChildren={<BackLink href="/ViewBooking">Back</BackLink>}> </Page>
      <div className="info"> 
          
        <div className="textinfo">
          <H3>Need to cancel you appointment?</H3>
          <Paragraph mb={0}> If you need to cancel your appointment you can do so by entering your reference number, reviewing the appointment information
              and then confirming that you would like to cancel your appointment. An email confirming the cancellation will be sent to you shortly afterwards.
          </Paragraph>
          
        </div></div>

      <div className="viewingtable">
        <Label>
            <LabelText>
              <b>Reference Number</b>
            </LabelText>
            <ErrorText></ErrorText>
            <Input onChange={handleChange}/>
          </Label>
        <div className="button"> 
        <Button onClick={runAxiosRequest}>Review</Button>
        </div>
      
        {post && requestState === true && (
          <Table className="tablestyling">
            <Table.Row>
              <Table.CellHeader>Reference Number</Table.CellHeader>
              <Table.Cell>{post.id}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>First Name</Table.CellHeader>
              <Table.Cell>{post.firstName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Last Name</Table.CellHeader>
              <Table.Cell>{post.lastName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Appointment Date</Table.CellHeader>
              <Table.Cell>{post.appointmentDate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Appointment Time</Table.CellHeader>
              <Table.Cell>{post.appointmentTime}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Appointment Location</Table.CellHeader>
              <Table.Cell>{post.appointmentLocation}</Table.Cell>
            </Table.Row>
          </Table>
        )}  
        <div className= "reschedule">
            <Paragraph>Please confirm your details to and then follow the link to cancel your appointment. Once deleted you will not be able to 
              undo this and will have to begin the booking process from the beginning.
            </Paragraph>
          <Link to="/CancelConfirmation" style={{ textDecoration: 'none'}} ><Button icon={<ButtonArrow />}  start>
                Confirm cancellation
              </Button></Link>
        </div>
      </div>


      <div>
        <Footer meta={<Footer.MetaCustom>Built by the{' '}<Footer.Link href="/">Government Digital Service</Footer.Link></Footer.MetaCustom>} />
      </div>
    </div>
  );
}
