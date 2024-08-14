import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  FormContext,
  InputGroup,
  Button,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import dynamic from "next/dynamic";

// const Form = dynamic(() => import("react-bootstrap/Form"), { ssr: false });
// const Button = dynamic(() => import("react-bootstrap/Button"), { ssr: false });

const AboutUs = () => {
  return (
    <>
      <section className={styles.AboutUs}>
        <Container>
          <Row>
            <Col xs={12} s={12} md={6} className={`col-sm-12 col-md-6`}>
              <h1>CONTACT US</h1>
              <p>
                Let’s make AI the cornerstone of your sustainable <br />{" "}
                journey. Reach out for a free AIdriven consultation.
              </p>
              <div>
                <div className={styles.contactUs}>
                  <Link href="tel:+15035605598">
                    <Image
                      src="/assets/Phone.svg"
                      alt="Phone"
                      width={41}
                      height={41}
                    />
                    1+(503)560-5598
                  </Link>
                </div>
                <div className={styles.contactUs}>
                  <Link href="mailto:hello@reapplay.com">
                    <Image
                      src="/assets/Email.svg"
                      alt="Email"
                      width={41}
                      height={41}
                    />
                    hello@reapplay.com
                  </Link>
                </div>
                <div className={styles.contactUs}>
                  <Link href="3">
                    <Image
                      src="/assets/Location.svg"
                      alt="Location"
                      width={41}
                      height={41}
                    />
                    346 Hunter Place Bend, Oregon 97703
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} s={12} md={6} className={`col-sm-12 col-md-6 `}>
              <div class="contact-form">
                <form>
                  <div className="formWrap">
                    <div class="form-group">
                      <label for="name">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Ex. Saul Ramirez"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="example@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="message">Your Message*</label>
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="btnWrap">
                    <Button variant="none" type="submit" class="submit-btn">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
