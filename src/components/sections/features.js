import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

// Shariah complaint
// Fast
// Simple
// Cost-effective
// Designed for MSME
// Designed for construction
const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>We get you the materials, so you can get building.</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Fast</FeatureTitle>
          <FeatureText>
            Initial on-boarding processed within 24hrs, materials request approved in 2hrs.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Simple</FeatureTitle>
          <FeatureText>
            Submit a request. Materials delivered where you need them.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Flexible</FeatureTitle>
          <FeatureText>
            We work with your specific situation and needs.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Cost-effective</FeatureTitle>
          <FeatureText>
            Up-front, flat pricing structure.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Designed for MSMEs</FeatureTitle>
          <FeatureText>Built for underserved businesses.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Built for contractors</FeatureTitle>
          <FeatureText>
            Pioneering supply chain tools for the construction industry.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)`
  color: ${props => props.theme.color.accent}
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.secondary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
