// The first step of booking process.

import axios from "axios";
import "../Styles/PersonalDetailsForm.css";
import React, { useEffect } from "react";
import { Page, H2, DateField, ErrorSummary } from "govuk-react";
import "../Styles/Home.css";
import {
  Button,
  Input,
  Label,
  LabelText,
  HintText,
  ErrorText,
  Footer,
  BackLink,
  H1
} from "govuk-react";
import { Navigate } from 'react-router-dom';

const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata";

export default function WelshPersonalDetailsForm() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [time, setTime] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState("");
  const [pln, setPln] = React.useState(""); //provisional license number
  const [email, setEmail] = React.useState("");
  const [formInvalid, setFormInvalid] = React.useState(false);
  const [redirect, setRedirect] = React.useState();


  const putInfoToDatabase = async () => {
    console.log ("Post request is being run");
    const userAppointmentInfo = new Object();

    userAppointmentInfo["firstName"] = firstName;
    userAppointmentInfo["lastName"] = lastName;
    userAppointmentInfo["drivingLicenseNumber"] = pln;
    userAppointmentInfo["postCode"] = postcode;
    userAppointmentInfo["emailAddress"] = email;
    userAppointmentInfo["appointmentDate"] = date;
    userAppointmentInfo["appointmentTime"] = time;
    userAppointmentInfo["appointmentLocation"] = location;

    const userAppointmentJson = JSON.stringify(userAppointmentInfo);
    console.log(userAppointmentInfo);
    console.log(userAppointmentJson);

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: baseURL,
        data: userAppointmentJson,
        headers: { "Content-Type": "application/json" },
      });
      console.log("looks like this has been submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = (e) => {
    if (firstName && lastName && postcode && time && location && date && pln && email){
      putInfoToDatabase();
      setFormInvalid(false);
      setRedirect(true);
    }else{
      setFormInvalid(true);
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

  const showMeTheDate = (date) => {
    console.log(date);
  };





if (redirect) {
  return (
    <Navigate
      to={{
        pathname: "/confirmation",
      }}
    />
  );
}


  return (
    <div className="PersonalForm">
    <Page>
        <H1>beforeChildren={<BackLink href="/welshHome">Yn ol</BackLink>}</H1>
      {formInvalid && ( <ErrorSummary
  errors={[
    {
      text: 'Rhaid i chi nodir manylion hyn fel y maent yn ymddangos ar eich trwydded yrru dros dro'
    }
  ]}
  heading="There is a problem "
/>)}
        <H2>Cwblhau Ffurflen Manylion Personol:</H2>

       

        <div className="Form">
          <Label>
            <LabelText>
              <b>Enw cyntaf:</b>
            </LabelText>
            <HintText>Er enghraifft, JOHN WILLIAM.</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeFirstName} value={firstName} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Enw olaf:</b>
            </LabelText>
            <HintText>Er enghraifft, JONES.</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeLastName} value={lastName} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Côd post:</b>
            </LabelText>
            <HintText>Er enghraifft, 21 10 1998</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangePostcode} value={postcode} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Ebost:</b>
            </LabelText>
            <HintText>Er enghraifft, yourname@gmail.com</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeEmail} value={email} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Rhif Trwydded Dros Dro:</b>
            </LabelText>
            <HintText>Er enghraifft, DHILL787FTT8RT89.</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangePln} value={pln} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Y dyddiad gorau ar gyfer eich prawf theori:</b>
            </LabelText>
            <HintText>Example hint</HintText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeDate} value={date}/>
          </Label>
          <br/>
          <DateField input={{onChange: (date) => /*console.log(date, "<-- date")*/ date}} onChange={showMeTheDate}/>

          <br />

          <Label>
            <LabelText>
              <b>Lleoliad ffafriol:</b>
            </LabelText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeLocation} value={location} />
          </Label>

          <br />

          <Label>
            <LabelText>
              <b>Amser gorau:</b>
            </LabelText>
            <ErrorText></ErrorText>
            <Input onChange={handleChangeTime} value={time} />
          </Label>

          <br />

          <Button onClick={submitForm}>Cyflwyno</Button> 


          {/*<Link to="/booking" style={{ textDecoration: 'none'}} ><Button icon={<ButtonArrow />} start>
              Start now
  </Button></Link>*/}
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
