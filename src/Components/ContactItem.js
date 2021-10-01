import React from "react";
import styled from "styled-components";

function ContactItem({ title, icon, cont1, cont2 }) {
  return (
    <ContactItemStyled>
      <div className="contact-item">
        <div className="left-content">{icon}</div>
        <div className="right-content">
          <h6>{title}</h6>
          <p>{cont1}</p>
          <p>{cont2}</p>
        </div>
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  .contact-item {
    width: 98%;
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;

    .left-content {
      padding: 1.5rem;
      border: 1px solid var(--border-color);
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.5rem;
      svg {
        font-size: 2.3rem;
      }
    }

    .right-content {
      h6 {
        color: var(--white-color);
        font-size: 1.2rem;
        padding-bottom: 0.6rem;
      }
      p {
        padding: 0.1rem 0;
      }
    }
  }
`;

export default ContactItem;
