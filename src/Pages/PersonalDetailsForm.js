// The first step of booking process.

import axios from "axios";
import "../Styles/PersonalDetailsForm.css";
import React, { useEffect } from "react";
import { Page, H2 } from "govuk-react";
import "../Styles/Home.css";
import {
  Button,
  Input,
  Label,
  LabelText,
  HintText,
  ErrorText,
} from "govuk-react";
import { Footer } from "govuk-react";
import { Link } from "react-router-dom";

const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata/";

export default function PersonalDetailsForm() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [time, setTime] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState("");
  const [pln, setPln] = React.useState("");
  const [email, setEmail] = React.useState("");

  const putInfoToDatabase = async () => {
    /* e.preventDefault(); */

    // store the states in the form data
    const userAppointmentInfo = new FormData();
    userAppointmentInfo.append("firstName", firstName);
    userAppointmentInfo.append("lastName", lastName);
    userAppointmentInfo.append("drivingLicenseNumber", pln);
    userAppointmentInfo.append("postCode", postcode);
    userAppointmentInfo.append("emailAddress", email);
    userAppointmentInfo.append("appointmentDate", date);
    userAppointmentInfo.append("appointementTime", time);
    userAppointmentInfo.append("appointmentLocation", location);

    console.log(userAppointmentInfo);

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: baseURL,
        data: "{foo: \"bar\"}",
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value.trim());
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value.trim());
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value.trim());
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value.trim());
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value.trim());
  };

  const handleChangePostcode = (e) => {
    setPostcode(e.target.value.trim());
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleChangePln = (e) => {
    setPln(e.target.value.trim());
  };

  return (
    <div className="PersonalForm">
      <Page>
        <H2>Complete Personal Detail Form:</H2>

        {/*<Link to="/booking" style={{ textDecoration: 'none'}} ><Button icon={<ButtonArrow />} start>
              Start now
  </Button></Link>*/}

        <div className="Form">
          <Label>
            <LabelText>
              <b>First Name:</b>
            </LabelText>
            <HintText>For example, JOHN WILLIAM.</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeFirstName} value={firstName} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Last Name:</b>
            </LabelText>
            <HintText>For example, JONES.</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeLastName} value={lastName} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>PostCode:</b>
            </LabelText>
            <HintText>For example, 21 10 1998</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangePostcode} value={postcode} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>E-Mail:</b>
            </LabelText>
            <HintText>For example, yourname@gmail.com</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeEmail} value={email} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Provisional License Number:</b>
            </LabelText>
            <HintText>For example, DHILL787FTT8RT89.</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangePln} value={pln}/>
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Preferable date for your theory test:</b>
            </LabelText>
            <HintText>Example hint</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeDate} value={date} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Preferable location:</b>
            </LabelText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeLocation} value={location} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Preferable time:</b>
            </LabelText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeTime} value={time}/>
          </Label>

          <br />

          <Button onClick={putInfoToDatabase}>Submit</Button>
        </div>
      </Page>

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
