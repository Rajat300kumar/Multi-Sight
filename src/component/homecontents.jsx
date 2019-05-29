import React, { Component } from "react";
import styled from "styled-components";

const Image = styled.img`
  padding: 20px;
  height: 230px;
`;
class HomeContent extends Component {
  state = {};
  render() {
    return (
      <>
        <div style={{ display: "flex", height: "auto" }}>
          <div>
            <Image
              src="https://cdn0.froala.com/assets/editor/pages/B/frameworks/react-6a9ca3fcd0c84c07c1d8bbbad0eb7dfe.svg"
              alt=""
            />
          </div>

          <div
            style={{
              justifyContent: "left",
              padding: 20,
              fontFamily: " sans-serif",
              textAlign: "left",
              fontSize: 18,
              color: "#6c757d",
              maxwidth: 41.666667
            }}
          >
            React (also known as React.js or ReactJS) is a JavaScript library
            for building user interfaces. It is maintained by Facebook and a
            community of individual developers and companies. React can be used
            as a base in the development of single-page or mobile applications,
            as it's optimal only for its intended use of being the quickest
            method to fetch rapidly changing data that needs to be recorded I
            learn who to create a static site genrator .In this we ussed
            fontawsome for the icon. And for the styleing i used the
            Styled-component.
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              justifyContent: "left",
              padding: 20,
              fontFamily: " sans-serif",
              textAlign: "left",
              fontSize: 18,
              color: "#6c757d"
            }}
          >
            Hugo is a static site generator written in Go. Originally created by
            Steve Francia in 2013, Hugo has seen a great increase in both
            features and performance .Hugo is an open source project licensed
            under the Apache License.Being able to generate most websites within
            seconds At less than one ms, Hugo is renowned as "The world’s
            fastest framework for building websites". Hugo takes data files,
            i18n bundles, configuration, templates for layouts, static files,
            and content written in Markdown and renders a static website.
          </div>
          <div>
            <Image
              src="https://cms-assets.tutsplus.com/uploads/users/34/posts/27319/preview_image/hugo.jpg"
              alt=""
            />
          </div>
        </div>
        <div style={{ display: "flex", height: "auto" }}>
          <div>
            <Image
              src="https://i.dlpng.com/static/png/4033681_thumb.png"
              alt=""
            />
          </div>
          <div
            style={{
              justifyContent: "right",
              padding: 20,
              fontFamily: " sans-serif",
              textAlign: "left",
              fontSize: 18,
              color: "#6c757d"
            }}
          >
            GitHub, a subsidiary of Microsoft, is an American web-based hosting
            service for version control using Git. It is mostly used for
            computer code. It provides access control and several collaboration
            features such as bug tracking, feature requests, task management,
            and wikis for every project. GitHub offers plans for enterprise,
            team, pro and free accounts which are commonly used to host
            open-source software projects. As of January 2019, GitHub offers
            unlimited private repositories to all plans, including free
            accounts. GitHub reports having over 37 million users and 57 million
            repositories
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              justifyContent: "left",
              padding: 20,
              fontFamily: " sans-serif",
              textAlign: "left",
              fontSize: 18,
              color: "#6c757d"
            }}
          >
            Mike Sheridan, and Patrick Naughton initiated the Java language
            project in June 1991.Java was originally designed for interactive
            television, but it was too advanced for the digital cable television
            industry at the time. I learn from course cube pvt.ltd. In this
            language i learn many this like JDBC.
          </div>
          <div>
            <Image
              src="http://pluspng.com/img-png/java-png-png-300x225-java-logo-no-background-300.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default HomeContent;
