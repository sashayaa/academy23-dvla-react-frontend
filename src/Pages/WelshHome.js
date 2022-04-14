// import axios from 'axios';
import React, { useEffect } from "react";
import { Page, H2, UnorderedList, H4, H3 } from "govuk-react";
import "../Styles/Home.css";
import { Paragraph } from "govuk-react";
import { OrderedList, ListItem } from "govuk-react";
import { Button, ButtonArrow } from "govuk-react";
import { Footer } from "govuk-react";
import { Link } from "react-router-dom";

// const baseURL = "https://dvla-backend.herokuapp.com/api/clientsdata";

export default function WelshHome() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="Home">
      <Page>
        <div className="Container">
          <div className="LeftInfo">
            <H2 class>Archebwch eich prawf theori ar-lein</H2>

            <H3> Bydd angen eich:</H3>

            <OrderedList className= "needsList" listStyleType="bullet">
              <ListItem>Rhif trwydded yrru'r DU </ListItem>
              <ListItem>cyfeiriad ebost</ListItem>
              <ListItem>cerdyn credyd neu ddebyd</ListItem>
            </OrderedList>

            <Link to="/welshbooking" style={{ textDecoration: 'none'}} ><Button icon={<ButtonArrow />} start>
            Dechreuwch nawr
            </Button></Link>
      
            <p>
            Mae'r dudalen hon hefyd ar gael yn{" "}
              <a href="https://en.wikipedia.org/wiki/Markdown">
                {" "}
                Saesneg (English)
              </a>
            </p>
            <br />
            <H3> Cyn i chi ddechrau</H3>
            <Paragraph>Mae'n rhaid eich bod wedi byw yng Nghymru, Lloegr neu'r Alban am o leiaf 185 diwrnod yn ystod y 12 mis diwethaf cyn y diwrnod y cymerwch eich prawf theori neu yrru.</Paragraph>
            <br />
            <Paragraph>Mae profion ceir a beiciau modur yn costio £23.</Paragraph>
            <br />
            <H4>Gwybodaeth ychwanegol:</H4>
            <orderedList className="ListSize">
              <ListItem className="ListItemLeft">
              Ffoniwch ni ar 0300 200 1122 rhwng 8am a 4pm
              </ListItem>
              <ListItem className="ListItemLeft">
              E-bostiwch ni yn theorycustomerservices@dvsa.gov.uk
              </ListItem>
            </orderedList>
          </div>
          <div className="RightInfo">
            <H2> Wedi Archebu Eisoes?</H2>
            <Link to="/viewbooking" style={{ textDecoration: 'none'}} ><Button icon={<ButtonArrow />} start>
            Gweler y manylion yma
            </Button></Link>
            <Paragraph>
            [Canslo](http://localhost:3000/cancel) neu
              [aildrefnu](https://en.wikipedia.org/wiki/Markdown) eich prawf a archebwyd gan ddefnyddio rhif cyfeirnod oddi wrth:
            </Paragraph>
            <OrderedList listStyleType="bullet">
              <ListItem>Llythyr atgoffa diweddar gan DVLA.</ListItem>
              <ListItem>E-bost cadarnhad gan DVLA.</ListItem>
            </OrderedList>
            <H2>Pynciau Cysylltiedig</H2>
            <UnorderedList listStyleType="none">
              <ListItem>Pasio eich Prawf Ymarferol</ListItem>
              <ListItem>Darparwyr yswiriant dibynadwy</ListItem>
              <ListItem>Adnewyddu trwydded yrru</ListItem>
              <ListItem>Sut i brynu batmobile</ListItem>
            </UnorderedList>
          </div>
        </div>

      </Page>
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


