import React from "react";

const TermsOfService = () => {
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
      <h1>Terms of Service</h1>
      <p>
        Please read these Terms of Service ("Terms") carefully before using the
        Cloud Bind software product (the "Product") provided by Cloud Bind
        ("we," "us," or "our"). By using or accessing the Product, you agree to
        be bound by these Terms. If you do not agree to these Terms, you may not
        use the Product. Use of the Product 1.1 License: Subject to your
        compliance with these Terms, we grant you a limited, non-exclusive,
        non-transferable, and revocable license to use the Product for your
        personal or internal business purposes. 1.2 Restrictions: You shall not:
        Copy, modify, distribute, sell, lease, sublicense, or reverse engineer
        the Product. Use the Product in a manner that violates any applicable
        laws or regulations. Use the Product to infringe upon the intellectual
        property rights of others. Attempt to gain unauthorized access to the
        Product or its related systems. 1.3 Account Creation: You may need to
        create an account to access certain features or services within the
        Product. You are responsible for maintaining the confidentiality of your
        account credentials and for all activities that occur under your
        account. Intellectual Property 2.1 Ownership: We retain all right,
        title, and interest in and to the Product, including all intellectual
        property rights. Nothing in these Terms grants you any rights to use our
        trademarks, logos, or other proprietary materials. 2.2 User Content: By
        using the Product, you may submit or upload content, including text,
        images, or other materials ("User Content"). You retain ownership of
        your User Content, but you grant us a worldwide, royalty-free,
        sublicensable, and transferable license to use, reproduce, distribute,
        modify, display, and perform your User Content in connection with the
        Product. Privacy Your privacy is important to us. Please review our
        Privacy Policy [insert hyperlink to Privacy Policy] to understand how we
        collect, use, and protect your personal information in connection with
        the Product. Disclaimer of Warranties The Product is provided on an "as
        is" and "as available" basis. We make no warranties or representations,
        express or implied, regarding the Product, including but not limited to
        its accuracy, reliability, or suitability for any particular purpose. We
        disclaim all warranties to the fullest extent permitted by applicable
        law. Limitation of Liability To the maximum extent permitted by law, we
        shall not be liable for any indirect, incidental, consequential, or
        punitive damages arising out of or in connection with your use of the
        Product, even if we have been advised of the possibility of such
        damages. Our total liability to you for any claim arising out of or
        relating to these Terms or the Product shall not exceed the amount you
        paid, if any, to use the Product. Indemnification You agree to
        indemnify, defend, and hold us harmless from and against any claims,
        damages, liabilities, costs, and expenses (including reasonable
        attorneys' fees) arising out of or relating to your use of the Product,
        your violation of these Terms, or your violation of any rights of any
        other person or entity. Modifications to the Terms We reserve the right
        to modify these Terms at any time. We will notify you of any material
        changes by posting the updated Terms within the Product or through other
        means. Your continued use of the Product after the effective date of the
        modified Terms constitutes your acceptance of the changes. Termination
        We may terminate or suspend your access to the Product, in whole or in
        part, at any time and for any reason, without prior notice or liability.
        Governing Law and Dispute Resolution These Terms shall be governed
      </p>
    </div>
  );
};

export default TermsOfService;
