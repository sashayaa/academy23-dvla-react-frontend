import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Cell, Row, H5, Button, Input } from "govuk-react";

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

  // const dummyClientOnlyData = posts.filter(post => post.id === dummyClientId);
  /*{posts.map((post) => (*/
  /*key={dummyClientOnlyData.id}*/

  return (
    <div >
        <Input onChange={handleChange} />
        <Button onClick={runAxiosRequest}>Peekaboo!</Button>
      {(post && requestState === true) &&  (
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
  );
}
