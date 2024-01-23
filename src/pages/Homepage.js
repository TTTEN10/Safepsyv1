import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.footer}>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.headingAndSupportingText}>
                <div className={styles.heading}>
                  Get notified about our services
                </div>
                <div className={styles.supportingText}>
                  Stay up to date with the latest announcements, and articles.
                </div>
              </div>
              <div className={styles.emailCapture}>
                <div className={styles.inputField}>
                  <div className={styles.inputFieldBase}>
                    <div className={styles.inputFieldBase}>
                      <div className={styles.label}>Email</div>
                      <div className={styles.input}>
                        <div className={styles.content1}>
                          <img
                            className={styles.mailIcon}
                            alt=""
                            src="/mail1.svg"
                          />
                          <div className={styles.text}>Enter your email</div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/help-icon1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.buttonBase}>
                    <div className={styles.joinOurWaitlist}>
                      Join our waitlist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.container}>
            <div className={styles.content2}>
              <div className={styles.supportingText1}>
                Enabling safe data management between patients and
                psychologists.
              </div>
              <div className={styles.logoAndSupportingText}>
                <img
                  className={styles.logoAndSupportingTextChild}
                  alt=""
                  src="/rectangle-14321@2x.png"
                />
                <div className={styles.safepsy}>SafePsy</div>
              </div>
              <div className={styles.links}>
                <div className={styles.headingAndSupportingText}>
                  <div className={styles.heading1}>Pages</div>
                  <div className={styles.footerLinks}>
                    <div className={styles.footerLink}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.downloadForFree}>Home</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.downloadForFree}>Services</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.downloadForFree}>About us</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footerLink}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.downloadForFree}>Careers</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footerLink4}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.joinOurWaitlist}>
                            Additional
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footerLink4}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.joinOurWaitlist}>
                            Additional
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footerLink4}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.joinOurWaitlist}>
                            Additional
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footerLink4}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.joinOurWaitlist}>
                            Additional
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.footerLink4}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.joinOurWaitlist}>
                            Additional
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.headingAndSupportingText}>
                  <div className={styles.heading1}>Contact</div>
                  <div className={styles.footerLinks1}>
                    <div className={styles.footerLink9}>
                      <div className={styles.button1}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.downloadForFree}>
                            <p className={styles.contactsafepsycom}>
                              contact@safepsy.com
                            </p>
                            <p className={styles.contactsafepsycom}>
                              Instagram
                            </p>
                            <p className={styles.linkedin}>LinkedIn</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.freeGuide}>
        <div className={styles.downloadForFreeNowWrapper}>
          <div className={styles.downloadForFree}>Download for free now</div>
        </div>
        <div className={styles.downloadAndReadContainer}>
          <p className={styles.downloadAndRead}>
            Download and read for free SafePsy’s CEO research paper about the
            challenges of enabling safe telepsychology.
          </p>
          <p className={styles.linkedin}></p>
          <p className={styles.linkedin}>
            Data security, storage and management are essential for
            telepsychology tools and services, we first focused about the
            current technologic issues to implement an innovative solution.
          </p>
        </div>
        <div className={styles.whyYouShould}>
          Why you should be aware about your data with your telepsychologist
        </div>
        <img
          className={styles.pexelsAndreaPiacquadio39785Icon}
          alt=""
          src="/pexelsandreapiacquadio3978564-2@2x.png"
        />
        <img className={styles.product41Icon} alt="" src="/product4-1@2x.png" />
        <img className={styles.headingIcon} alt="" src="/heading.svg" />
      </div>
      <div className={styles.reviews}>
        <div className={styles.reviewsChild} />
        <div className={styles.ourPartnersWrapper}>
          <div className={styles.ourPartners}>Our partners</div>
        </div>
      </div>
      <div className={styles.introduction}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <div className={styles.coachingParent}>
              <div className={styles.coaching}>1:1 Coaching</div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </div>
            </div>
          </div>
          <div className={styles.browserInternetWebNetworkDParent}>
            <img
              className={styles.frameIcon}
              alt=""
              src="/browserinternetwebnetworkdiagram1-1.svg"
            />
            <div className={styles.coachingParent}>
              <div className={styles.coaching}>Psychotherapy</div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </div>
            </div>
          </div>
          <div className={styles.browserInternetWebNetworkDGroup}>
            <img
              className={styles.frameIcon}
              alt=""
              src="/browserinternetwebnetworkdiagram1-11.svg"
            />
            <div className={styles.coachingParent}>
              <div className={styles.coaching}>Group Coaching Sessions</div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.getMatchWithTheProfessionnParent}>
          <div className={styles.getMatchWith}>
            Get match with the professionnal you are looking for!
          </div>
          <div
            className={styles.ourMissionIs}
          >{`Our mission is to bring a bring an ergonomic telepsychology platform to ensure data security between you and your psychologist. `}</div>
        </div>
        <img
          className={styles.pepiteFranceLogoBleuRvbCmIcon}
          alt=""
          src="/pepite-france-logo-bleu-rvb-cmjn-1@2x.png"
        />
      </div>
      <div className={styles.navigation}>
        <div className={styles.background}>
          <div className={styles.background}>
            <div className={styles.background1} />
          </div>
          <div className={styles.divider} />
          <div className={styles.divider1} />
        </div>
        <div className={styles.menu}>
          <div className={styles.navbar}>
            <div className={styles.button11}>
              <div className={styles.joinOurWaitlist}>Join our waitlist</div>
            </div>
            <div className={styles.homeParent}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>Services</div>
              <div className={styles.aboutUs}>About us</div>
            </div>
          </div>
        </div>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <img
              className={styles.logoChild}
              alt=""
              src="/rectangle-1432@2x.png"
            />
            <b className={styles.safepsy1} />
          </div>
        </div>
      </div>
      <div className={styles.safepsy2}>SafePsy</div>
      <img
        className={styles.homepageChild}
        alt=""
        src="/rectangle-14322@2x.png"
      />
      <div className={styles.sectionWrapper}>
        <div className={styles.section2}>
          <div className={styles.container2}>
            <div className={styles.section3}>
              <div className={styles.content3}>
                <div className={styles.headingAndSupportingText1}>
                  <div className={styles.headingAndBadge}>
                    <div className={styles.heading3}>
                      Innovative technology to service your confidentiality
                    </div>
                  </div>
                  <div className={styles.supportingText2}>
                    Our mission is to bring ergonomic tools for enabling safe
                    telepsychology with decentralized solutions.
                  </div>
                </div>
                <div className={styles.emailCapture1}>
                  <div className={styles.inputField1}>
                    <div className={styles.inputFieldBase1}>
                      <div className={styles.inputFieldBase}>
                        <div className={styles.label}>Email</div>
                        <div className={styles.input1}>
                          <div className={styles.content1}>
                            <img
                              className={styles.mailIcon}
                              alt=""
                              src="/mail2.svg"
                            />
                            <div className={styles.text}>Name</div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/help-icon2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.inputWithLabel2}>
                      <div className={styles.label2}>Email</div>
                      <div className={styles.input2}>
                        <div className={styles.content1}>
                          <img
                            className={styles.mailIcon}
                            alt=""
                            src="/mail2.svg"
                          />
                          <div className={styles.text}>Enter your email</div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/help-icon2.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText1}>
                      {`We care about your data in our `}
                      <span className={styles.privacyPolicy}>
                        privacy policy
                      </span>
                    </div>
                    <div className={styles.button}>
                      <div className={styles.buttonBase11}>
                        <div className={styles.joinOurWaitlist}>
                          Join our waitlist
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.contentDigital1Icon}
        alt=""
        src="/contentdigital-1@2x.png"
      />
    </div>
  );
};

export default Homepage;
