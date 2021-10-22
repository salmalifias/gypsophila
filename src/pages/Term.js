import React, { Component } from "react";
import HeaderDark from "parts/HeaderDark";
import Footer from "parts/Footer";
import styled from "styled-components";

class Term extends Component {
  render() {
    // const Container = styled.div`
    //     width: 100vw;
    //     height: 100vh;
    // `;

    const Text1 = styled.div`
    font-size: 24px;
    font-weight: 1200;
    text-align: center;
    font-weight: 500;
    margin-bottom: 45px;
    `;
    const Paragraf = styled.div`
        margin-left: 120px;
        margin-right: 120px;
        margin-top: 50px;
        text-align: justify;
    `;

    return (
      <>
        <HeaderDark {...this.props}></HeaderDark>
        {/* <Container> */}
            <Text1> 
            <h2>Terms and Conditions</h2>
            </Text1>
            <Paragraf>
                <p>These terms and conditions outline the rules and regulations for the use of Gypsophila’s Website. </p>
                <p>Gypsophila is located at: </p>
                <p>PT Gypsophila Indonesia </p>
                <p>Sudirman Central Busines District, Senayan, Kebayoran Baru, South Jakarta City, Jakarta 12190 </p>
                <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Gypsophila's website if you do not accept all of the terms and conditions stated on this page. </p>
                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: “MUA” and “User” refers to our beauty service vendors accessing this website and accepting the Company’s terms and conditions. “Clients”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. “Users” refers to Beauticians and Clients accessing this website and accepting the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law of Indonesia. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same. 
                </p>

                <h4>Gypsophila Service</h4>
                <p>Gypsophila is a platform that connects beauticians (individually or collectively beauty service vendors) providing Make Up with clients seeking such services. The Beautician and Clients are both users of the service provided by Gypsophila. 
                </p>
                <p>Gypsophila solely provides a platform for Beauticians and Clients to connect and serves only as a medium to facilitate the provision of Beauty Services. Gypsophila does not provide or contract for Beauty Services, and Beauticians and Clients contract independently for the provision of Beauty Services. Each Client is solely responsible for selecting the Beautician, the Beauty Services to be provided and the location at which Beauty Services will be performed, whether on the premises of a Beautician or at a site designated by the Client. Any decision by a Client to receive Beauty Services or by a Beautician to provide Beauty Services is a decision made in such person's sole discretion and at their own risk. All Users understand and acknowledge that (i) the Company does not conduct background checks on Clients and (ii) any provision of Services in a private location inherently increases the risks involved for both Clients and Beauticians. 
                </p>
                <p>Gypsophila does not have control over the quality, suitability, reliability, timing, durability, legality, failure to provide, or any other aspect whatsoever of any Beauty Services provided by Beauticians nor of the integrity, responsibility or any of the actions or omissions whatsoever of any Beauticians or Clients. Gypsophila makes no representations or warranties whatsoever with respect to Beauty Services offered or provided by Beauticians or requested by Clients through use of the Services, whether in public, private, or offline interactions, or about the accreditation, registration or licensing of any Beautician. You understand that Gypsophila does not routinely screen its Users, inquire into the background of its Users or attempt to verify information provided by any User. Gypsophila does not verify or confirm that any User is who they claim to be or is accurately representing themselves and does not verify or confirm any representations with respect to Beauty Services on the Services. Gypsophila does not assume any responsibility for the accuracy or reliability of this information or any information provided through the Services. 
                </p>
                <p>Notwithstanding the foregoing, Gypsophila may, but is not obligated to, check the background and experience of Beauticians via third-party background check services and first party interviews, including but not limited to a verification of identity and a comprehensive criminal background check, and may terminate a Beautician based on any information discovered during such background checks and first party interviews. Whether or not Gypsophila conducts a background check or first party interview on a Beautician, each Client must decide whether a Beautician is suited to such Client's needs and should exercise caution and common sense to protect their personal safety and property, just as they would when interacting with anyone you don't know. NEITHER COMPANY NOR ITS AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY USER OF THE SERVICES AND YOU HEREBY RELEASE THE COMPANY AND ITS AFFILIATES OR LICENSORS FROM ANY LIABILITY RELATED THERETO. COMPANY AND ITS AFFILIATES AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE ARISING IN CONNECTION WITH YOUR USE OF THE SERVICES. 
                </p>
                <h4>Payment and Cancellation Policy</h4>
                <ol>
                    <li>Payment method available: bank transfer and credit card (by using payment gateway service as a third party). And pay directly to beautician (cash). </li>
                    <li>For bank transfer payment, customer have 24 hours to process the payment, after get a confirmation from Gypsophila. We will cancel the booking if there is no payment within 24 hours. </li>
                    <li>Cancellation within 48 hours: full refund or can be used it for the next booking. </li>
                    <li>Cancellation more than 48 hours until 7 days before the appointment schedule: 50% refund from total amount paid by Customer. </li>
                    <li>Cancellation less than 7 days before the appointment schedule: non-refundable from total amount paid by Customer. </li>
                    <li>We provide full refund for Customer if cancellation is made by Beautician. </li>
                    <li>Service amount less than Rp 1.000.000,- (total): Full Payment </li>
                    <li>Service amount more than Rp 1.000.000,- (total): Customer has options to choose Full Payment or 50% Down Payment (repayment maximum 7 days before the appointment schedule). </li>
                    <li>Gypsophila have an escrow regulation for the safety between Customers and Beauticians. Every payment made by Customer, will be held by Gypsophila as a marketplace, and will be sent to Beautician after the service is done and confirmed by Customer. If there's no confirmation from Customer within 24 hours after the service done, Gypsophila will send the payment to Beautician directly. </li>
                    <li>Gypsophila will hold the payment and take an action if there is any service issue regarding unwanted situation between Customer & Beautician, and will continue the process based on the result. There will be a penalty for any beautician who is responsible for any unwanted case and the account will be suspended for undisclosed period. </li>
                    <li>Customer has to book service based on the real service occasion they need. If there’s any difference between the service that has been booked by customer with the real service occasion. Customer has to pay the real service occasion rate / amount. </li>
                </ol>
                
                <h4>Cookies</h4>
                <p>We employ the use of cookies. By using Gypsophila's website you consent to the use of cookies in accordance with Gypsophila’s privacy policy. </p>
                <p>Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies. </p>
                
                <h4>License</h4>
                <p>Unless otherwise stated, Gypsophila and/or it’s licensors own the intellectual property rights forall material on Gypsophila. All intellectual property rights are reserved. You may view and/or printpages from https://www.Gypsophila.id for your own personal use subject to restrictions set in these terms and conditions. </p>
                <p>You must not: </p>
                <ol>
                    <li>Republish material from https://www.Gypsophila.id </li>
                    <li>Sell, rent or sub-license material from https://www.Gypsophila.id </li>
                    <li>Reproduce, duplicate or copy material from https://www.Gypsophila.id </li>
                    <li>Redistribute content from Gypsophila (unless content is specifically made for redistribution). </li>
                </ol>

                <h4>User Comments</h4>
                <ol>
                    <li>This Agreement shall begin on the date hereof. </li>
                    <li>Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. Gypsophila does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Gypsophila, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws Gypsophila shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. </li>
                    <li>Gypsophilareserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions. </li>
                    <li>You warrant and represent that: 
                        <ul>
                            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; </li>
                            <li>The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party; </li>
                            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy </li>
                            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. </li>
                        </ul>
                    </li>
                    <li>You hereby grant to Gypsophila a non-exclusive royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media. </li>
                </ol>

                <h4>Hyperlinking to Our Content</h4>
                <ol>
                    <li>The following organizations may link to our Web site without prior written approval: 
                        <ul>
                            <li>Government agencies; </li>
                            <li>Search engines; </li>
                            <li>News organizations;</li>
                            <li>Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and </li>
                            <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site. </li>
                        </ul>
                    </li>
                    <li>These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site. </li>
                    <li>We may consider and approve in our sole discretion other link requests from the following types of organizations: 
                        <ul>
                            <li>commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union; </li>
                            <li>dot.com community sites; </li>
                            <li>associations or other groups representing charities, including charity giving sites, </li>
                            <li>online directory distributors; </li>
                            <li>internet portals; </li>
                            <li>accounting, law and consulting firms whose primary clients are businesses; and </li>
                            <li>educational institutions and trade associations. </li>
                        </ul>
                    </li>
                </ol>
                
                <p>We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of companyName and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization. </p>
                <p>These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site. </p>
                <p>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to hello@Gypsophila.id. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response. </p>
                
                <p>Approved organizations may hyperlink to our Web site as follows:</p>
                <ol> 
                    <li>By use of our corporate name; or </li>
                    <li>By use of the uniform resource locator (Web address) being linked to; or </li>
                    <li>By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site. </li>
                </ol>
                <p>No use of Gypsophila’s logo or other artwork will be allowed for linking absent a trademark license agreement. </p>
                
                <h4>Iframes</h4>
                <p>Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site. </p>
                
                <h4>Content Liability</h4>
                <p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights. </p>

                <h4>Reservation of Rights</h4>
                <p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions. </p>

                <h4>Removal of Links from Our Website</h4>
                <p>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you. </p>
                <p>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date. </p>

                <h4>Proprietary Rights</h4>
                <p>The Services contains content and technology of the Company that is protected by copyright, trademark, patent, trade secret and other laws. The Company owns intellectual property rights to any protectable part of the Services, including but not limited to the design, artwork, logos, functionality, and documentation (collectively, the "Company Property"). You may not copy, modify, or reverse engineer any part of the Services or the Company Property. </p>
                <p>In order to operate the Services, the Company needs to make certain use of your publicly posted Content. Therefore, by posting, uploading or submitting to Gypsophila, or making available for inclusion in publicly accessible areas of Gypsophila, any text, images, photos, graphics, audio or video, including any content protected by intellectual property rights (collectively, "Content"), you represent that you have full authorization to do so. You also hereby grant Gypsophila a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, distribute, reproduce, modify, adapt, publicly perform, publicly display and make derivative works of such Content in connection with the Services and any services or products affiliated with the Services, regardless of the form of media used or of whether such services or products now exist or are developed in the future. This license exists only for as long as you elect to continue to include such Content on Gypsophila and will terminate at the time such Content is removed from the Services by you or by Gypsophila; provided that the license will not terminate and will continue notwithstanding any removal of the Content or termination of your use of the Services to the extent that Gypsophila needs to use such Content in connection with any investigation or in compliance with any laws. </p>

                <h4>Disclaimer</h4>
                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will: </p>
                <ol>
                    <li>limit or exclude our or your liability for death or personal injury resulting from negligence; </li>
                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation; </li>
                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or </li>
                    <li>exclude any of our or your liabilities that may not be excluded under applicable law. </li>
                </ol>
                <p>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty. </p>
                <p>To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. </p>

                <h4>Contact Information</h4>
                <p>if you have any queries regarding any of our terms, please contact us at hello@Gypsophila.id </p>
                <p>For beauty partners, you can contact your Account Manager if you have any queries regarding any of your Gypsophila account and membership.</p>
            </Paragraf>
            <Footer/>
        {/* </Container>  */}
      </>
    );
  }
}

export default Term;