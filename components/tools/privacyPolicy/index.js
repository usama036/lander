import styles from "./style.module.scss";
import { Container } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <>
      <section className={styles.PrivacyPolicy}>
        <Container>
          <div>
            <h2 className="text-center">Privacy Policy</h2>
            <h3>1. Introduction</h3>
            <p>
              Welcome to mod-apk.io (the “Website”). At mod-apk.io, we value
              your privacy and strive to protect your personal information. This
              Privacy Policy outlines the types of information we collect, how
              we use it, and the choices you have regarding your information. By
              using our Website, you consent to the practices described in this
              Privacy Policy.
            </p>
            <h3>2. Information We Collect</h3>
            <ul>
              <li>
                <strong> Personal Information:</strong> We may collect personal
                information such as your name and email address when you
                subscribe to our newsletter or contact us through the Website.
              </li>
              <li>
                <strong> Usage Data:</strong> We collect information about your
                interactions with the Website, including your IP address,
                browser type, and device information.
              </li>
            </ul>
            <h3>3. How We Use Your Information</h3>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>
                To improve and personalize your experience on the Website.
              </li>
              <li>To respond to your inquiries or requests.</li>
              <li>
                To send periodic emails, including newsletters, updates, and
                promotions.
              </li>
            </ul>
            <h3>4. Third-Party Disclosure</h3>{" "}
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent.
            </p>
            <h3>5. Security</h3>
            <p>
              We take reasonable steps to protect your personal information.
              However, no method of data transmission or storage is 100% secure.
              While we strive to protect your information, we cannot guarantee
              its absolute security.
            </p>
            <h3>6. Your Choices</h3>
            <p>
              You can unsubscribe from our newsletter at any time by following
              the instructions provided in the email.
            </p>
            <h3>7. Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our practices, please contact us at mod-apk@contact.com
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
