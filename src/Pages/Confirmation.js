import React, { useEffect } from "react";
import { Page, H2, UnorderedList, H4, H3 } from "govuk-react";
import "../Styles/Confirmation.css";
import { Paragraph, Panel } from "govuk-react";
import { OrderedList, ListItem } from "govuk-react";
import { Button, ButtonArrow } from "govuk-react";
import { Footer, TopNav } from "govuk-react";
import { Link } from "react-router-dom";

export default function Confirmation() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  return (

    <div className="ConfirmationPage">

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

      <div className="Container">
        <div className="Panel">
          <Panel title="Application complete">
            Your reference number
            <br />
            <strong>
              Random
            </strong>
          </Panel>
        </div>
        <div className="Info">
          <Paragraph>
            Shortly you will get an e-mail with your reference number and all of the information regarding your test appointment.
          </Paragraph>
        </div>
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
  )
}