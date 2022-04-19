import React from "react";
import axios from "axios";
import { setUpdatedAt } from "axios";
import { useEffect, useState, react, CellHeader } from "react";
import "../Styles/Reschedule.css";
import {
  TopNav,
  NavLink,
  Label,
  LabelText,
  ErrorText,
  HintText,
  Anchor,
  IconTitle,
  Page,
  Paragraph,
  ButtonArrow,
  BackLink,
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

export default function Reschedule() {
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


  return (
    <div className="Reschedule">
      <Page beforeChildren={<BackLink href="/Booking">Back</BackLink>}> </Page>
      <div className="Body">
        <div className="textinfo">
          <H3>Want to rechedule your apointment date or time?</H3>
          <Paragraph>
            If you need to change your appointment details, enter your reference
            number in the search box below. If there are any issues with your
            booking please contact us as soon as possible at
            [theorycustomerservices@dvsa.gov.uk]("mailto:theorycustomerservices@dvsa.gov.uk").
          </Paragraph>
        </div>
      </div>

      <div className="viewingtable">
        <Label>
          <LabelText>
            <b>Reference Number</b>
          </LabelText>
          <ErrorText></ErrorText>
          <Input onChange={handleChange} />
        </Label>
        <div className="button">
          <Button onClick={runAxiosRequest}>Review</Button>
        </div>

        {post && requestState === true && (
          <div>
            <div className="table">
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
            </div>

            <div>
              <br />
              <Label className="DateChange">
                <LabelText>
                  <b>Choose new appointment date:</b>
                </LabelText>
                <ErrorText></ErrorText>
                <HintText>For example, 21 10 2022</HintText>
                <Input onChange={handleChange} />
              </Label>

              <br />
              <br />

              <Label className="TimeChange">
                <LabelText>
                  <b>Choose new appoitment time:</b>
                </LabelText>
                <ErrorText></ErrorText>
                <HintText>For example, 11:20</HintText>
                <Input onChange={handleChange} />
              </Label>


              <br />
              <br />


              <Link
                to="/rescheduleconfirmation"
                style={{ textDecoration: "none" }}
              >
                <Button onClick={this.editItem} icon={<ButtonArrow />} start>
                  Confirm
                </Button>
              </Link>


            </div>
          </div>
        )}

        <br />
        <br />
        <br />
        <br />

        <div className="Cancel">
          <Paragraph>
            If you need to cancel your appointment please follow this link and
            have your reference number ready.
          </Paragraph>

          <Link to="/Cancel" style={{ textDecoration: "none" }}>
            <Button icon={<ButtonArrow />} start>
              Cancel
            </Button>
          </Link>
        </div>
      </div>

      <div>
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
