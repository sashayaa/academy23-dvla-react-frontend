// The first step of booking process.

import axios from "axios";
import "../Styles/PersonalDetailsForm.css";
import React, { useEffect } from "react";
import { Page, H2, UnorderedList, H4, H3 } from "govuk-react";
import "../Styles/Home.css";
import { Paragraph } from "govuk-react";
import { OrderedList, ListItem } from "govuk-react";
import { Button, ButtonArrow, Input, Label, LabelText, HintText, ErrorText } from "govuk-react";
import { Footer } from "govuk-react";
import { Link } from "react-router-dom";

const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata";

export default function PersonalDetailsForm() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  /*mash that up into array later*/
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [time, setTime] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState("");
  const [pln, setPln] = React.useState("");
  const [email, setEmail] = React.useState("");

  /*mash that up into one big handlechange/submit function later*/
  const getInfoToDatabase = (e) => {
    e.preventDefault();
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

  const handleChangeDob = (e) => {
    setDob(e.target.value.trim());
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleChangePln = (e) => {
    setPln(e.target.value.trim());
  };

  /* const runAxiosRequest = (e) => {
    e.preventDefault();
    if (dvlaReference !== ""){ 
        setDummyClientId(parseInt(dvlaReference));
    }
   
    setRequestState(true);
  };



  React.useEffect(() => {
    axios.get(`${baseURL}/${dummyClientId}`).then((response) => {
      setPost(response.data);
    });
  }, [requestState, dummyClientId]);

  if (!post) return "Error";
*/

  return (
    <div className="PersonalForm">
      <Page>
        
          <H2 class>Complete Personal Detail Form:</H2>

      
          {/*<Link to="/booking" style={{ textDecoration: 'none'}} ><Button icon={<ButtonArrow />} start>
              Start now
  </Button></Link>*/}

          <div className="form">
            <Label>
              <LabelText>First Name:</LabelText>
              <HintText>For example, JOHN WILLIAM.</HintText>
              <ErrorText>Example error</ErrorText>
              <Input onChange={handleChangeFirstName} />
            </Label>

            <Label>
              <LabelText>Last Name:</LabelText>
              <HintText>For example, JONES.</HintText>
              <ErrorText>Example error</ErrorText>
              <Input onChange={handleChangeLastName} />
            </Label>

            <Label>
              <LabelText>Date of Birth:</LabelText>
              <HintText>For example, 21 10 1998</HintText>
              <ErrorText>Example error</ErrorText>
              <Input onChange={handleChangeDob} />
            </Label>

            <Label>
              <LabelText>E-Mail:</LabelText>
              <HintText>For example, yourname@gmail.com</HintText>
              <ErrorText>Example error</ErrorText>
              <Input onChange={handleChangeEmail} />
            </Label>

            <Label>
              <LabelText>Provisional License Number:</LabelText>
              <HintText>For example, DHILL787FTT8RT89.</HintText>
              <ErrorText>Example error</ErrorText>
              <Input onChange={handleChangePln} />
            </Label>

            <Label>
              <LabelText>Preferable date for your theory test:</LabelText>
              <HintText>Example hint</HintText>
              <ErrorText>Example error</ErrorText>
              <Input onChange={handleChangeDate} />
            </Label>

            <Label>
              <LabelText>Preferable location:</LabelText>
              <ErrorText>Example error</ErrorText>
              <Input onChange={handleChangeLocation} />
            </Label>

            <Label>
              <LabelText>Preferable time:</LabelText>
              <ErrorText>Example error</ErrorText>
              <Input onChange={handleChangeTime} />
            </Label>

            <Button onSubmit={getInfoToDatabase}>Submit</Button>
          
        </div>
      </Page>

      <div>
        <Footer meta={<Footer.MetaCustom>Built by the{' '}<Footer.Link href="/">Government Digital Service</Footer.Link></Footer.MetaCustom>} />
      </div>
    </div>
  );
}
