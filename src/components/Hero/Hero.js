import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        My name is Justice Johnson, a dedicated and purposeful developer geared
        towards giving the clients best of results and most efficient
        developer-friendly services.
      </SectionText>

      <Button
        onClick={() => (window.location = `mailto:justlyjohn198@gmail.com`)}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
