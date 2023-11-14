import React, { useState } from 'react';


function Card({ title, text }) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`card__wrapp ${isActive ? 'active' : ''}`} onClick={handleToggle}>
      <div className="card__wrapp_board"></div>
      <h4 className="card__wrapp_title">{title}</h4>
      <img src="img/plus.svg" alt="" className="card__wrapp_img" style={{ transform: `translateY(-50%) rotate(${isActive ? '-45deg' : '0deg'})` }} />
      <div className={`card__text ${isActive ? 'active' : ''}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <section className="card" id="card">
      <div className="container">
        <h1 className="card__title">Frequently Asked Questions</h1>
        <div className="card__set">
          <div className="card__left">
            <Card
              title="How much can I expect to receive?"
              text="The loan amount is determined by factors such as your state of residence and laws (please note that loans are not available in all states), as assessed by the lender or lending partner. Typically, lenders in our network provide loans between $300 and $3,000."
            />
            <Card
              title="What measures ensure the security of my personal data?"
              text="We use standard security protocols and advanced encryption technologies to protect your personal information. All your data is transmitted and stored in an encrypted format. For more information, please refer to our privacy policy"
            />
            <Card
              title="What's the Duration of the Process?"
              text="Filling out our secure online form is a quick task, taking only a few minutes. As soon as we receive your information, we swiftly commence the search for a lender or lending partner willing to assist you. You can expect a response from one of our partners within minutes. Final approval and funding usually take place within 24-48 hours"
            />
          </div>
          <div className="card__right">
            <Card
                title="Can I qualify for a Personal Loan with a low credit score?"
                text="While having bad credit doesn't necessarily mean you can't get a personal loan, it does pose challenges and may make finding a lender more difficult"
              />
            <Card
                title="What is the reason for requesting my personal information in your form?"
                text="Our form requests your personal information to ensure the security of your personal loan request and to be able to contact you regarding your request. We are committed to keeping your data confidential and using it solely to process your microloan application"
              />
            <Card
                title="What is necessary to secure a personal loan?"
                text="As we aren't a lending institution, the lenders we connect you with will have their own set of prerequisites. These could involve having a regular income, being at least 18 years old, and possessing an active bank account. Other conditions may also be applicable."
              />
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
