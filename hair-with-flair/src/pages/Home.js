import React   from 'react';
import hairsalon from "../images/hairsalon.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
export default function Home() {
    return (
      <div id="container">
      <h2 class="headColor sidepadding">About Us</h2>
        <div class="AboutUs">
        <div class="side sidepadding" style={{width:'30%'}}>
          <img class="image" src={hairsalon} alt="hair-salon"/>
        </div>
        <div class="side">
          <p style={{margin:'0',textAlign: 'justify'}} class="aboutText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
      </div>
      <h2 class="headColor sidepadding">Know our services</h2>
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Service 1
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                </p>
                <input type="button" value="Book an appointment" id="buttons"/>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Service 2
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
                <input type="button" value="Book an appointment" id="buttons"/>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Service 3
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
                <input type="button" value="Book an appointment" id="buttons"/>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
    <h2 class="headColor sidepadding">Our Services</h2>
    <div class="flex-container">
        <div className="card" style={{ height: '70%'}}>
          <img src={hairsalon} fluid={true} alt="hair-salon"  />
          <div className="card-body" style={{height: 'auto'}}>
            <p className="card-title"><h4>Name 1</h4></p>
            <p className="card-text"> 
              <div class="">Test Name1</div>
             </p>
          </div>
        </div>
        <div className="card" style={{ height: '70%'}}>
          <img src={hairsalon} fluid={true} alt="hair-salon"  />
          <div className="card-body" style={{height: 'auto'}}>
            <p className="card-title"><h4>Name 2</h4></p>
            <p className="card-text"> 
              <div class="">Test Name2</div>
             </p>
          </div>
        </div>
        <div className="card" style={{ height: '70%'}}>
          <img src={hairsalon} fluid={true} alt="hair-salon"  />
          <div className="card-body" style={{height: 'auto'}}>
            <p className="card-title"><h4>Name 3</h4></p>
            <p className="card-text"> 
              <div class="">Test Name3</div>
             </p>
          </div>
        </div>
    </div> 
  </div>
    );
  };