import React from "react";
import axios from "axios";
import { useEffect, useState, react } from "react";
import "../Styles/ViewBooking.css";
import {
  TopNav,
  NavLink,Label,LabelText,ErrorText,HintText,
  Anchor,
  IconTitle,
  Page, Paragraph,
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
  const [dummyClientId, setDummyClientId] = React.useState(2);
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

  React.useEffect(() => {
    axios.get(`${baseURL}/${dummyClientId}`).then((response) => {
      setPost(response.data);
    });
  }, [requestState, dummyClientId]);

  //   if (!post) return "Error";

  // const dummyClientOnlyData = posts.filter(post => post.id === dummyClientId);
  /*{posts.map((post) => (*/
  /*key={dummyClientOnlyData.id}*/

  return (
    <div className="ViewBookingpage">
      <TopNav
        company={
          <TopNav.Anchor href="localhost:3000" target="new">
            <TopNav.IconTitle /*icon={<Crown height="32" width="36"/>}*/>
              GOV.UK
            </TopNav.IconTitle>
          </TopNav.Anchor>
        }
        /*serviceTitle={<TopNav.NavLink href="https://example.com" target="new">Service Title</TopNav.NavLink>}*/
      />
      <div className="info"> 
          <H3>Need to view your appointment information?</H3>
          <Paragraph> If you need to view your appointment details, enter your reference number in the search box below.
          </Paragraph>
      </div>    

      <div className="viewingtable">
        <Label>
            <LabelText>
              <b>Reference Number</b>
            </LabelText>
            <ErrorText></ErrorText>
            <Input onChange={handleChange}/>
          </Label>
        <div className="button"> 
        <Button onClick={runAxiosRequest}>Submit</Button>
        </div>
        {post && requestState === true && (
          <Table className="tablestyling">
            <Table.Row>
              <H5>Reference Number</H5>
              <Table.Cell>{post.id}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <H5>First Name</H5>
              <Table.Cell>{post.firstName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <H5>Last Name</H5>
              <Table.Cell>{post.lastName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <H5>Appointment Date</H5>
              <Table.Cell>{post.appointmentDate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <H5>Appointment Time</H5>
              <Table.Cell>{post.appointmentTime}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <H5>Appointment Location</H5>
              <Table.Cell>{post.appointmentLocation}</Table.Cell>
            </Table.Row>
          </Table>
        )}
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
    </div>
  );
}
