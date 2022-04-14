import React, { useEffect } from "react";
import { Page, BackLink, H2, H3, H4, Paragraph } from "govuk-react";
import { OrderedList, ListItem, InsetText} from "govuk-react";
import { Footer, Button, ButtonArrow, SectionBreak } from "govuk-react";
import { Link } from "react-router-dom"; //do not delete this line or merge it with gov-uk-react imports!
import "../Styles/Booking.css";

const WelshBooking = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="Main">
      <div className="Page">
        <Page beforeChildren={<BackLink href="/welshHome">Yn ol</BackLink>}>
          <div className="Body">
            <div className="Left">
              <H2>Cyn i chi ddechrau</H2>

              <Paragraph>
              Rydych chi yma i archebu eich prawf theori.
              Bydd angen i chi ddarparu eich manylion personol, rhif trwydded yrru a thaliad manylion.
              </Paragraph>

              <InsetText>
                <Paragraph mb={0}>
                  Mae'r dudalen hon hefyd ar gael yn Saesneg 
                  (English)](https://driving-theory-booking.herokuapp.com/).
                </Paragraph>
              </InsetText>

              <H3>Archebwch brawf ar-lein</H3>
              <Paragraph>Mae angen eich:</Paragraph>

              <OrderedList listStyleType="bullet">
                <ListItem>Rhif trwydded yrru'r DU</ListItem>
                <ListItem>cyfeiriad ebost</ListItem>
                <ListItem>cerdyn credyd neu ddebyd</ListItem>
              </OrderedList>

              <Link to="/WelshPersonalDetails" style={{ textDecoration: 'none'}} ><Button icon={<ButtonArrow />} start>
              Dechreuwch nawr
              </Button></Link>

              <H3>Ydych chi angen cefnogaeth?</H3>

              <Paragraph>
              Os ydych chi'n cael anawsterau gyda'r broses archebu, cysylltwch â
                 yr Asiantaeth Safonau Gyrwyr a Cherbydau (DVSA) i gael cymorth.
              </Paragraph>

              <Button start>Parhewch Yma</Button>
            </div>

            <div className="Right">
              <H3>Wedi archebu lle yn barod?</H3>
              <Link to="/viewbooking" style={{ textDecoration: 'none'}} ><Button icon={<ButtonArrow />} start>
              Gweler y manylion yma
            </Button></Link>

              <Paragraph>
              [Canslo](http://localhost:3000/cancel) neu
              [aildrefnu](https://en.wikipedia.org/wiki/Markdown) eich prawf a archebwyd gan ddefnyddio rhif cyfeirnod oddi wrth:
              </Paragraph>

              <SectionBreak level="LARGE" visible />

              <H4>Pynciau cysylltiedig</H4>

              <OrderedList className="RelatedTopicsList" listStyleType="none">
                <ListItem>
                  <Paragraph>
                    [Cysylltwch â DVLA](https://www.gov.uk/contact-the-dvla)
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                  [Ychwanegu categorïau at eich gyrru
                     trwydded](http://localhost:3000/canslo)
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                  [Dewch yn gerbyd nwyddau peryglus cymwys gyrrwr](http://localhost:3000/canslo)
                  </Paragraph>
                </ListItem>
              </OrderedList>
            </div>
          </div>
          
        </Page>
        
      </div>
      <div>
        <Footer meta={<Footer.MetaCustom>Built by the{' '}<Footer.Link href="/">Government Digital Service</Footer.Link></Footer.MetaCustom>} />
      </div>

    </div>
  );
};

export default WelshBooking;
