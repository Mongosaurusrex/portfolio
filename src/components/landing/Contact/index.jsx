import React from "react";
import { Container } from "components/common";
import contact from "assets/illustrations/contact.svg";
import { Wrapper, Details, Thumbnail } from "./styles";
import styled from "styled-components";
import social from "components/theme/Footer/social.json";

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>
        If I managed to catch your interest then don't hesitate to contact me!
      </h1>
      <ul>
        <li>Phone: +46707760458</li>
        <li>Email: nathan.dygant@gmail.com</li>
        <li>Or on various platforms:</li>
        <li>
          <Links>
            {social.map(({ id, name, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`follow me on ${name}`}
              >
                <img width="24" src={icon} alt={name} />
              </a>
            ))}
          </Links>
        </li>
      </ul>
    </Details>
    <Thumbnail>
      <img src={contact} />
    </Thumbnail>
  </Wrapper>
);
