import React from "react";
import { Container } from "components/common";
import skills from "assets/illustrations/skills.svg";
import percentages from "assets/illustrations/Percentage.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img
          src={skills}
          alt="I’m Nathan and I’m a Backend & Devops engineer!"
        />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I would describe myself as a problem solver. With a curious and
          positive attitude I see no obstacles - only challenges. As a
          programmer with experience in the whole stack I deliver solutions and
          architeture of the highest quality.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
