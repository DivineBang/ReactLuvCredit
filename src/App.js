
import React, { useEffect, useState } from 'react';
import './index.css';

import FaqSection from "./components/FaqSection.jsx";
import Quiz from "./components/Quiz.jsx";

import { Link, animateScroll as scroll } from 'react-scroll';

const scrollToSection = (sectionId) => {
  scroll.scrollTo(sectionId, {
    duration: 800,  
    smooth: 'easeInOutQuart'  
  });
};

function App() {

  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    // Имитация задержки загрузки (вы можете заменить этот код на свою логику загрузки)
    const fakeLoading = setTimeout(() => {
      setPreloaderVisible(false);
    }, 300);

    // Убедитесь, что таймер очищается при размонтировании компонента
    return () => clearTimeout(fakeLoading);
  }, []);

 
  return (
    <div className="App">
      {preloaderVisible && (
        <div id='preloader'>
          <img src="img/preloader.gif" alt="preloader" />
        </div>
      )}
    <header className="header" id="header">
	    <div className="container">
            <div className="header__set">
                <a href="#quiz" className="logo">
                    <img src="img/logo.png" alt="logo" className="logo__img"/>
                </a>
                <div className="rectangle__set">
                    <div className="rectangle">
                        <span className="rectangle__span">
                            Step 1
                        </span>
                        <h3 className="rectangle__title">
                            Complete Form
                        </h3>
                        <p className="rectangle__text">
                            We use this information to connect you with lenders that want to work with you
                        </p>
                    </div>
                    <div className="rectangle">
                        <span className="rectangle__span">
                            Step 2
                        </span>
                        <h3 className="rectangle__title">
                            Pick Loan Offer
                        </h3>
                        <p className="rectangle__text">
                            Connect with one or more loan offers and decide if it’s right for you
                        </p>
                    </div>
                    <div className="rectangle">
                        <span className="rectangle__span">
                            Step 3
                        </span>
                        <h3 className="rectangle__title">
                            Get Cash
                        </h3>
                        <p className="rectangle__text">
                            Receive your funds in as fast as one business day
                        </p>
                    </div>
                </div>
                
                
                <a href="#quiz" className="btn header__btn">
                    Back
                </a>
            </div>
        </div>
    </header>
    <section className="offer" id="offer">
	    <div className="container">
            <div className="offer__set">
                <div className="offer__column">
                    <div className="offer__wrapp_title">
                        <h1 className="offer__title">
                            Empower Your Dreams 
                        </h1>
                        <h2 className="offer__title_mod">
                            with a Loan Today 
                        </h2>
                    </div>
                    <p className="offer__text">
                        Make the most of our network of reliable affiliate lenders and lending partners, potentially qualifying you for up to $3,000. Our service is completely free and has no impact on your credit score
                    </p>
                    <div className="offer__wrapp">
                        <p className="offer__wrapp_text">
                            Complete Your Form
                        </p>
                        <p className="offer__wrapp_text">
                            Get Personal Lender
                        </p>
                        <p className="offer__wrapp_text">
                            Take Your Loan!
                        </p>
                        
                    </div>
                    <img src="img/dollar.svg" alt='dollar'  className="offer__icon"/>
                    <a href="#quiz" className="btn btn__offer">
                        Back
                    </a>
                </div>
                <div className="offer__img">
                    <img src="img/offer.png" alt='offer' />
                </div>
            </div>
        </div>
    </section>
    <div className="rectangle__set_mob">
        <div className="rectangle">
            <span className="rectangle__span">
                Step 1
            </span>
            <h3 className="rectangle__title">
                Complete Form
            </h3>
            <p className="rectangle__text">
                We use this information to connect you with lenders that want to work with you
            </p>
        </div>
        <div className="rectangle">
            <span className="rectangle__span">
                Step 2
            </span>
            <h3 className="rectangle__title">
                Pick Loan Offer
            </h3>
            <p className="rectangle__text">
                Connect with one or more loan offers and decide if it’s right for you
            </p>
        </div>
        <div className="rectangle">
            <span className="rectangle__span">
                Step 3
            </span>
            <h3 className="rectangle__title">
                Get Cash
            </h3>
            <p className="rectangle__text">
                Receive your funds in as fast as one business day
            </p>
        </div>
    </div>
    <section className="quiz" id="quiz">
	    <div className="container">
            <div className="quiz__set">
                <div className="quiz__column">
                    <h2 className="quiz__title">
                        Complete this form to apply
                    </h2>
                    <img src="img/Arrow2.svg" alt='arrow' className="quiz__img"/>
                    <p className="quiz__text">
                        No additional steps required
                    </p>
                </div>
                
                <Quiz/>
            </div>
        </div>
    </section>
    <section className="tab" id="tab">
        <div className="container">
            <div className="tab__set">
                <div className="tab__wrapp">                  
                    <img src="img/bank.svg" alt='bank' className="tab__img"/> 
                    <h4 className="tab__title">
                        Reliable lenders
                    </h4>
                    <p className="tab__text">
                        We will connect you with an approved lender. The process of getting a loan is quite simple. All you need to do is fill out the form on the website
                    </p>
                </div>
                <div className="tab__wrapp tab__wrapp_mod">                  
                    <img src="img/date.svg" alt='date' className="tab__img"/> 
                    <h4 className="tab__title">
                        Speed is our priority
                    </h4>
                    <p className="tab__text">
                        Our online service aims to connect you with a suitable lender quickly. The procedure is very short: just fill out our secure online form. After submitting your details, you will be redirected to the lender's website to read the loan terms and conditions, which will include all applicable rates and fees. If you accept the terms, the lender will transfer the funds directly to your bank account, often as early as the next business day. We process each request with accuracy and efficiency.
                    </p>
                </div>
                <div className="tab__wrapp">                  
                    <img src="img/card.svg" alt='card' className="tab__img"/> 
                    <h4 className="tab__title">
                        Credit is your concern
                    </h4>
                    <p className="tab__text">
                        A personal loan caused by various needs, such as unexpected medical expenses, is a private matter. Your privacy is important, which is why we partner with trusted lenders who are ready to help.
                    </p>
                </div>
                
                    
            </div>
        </div>    
    </section>
    <FaqSection/>
    <section className="slider" id="slider">
	    <div className="container">
            <div className="center ">
                <div className="center-wrapp">                  
                    <img src="img/slider1.svg" alt='slider' className="center-img"/>
                </div>
                <div className="center-wrapp">                  
                    <img src="img/slider2.svg" alt='slider' className="center-img"/>
                </div>
                <div className="center-wrapp">                  
                    <img src="img/slider3.svg" alt='slider' className="center-img"/>
                </div>
                <div className="center-wrapp">                  
                    <img src="img/slider4.svg" alt='slider' className="center-img"/>
                </div>
                <div className="center-wrapp">                  
                    <img src="img/slider5.svg" alt='slider' className="center-img"/>
                </div>
                <div className="center-wrapp">                  
                    <img src="img/slider6.svg" alt='slider' className="center-img"/>
                </div>        
            </div>
        </div>
    </section>
    <section className="lender" id="lender">
	    <div className="container">
            <div className="lender__set">
                <div className="lender__wrapp_title">
                    <h1 className="lender__title_first">
                        Your lender
                    </h1>
                    <h2 className="lender__title_mod">
                        is already waiting
                    </h2>
                </div>
                <div className="lender__wrapp">
                    <div className="lender__text">
                        No hidden fees
                    </div>
                    <div className="lender__text">
                        No prepayment penalties
                    </div>
                    <div className="lender__text">
                        No origination fees
                    </div>  
                </div>
                <h2 className="lender__title_second">
                    Just complete quick form to pick one of the best
                </h2>
                <Link
                  to="quiz"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="btn lender__btn"
                  style={{ cursor: 'pointer' }}
                  onClick={() => scrollToSection('quiz')}
                >
                  Back
                </Link>
               
            </div>
            
        </div>
    </section>
    <section className="list" id="list">
	    <div className="container">
            <div className="list__set">
                <a href="#quiz" className="list__item">About Us</a>
                <a href="#quiz" className="list__item">Why Choose Us</a>
                <a href="#quiz" className="list__item">Questions</a>
                <a href="#quiz" className="list__item">Definitions</a>
                <a href="#quiz" className="list__item">Rates & Fees</a>
                <a href="#quiz" className="list__item">Privacy Policy</a>
                <a href="#quiz" className="list__item">Terms of Use</a>
                <a href="#quiz" className="list__item">Disclaimer</a>
                <a href="#quiz" className="list__item">Contact</a>
            </div>
        </div>
    </section>
    <footer className="footer" id="footer">
        <div className="container">
            <div className="footer__set">
                <h3 className="footer__title">
                    Important Disclosures. Please Read Carefully.
                </h3>
                <p className="footer__text">
                    Persons facing serious financial difficulties should consider other alternatives or should seek out professional financial advice.
                    This website is not an offer to lend. Wizzay.com is not a lender or lending partner and does not make loan or credit decisions. Wizzay.com connects interested persons with a lender or lending partner from its network of approved lenders and lending partners. Wizzay.com does not control and is not responsible for the actions or inactions of any lender or lending partner, is not an agent, representative or broker of any lender or lending partner, and does not endorse any lender or lending partner. Wizzay.com receives compensation from its lenders and lending partners, often based on a ping-tree model similar to Google AdWords where the highest available bidder is connected to the consumer. Regardless, Wizzay.com’s service is always free to you. In some cases, you may be given the option of obtaining a loan from a tribal lender. Tribal lenders are subject to tribal and certain federal laws while being immune from state law including usury caps. If you are connected to a tribal lender, please understand that the tribal lender’s rates and fees may be higher than state-licensed lenders. Additionally, tribal lenders may require you to agree to resolve any disputes in a tribal jurisdiction. You are urged to read and understand the terms of any loan offered by any lender, whether tribal or state-licensed, and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
                    This service is not available in all states. If you request to connect with a lender or lending partner in a particular state where such loans are prohibited, or in a location where Wizzay.com does not have an available lender or lending partner, you will not be connected to a lender or lending partner. You are urged to read and understand the terms of any loan offered by any lender or lending partner, and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
                    By submitting your information via this website, you are authorizing Wizzay.com and its partners to do a credit check, which may include verifying your social security number, driver license number or other identification, and a review of your creditworthiness. Credit checks are usually performed by one of the major credit bureaus such as Experian, Equifax and TransUnion, but also may include alternative credit bureaus such as Teletrack, DP Bureau or others. You also authorize Wizzay.com to share your information and credit history with a network of approved lenders and lending partners.
                    Our lenders offer loans with an Annual Percentage Rate (APR) of 35.99% and below. For qualified consumers, the maximum APR (including the interest rates plus fees and other costs) is 35.99%. All loans are subject to the lender’s approval based on its own unique underwriting criteria.
                    Example: Loan Amount: $4,300.00, Annual Percentage Rate: 35.99%. Number of Monthly Payments: 30. Monthly Payment Amount: $219.36. Total Amount Payable: $6,581.78 Loans include a minimum repayment plan of 12 months and a maximum repayment plan of 30 months.
                </p>
            </div>
            <div className="footer__set">
                <h3 className="footer__title">
                    Lender’s or Lending Partner’s Disclosure of Terms.
                </h3>
                <p className="footer__text">
                    The lenders and lending partners you are connected to will provide documents that contain all fees and rate information pertaining to the loan being offered, including any potential fees for late-payments and the rules under which you may be allowed (if permitted by applicable law) to refinance, renew or rollover your loan. Loan fees and interest rates are determined solely by the lender or lending partner based on the lender’s or lending partner’s internal policies, underwriting criteria and applicable law. Wizzay.com has no knowledge of or control over the loan terms offered by a lender and lending partner. You are urged to read and understand the terms of any loan offered by any lenders and lending partners and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
                </p>
            </div>
            <div className="footer__set">
                <h3 className="footer__title">
                    Late Payments Hurt Your Credit Score
                </h3>
                <p className="footer__text">
                    Please be aware that missing a payment or making a late payment can negatively impact your credit score. To protect yourself and your credit history, make sure you only accept loan terms that you can afford to repay. If you cannot make a payment on time, you should contact your lenders and lending partners immediately and discuss how to handle late payments.
                </p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
