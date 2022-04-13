import React, { useEffect } from "react";
import { Page, H2, UnorderedList, H4, H3 } from "govuk-react";
import "../Styles/Home.css";
import { Paragraph, Panel } from "govuk-react";
import { OrderedList, ListItem } from "govuk-react";
import { Button, ButtonArrow } from "govuk-react";
import { Footer } from "govuk-react";
import { Link } from "react-router-dom";

export default function Confirmation() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  return (

    <Panel title="Application complete">
      Your reference number
      <br />
      <strong>
        Random
      </strong>
    </Panel>

  )
}