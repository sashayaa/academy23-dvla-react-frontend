import React from "react";
import axios from "axios";
import { setUpdatedAt } from "axios";
import { useEffect, useState, react, CellHeader } from "react";
import "../Styles/Reschedule.css";
import {
  Label,
  LabelText,
  ErrorText,
  HintText,
  Page,
  Paragraph,
  ButtonArrow,
  BackLink,
  Footer,
  Table,
  H3,
  Button,
  Input,
} from "govuk-react";
import { Link, BrowserRouter } from "react-router-dom";

const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata";

export default function Reschedule() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [post, setPost] = React.useState(null);
  const [requestState, setRequestState] = React.useState(false);
  const [dummyClientId, setDummyClientId] = React.useState();
  const [dvlaReference, setDvlaReference] = React.useState("");
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");

  const rescheduleAppointment = () => {
    /* if date time aren't empty*/
    if (date && time && dvlaReference) {
      updateDatabase();
    }
  };

  const updateDatabase = async () => {
    console.log("Put request is being run");
    const userAppointmentInfo = new Object();

    userAppointmentInfo["appointmentDate"] = date;
    userAppointmentInfo["appointmentTime"] = time;
    userAppointmentInfo["appointmentLocation"] = location;

    const userAppointmentJson = JSON.stringify(userAppointmentInfo);
    console.log(userAppointmentInfo);
    console.log(userAppointmentJson);

    try {
      // make axios post request
      const response = await axios({
        method: "put",
        url: baseURL,
        data: userAppointmentJson,
        headers: { "Content-Type": "application/json" },
      });
      console.log("Looks like this has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setDvlaReference(e.target.value.trim());
  };

  const handleChangeNewDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeNewTime = (e) => {
    setTime(e.target.value.trim());
  };

  // const runAxiosRequest = (e) => {
  //   e.preventDefault();
  //   if (dvlaReference !== "") {
  //     setDummyClientId(parseInt(dvlaReference));
  //   }

  //   setRequestState(true);
  // };

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/${dummyClientId}`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, [requestState, dummyClientId]);

  return (
    <div className="ViewBookingpage">
      <Page beforeChildren={<BackLink href="/Booking">Back</BackLink>}> </Page>
      <div className="info">
        <div className="textinfo">
          <H3>Need to change your appointment details?</H3>
          <Paragraph>
            If you need change your appointment details, enter your reference
            number in the search box below. If there are any issues with your
            booking please contact us as soon as possible at
            [theorycustomerservices@dvsa.gov.uk]("mailto:theorycustomerservices@dvsa.gov.uk").
          </Paragraph>
        </div>
      </div>

      <div className="viewingtable">
        <Label className="refnum">
          <LabelText>
            <b>Enter your Reference Number:</b>
          </LabelText>
          <ErrorText></ErrorText>
          <HintText>For example, 1</HintText>
          <Input onChange={handleChange} />
        </Label>

        <br/>
        {/* <div className="button">
          <Button onClick={runAxiosRequest}>Review</Button>
        </div> */}

        {/* {post && requestState === true && (
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
        )} */}

        <div className="fields">
          <br />

          <Label className="TimeChange">
            <LabelText>
              <b>Choose new appointment time:</b>
            </LabelText>
            <ErrorText></ErrorText>
            <HintText>For example, 11:20</HintText>
            <Input onChange={handleChangeNewTime} value={time} />
          </Label>

          <br />
          <br />

          <Label className="DateChange">
            <LabelText>
              <b>Choose new appointment date:</b>
            </LabelText>
            <ErrorText></ErrorText>
            <HintText>For example, 21 10 2022</HintText>
            <Input onChange={handleChangeNewDate} value={date} />
          </Label>

          {/* <Label className="LocationChange">
            <LabelText>
              <b>Choose new location or choose the same:</b>
            </LabelText>
            <ErrorText></ErrorText>
            <HintText></HintText>
            <Input onChange={handleChangeNewTime} value={location} />
          </Label> */}

          <br />

          {/* <Link to="/rescheduleconfirmation" style={{ textDecoration: "none" }}> */}
          <Button icon={<ButtonArrow />} onClick={rescheduleAppointment} start>
            Confirm
          </Button>
          {/* </Link> */}

          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="cancel">
          <Paragraph>
            If there are any issues with your booking appointment and you need
            to [cancel](https://driving-theory-booking.herokuapp.com/cancel)
            your appointment, please follow the provided link and have your
            reference number ready.
          </Paragraph>
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
