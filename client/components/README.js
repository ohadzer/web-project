import React, { Component } from "react";
import { NavWrapper, IconWrapper } from "./navbar/Nav-style";

export default class README extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <IconWrapper className="pr-3">
            <span>
              <i className="fas fa-laptop" />
            </span>
          </IconWrapper>
          <h2 className="navbar-nav text-main-title">Laptop Store</h2>
        </NavWrapper>
        <div className="container mx-auto text-center">
          <h1 className="text-main-title text-center py-4 text-warning"> README Page </h1>
          <h4 className="grey-text text-darken-3 pb-3">
            {" "}
            Here you can choose a tab and see each team member README page{" "}
          </h4>
          <ul className="nav nav-tabs" id="READMETabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active btn-warning font-wegiht-bold"
                id="AlonTab"
                data-toggle="tab"
                href="#AlonTabContent"
                role="tab"
                aria-controls="AlonTabContent"
                aria-selected="true"
              >
                Alon Howben
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn-warning font-wegiht-bold"
                id="HadarTab"
                data-toggle="tab"
                href="#HadarTabContent"
                role="tab"
                aria-controls="HadarTabContent"
                aria-selected="false"
              >
                Hadar Mordechai
              </a>
            </li>
          </ul>
          <div className="tab-content text-left" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="AlonTabContent"
              role="tabpanel"
              aria-labelledby="AlonTab"
            >
              <ol className="pt-3">
                <li className="pb-3">
                  <u>Full name:</u> Alon Howben <br />
                  <u>ID:</u> 201663325 <br />
                </li>
                <li className="pb-3">
                  {" "}
                  <u>Store name:</u> Laptop Store
                </li>
                <li className="pb-3">
                  {" "}
                  <u>What are you selling?</u> Laptops
                </li>
                <li>
                  {" "}
                  <u>What additional pages did you add? How to operate them</u>
                  <br />
                  <p>
                    <b>Additional Pages:</b> <br />
                    Reviews Page - We want to give our customers the best experience thay can have.
                    So we decided to make a review section that will give a few videos of well-known youtubers trying out the products that we sell.
                    <br />
                    Contact Us - if you wish to ask us a question or just send a message, fill in the details in the form
                    and the admin will see it in the contcts page. <br /> "My Account" user page - shows your
                    details and displays your previous purchases.
                    <br />
                    Inquiries - only visible for admin. displays the messages from the users. admin
                    can mark a message as done and handled. the page is divided to tabs to filter
                    active/inactive/all inquiries.
                    <br />
                    <b>Special instructions:</b> <br />
                    The admin Email: admin@laptopStore.com, Password: Aa123456
                    <br />
                    The user to checkout with paypal is: laptopspaypal@gmail.com, password: laptopspaypal{" "}
                    <br /> 
                    To run the test.js you should run the server with - "NODE_ENV=test npm start",{" "}
                    <br />
                    go to the src folder (where the test.js file is) and run with "node test.js" the
                    test file.
                    <br />
                  </p>
                </li>
                <li>
                  {" "}
                  <u> What was hard to do?</u>
                  <br />
                  <p>
                    I had a hard time understanding the connection between client and server and
                    writing in react for the first time. We watched at least 10 hours of tutorials for the project.
                    But with all the time and effort I can say that I have learnd a lot!
                  </p>
                </li>
                <li>
                  {" "}
                  <u> Who is your partner?</u> My partner is Hadar Mordechai - 314881830 <br />
                  <u> What did you do? What did your partner do?</u> <br />
                  <p>
                    Throughout the project the coding part was done together. We studied and made
                    some research each one on our own and then started coding 
                    together. It was much easier and fun doing it this way. A few of the things I had a big
                    part in was the work with the DB/server requests and manage the users - like the
                    sign in and sign up components. A few of the things Hadar worked on were the
                    additional functional pages, cart and bootstrap.
                  </p>
                </li>
                <li>
                  {" "}
                  <u> Specify all the different route your app supports</u> <br />
                  <p>
                    / main page of the app, /cart, /signIn, /signUp, /admin – admin’s page, /search
                    – result page of navbar search,/details – a detail page for each laptop,
                    /completePay – if a user completed a purchase he will be redirected to here,
                    /userPage, /reviews, /contactUs, /adminContactUs and
                    /README.html.
                  </p>
                </li>
                <li>
                  {" "}
                  <u> How did you make your store secured?</u>
                  <br />
                  <p>
                    We used private route to authenticate the session and we authenticated the
                    session in every server request. With redis the server is actually safer because it is locally stored on the computer, in the redis DB.
                  </p>
                </li>
                <li>
                  {" "}
                  <u> Did you implement the store using react.js?</u> Of Course.
                </li>
              </ol>
            </div>
            <div
              className="tab-pane fade"
              id="HadarTabContent"
              role="tabpanel"
              aria-labelledby="HadarTab"
            >
              <ol className="pt-3">
                <li className="pb-3">
                  <u>Full name:</u> Hadar Mordechai <br />
                  <u>ID:</u> 314881830 <br />
                </li>
                <li className="pb-3">
                  {" "}
                  <u>Store name:</u> Laptop Store
                </li>
                <li className="pb-3">
                  {" "}
                  <u>What are you selling?</u> Laptops
                </li>
                <li>
                  {" "}
                  <u>What additional pages did you add? How to operate them</u>
                  <br />
                  <p>
                    
                    <b>We added 4 additional pages:</b>
                    <br /> Reviews Page - We want to give our customers the best experience thay can have.
                    So we decided to make a review section that will give a few videos of well-known youtubers trying out the products that we sell.{" "}
                    <br />
                    Contact Us – a contact us form to the store. In order to operate the page you
                    simply fill up the form and submit. <br />
                    Manage inquiries – a page which is available only to the admin user. In this
                    page the admin can see all the inquires (the contact us from all users). As you
                    enter the page you see all inquiries, and you can switch between the tabs to see
                    only active inquiries or inactive inquiries as well. In addition you can also
                    mark an inquiry as done by clicking the button next to each inquiry.
                    <br /> Users page - were you can see details about the user and recent purchase.
                    <br />
                    <b>Special instructions: </b>
                    <br />
                    The admin Email - admin@laptopStore.com, password - Aa123456
                    <br />
                    The user to checkout with paypal is: laptopspaypal@gmail.com, password:laptopspaypal{" "}
                    <br />
                    To run the test.js you should run the server with - "NODE_ENV=test npm start",{" "}
                    <br />
                    go to the src folder (where the test.js file is) and run with "node test.js" the
                    test file.
                    
                  </p>
                </li>
                <li>
                  {" "}
                  <u> What was hard to do?</u>
                  <br />
                  <p>
                    I think that the most difficult part was to start the project. It is the first
                    time I encountered with a coding project in this size without any prepared code
                    given to us. Understanding hoe to work with redis was also very hard.
                  </p>
                </li>
                <li>
                  {" "}
                  <u> Who is your partner?</u> Alon Howben - 201663325 <br />
                  <u> What did you do? What did your partner do?</u> <br />
                  <p>
                    We did most of the coding and the project itself together. we spent a lot of time trynig to understand all the missing parts.
                    I focused on the additional pages and
                    the app styling, while Alon focused on the user management and the workflow with
                    the DB/server.
                  </p>
                </li>
                <li>
                  {" "}
                  <u> Specify all the different route your app supports</u> <br />
                  <p>
                    / – to see all the laptops, /cart,/details – to see a laptops description, /search –
                    to see the results of the search from the navbar, /completePay – a page when a
                    checkout was successful, /signIn, /signUp, /admin – admin’s page, /userPage,
                    /reviews, /contactUs, /adminContactUs – the manage
                    inquiries page, and this page /README.html.
                  </p>
                </li>
                <li>
                  {" "}
                  <u> How did you make your store secured?</u>
                  <br />
                  <p>
                    In order to make the store secured we did a few things. Among those things are –
                    we added a Private Route for all the routes which you need to be a user in order
                    to see, we tried to keep all content available for the user without private or
                    confidential information, we used the cookies to check the sessions etc.
                  </p>
                </li>
                <li>
                  {" "}
                  <u> Did you implement the store using react.js?</u> Yes.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
