import React from 'react';
import { Link } from "react-router-dom"
import hairsalon from "../images/home.png";
import hairdresser1 from "../images/hairdresser-1.jpg";
import hairdresser2 from "../images/hairdresser-men.jpg";
import hairdresser3 from "../images/hairdresser.jpg";
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
      <h3 className="headColor sidepadding">About Us</h3>

      <div className="AboutUs">
        <div className=" abtImage" >
          <img className="image" src={hairsalon} alt="hair-salon" />
        </div>
        <div className="abtText" >
          <p className="aboutText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
          <p className="aboutText">architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
          <p className="aboutText">tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <p className="aboutText">Overall, maintaining healthy hair requires a combination of good hair care habits and the use of high-quality hair products. With the right care and attention, you can keep your hair looking healthy, shiny, and beautiful. </p>
        </div>

      </div>
      <h3 className="headColor sidepadding">Know our services</h3>
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} className="sidepadding" style={{ paddingLeft: '4%',width:'90%' }}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Hair Examination and Remedies
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Examination and remedies based on
              <ol>
                <li><em>Hair type: </em>The first step in choosing the right hair products is to determine your hair type. Hair can be straight, wavy, curly, or kinky, and each type has specific needs.</li>
                <li><em>Hair health:</em> It's important to maintain healthy hair, which means avoiding excessive heat styling, chemical treatments, and harsh products that can damage the hair. </li>
                <li><em>Hair problems:</em>Some common hair problems include dryness, breakage, split ends, dandruff, and thinning hair. Depending on the specific problem, different treatments may be recommended.</li>
                <li><em>Product selection:</em> When selecting hair products, it's important to choose products that are designed for your specific hair type and needs.</li>
                Consult a professional if you're experiencing hair problems or are unsure about which products to use, it's always a good idea to consult a professional.</ol>
            </p>
            <Link type="button" id="buttons" style={{textDecoration: "none" }} to="/Appointments" >Book an appointment</Link>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Gender-free haircuts
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Our salon offer gender-free haircuts by providing a variety of styles that are inclusive and accessible to all individuals, regardless of their gender identity or expression. </p>
            <p>Some popular gender-free haircuts include pixie cuts, bobs, shags, and textured layers. These styles can be customized to suit each individual's hair type, face shape, and personal style preferences.
            </p>
            <Link type="button" id="buttons" style={{textDecoration: "none" }} to="/Appointments" >Book an appointment</Link>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Hair Treatments
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Our hair treatment are based on:
              <ol>
                <li><em>Deep conditioning treatments:</em> Deep conditioning treatments are designed to nourish and hydrate hair that has been damaged or is in need of some extra TLC. This can involve the application of a mask or other conditioning treatment, which is left on the hair for a certain period of time before being washed out.</li>

                <li> <em>Scalp treatments: </em>Scalp treatments can help to soothe and exfoliate the scalp, while also promoting healthy hair growth. This can involve a scalp massage, the application of a scalp treatment product, or both.</li>
              </ol>
            </p>
            <Link type="button" id="buttons" style={{textDecoration: "none" }} to="/Appointments" >Book an appointment</Link>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Transform my feel
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Our hair transformation services are:
              <ol>
                <li><em>Keratin treatments:</em> Keratin treatments are designed to smooth and straighten hair, while also reducing frizz and increasing shine. This treatment typically lasts several months and can be a great option for clients with curly or frizzy hair.</li>
                <li><em> Hair extensions:</em> Hair extensions can be a great option for clients who want to add length or volume to their hair. There are many different types of extensions available, including clip-in, sew-in, and tape-in extensions.</li>
                <li> <em>Hair coloring:</em> Hair salons can offer a wide range of hair coloring services, from basic highlights and lowlights to more complex balayage or ombre techniques.</li>
                <li> <em>Perms:</em> Perms can help to add body and texture to hair that is naturally straight or fine. This involves using chemicals to reshape the hair's structure, creating curls or waves that can last for several months.</li>
                <li> <em>Hair smoothing treatments:</em> Hair smoothing treatments can help to reduce frizz and make hair more manageable, without fully straightening it. This can be a great option for clients who want to keep some of their natural texture, while also taming unruly hair.</li>
              </ol>
            </p> <Link type="button" id="buttons" style={{textDecoration: "none" }} to="/Appointments" >Book an appointment</Link>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <h3 className="headColor sidepadding">Our Experts</h3>
      <div className="flex-container">
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff', height: '350px' }}>
          <img src={hairdresser1} alt="hair-salon" />
          <div className="card-body" style={{ height: '60px' }}>
            <p className="card-title"><span>Cate Don</span></p>
            <p className="card-text">
              <span className="">Sytlist</span>
            </p>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff', height: '350px' }}>
          <img src={hairdresser2} alt="hair-salon" />
          <div className="card-body" style={{ height: '60px' }}>
            <p className="card-title"><span>Craig Dennis</span></p>
            <p className="card-text">
              <span className="">Sytlist</span>
            </p>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: '#000000', color: '#ffffff', height: '350px' }}>
          <img src={hairdresser3} alt="hair-salon" />
          <div className="card-body" style={{ height: '60px' }}>
            <p className="card-title"><span>Anna Daniel</span></p>
            <p className="card-text">
              <span className="">Sytlist</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};