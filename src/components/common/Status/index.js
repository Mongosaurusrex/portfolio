import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StatusTextWrapper from "./StatusTextWrapper";
import ContactMeButtonWrapper from "./ContactMeButtonWrapper";
import { Button } from "components/common";
import { StatusSymbol } from "components/common";
import { availableForAssignments } from "data/config";

export const Status = () => {
  return (
    <div>
      <StatusSymbol available={availableForAssignments}></StatusSymbol>
      {getStatusText()}
    </div>
  );
};

const getStatusText = () =>
  availableForAssignments ? (
    <StatusTextWrapper>
      Available for new assignments{" "}
      <ContactMeButtonWrapper>
        <Button as={AnchorLink} href="#contact">
          Contact me!
        </Button>
      </ContactMeButtonWrapper>
    </StatusTextWrapper>
  ) : (
    <StatusTextWrapper>
      Unavailabe for new assignments right now :(
    </StatusTextWrapper>
  );
