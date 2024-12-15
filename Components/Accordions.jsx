import "../components_Css/Questions.css";
import Accordion from "react-bootstrap/Accordion";

export default function Accordions() {
  return (
    <div className="container d-flex flex-wrap justify-content-center align-items-start g-4">
          <div className="col-md-8 col-lg-4 text-center">
        <h1 style={{color:"#3c79cf"}}>FAQs</h1>
        <h3 style={{color:"#3c79cf"}}>Any question we got you</h3>
      </div>
      <div className="col-md-8 col-lg-6">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              1-Any question we got you How do I begin my journey with MoFit?
            </Accordion.Header>
            <Accordion.Body>
              Step One - Subscribe to the package that suits you through our
              website. Step Two - Send a picture of your subscription receipt
              via WhatsApp. Step Three - The MoFit team will get in touch with
              you and collect the measurements and required tests to prepare
              your program. Step Four - Receive your training program and embark
              on the journey that will transform your life.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              2. What is MoFit, and what services do you offer?
            </Accordion.Header>
            <Accordion.Body>
              How do I begin my journey with MoFit? 2. What is MoFit, and what
              services do you offer? MoFit is a comprehensive fitness and
              wellness company providing personalized training, nutrition
              guidance, and physical therapy services tailored to your needs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              3. How can MoFit help me achieve my fitness goals?
            </Accordion.Header>
            <Accordion.Body>
              MoFit offers customized training and diet plans designed by
              experts to efficiently and effectively help you achieve your
              specific fitness objectives.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              4. Can I follow MoFit's programs at home, or do I need access to a
              gym?
            </Accordion.Header>
            <Accordion.Body>
              You have the flexibility to choose. MoFit programs can be adapted
              for home or gym workouts based on your preference and available
              equipment.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              5. Is there a support system or customer service available?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we provide fast-response customer support. Reach out to our
              team anytime for assistance, motivation, or to address your
              questions and concerns.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
            6. What is the cost of using MoFit's services?
            </Accordion.Header>
            <Accordion.Body>
            Costs vary based on personalization and support levels. We offer flexible pricing options to accommodate different budgets

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    
    </div>
  );
}
Accordions()