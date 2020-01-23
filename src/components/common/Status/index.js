import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StatusTextWrapper from "./StatusTextWrapper";
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
      <Button as={AnchorLink} href="#contact">
        Hire me!
      </Button>
    </StatusTextWrapper>
  ) : (
    <StatusTextWrapper>
      Unavailabe for new assignments right now :(
    </StatusTextWrapper>
  );
