import React from "react";
import { Layout, SEO } from "components/common";
import { Intro, Skills, Projects, TimeLine, Contact } from "components/landing";

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <TimeLine />
    <Projects />
    <Contact />
  </Layout>
);
