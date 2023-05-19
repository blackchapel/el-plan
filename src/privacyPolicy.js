import React from "react";

const PrivacyPolicy = () => {
  const styles = {
    centerConatiner: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#f5f5f5",
      h1: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "1rem",
      },
      p: {
        fontSize: "1rem",
        color: "#333",
        lineHeight: "1.5",
        textAlign: "justify",
        width: "80%",
      },
    },
  };

  return (
    <div style={styles.centerConatiner}>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how Cloud Bind ("we," "us," or "our")
        collects, uses, shares, and protects personal information in connection
        with the Cloud Bind software product (the "Product"). This Privacy
        Policy applies to individuals who use or access the Product ("users" or
        "you"). By using the Product, you consent to the practices described in
        this Privacy Policy. Information We Collect 1.1 Personal Information: We
        may collect the following types of personal information from users:
        Contact information (such as name, email address, and phone number).
        Account credentials (such as username and password). Profile information
        (such as profile picture and job title). Billing information (such as
        credit card details or other payment information). 1.2 Usage
        Information: We may collect information about how you use and interact
        with the Product, including: Log information (such as IP address,
        browser type, and access times). Device information (such as operating
        system, device type, and unique device identifiers). Usage data (such as
        features accessed, buttons clicked, and pages visited). How We Use Your
        Information 2.1 Provide and Improve the Product: We use the collected
        information to provide, maintain, and improve the Product, including
        troubleshooting issues, analyzing usage patterns, and enhancing
        functionality. 2.2 Communication: We may use your contact information to
        communicate with you about the Product, including responding to
        inquiries, providing updates, and delivering important notices. 2.3
        Marketing: With your consent, we may use your personal information to
        send promotional and marketing communications. You have the right to
        opt-out of receiving such communications at any time. 2.4 Billing and
        Payments: If you make a purchase through the Product, we may use your
        billing information to process payments and manage your account. 2.5
        Legal Compliance: We may use or disclose your information to comply with
        applicable laws, regulations, legal processes, or enforceable
        governmental requests. Information Sharing and Disclosure 3.1
        Third-Party Service Providers: We may engage third-party service
        providers to perform various functions on our behalf, such as hosting,
        payment processing, analytics, and customer support. These providers
        will have access to your personal information only to the extent
        necessary to perform their functions and are obligated to protect it.
        3.2 Legal Requirements: We may disclose your personal information if
        required to do so by law or in the good faith belief that such action is
        necessary to comply with legal obligations, protect and defend our
        rights or property, or protect the personal safety of users or the
        public. 3.3 Business Transfers: In the event of a merger, acquisition,
        or sale of all or a portion of our assets, your personal information may
        be transferred as part of the transaction. We will provide notice on our
        website of any such change in ownership or control of your personal
        information. Data Security We take reasonable measures to protect the
        security of your personal information. However, no method of
        transmission over the internet or electronic storage is 100% secure.
        Therefore, we cannot guarantee absolute security. Your Rights and
        Choices You have the right to: Access, correct, or delete your personal
        information. Object to or restrict the processing of your personal
        information. Withdraw consent for marketing communications. Request a
        copy of your personal information. To exercise these rights or for any
        privacy-related concerns, please contact us using the information
        provided in the "Contact Us" section below. Children's Privacy The
        Product is not intended for use by individuals under the age of 16. We
        do not knowingly collect personal information from children.
        child, please contact us, and we will
      </p>
    </div>
  );
};

export default PrivacyPolicy;
