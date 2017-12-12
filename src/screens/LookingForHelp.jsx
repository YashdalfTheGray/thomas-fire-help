import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Container, HeaderContainer, External, Category } from '../components/atoms'

const Home = ({ history: { goBack }}) => (
  <Layout onBack={goBack}>
    <Container>
      <HeaderContainer>
        <h1>
          What do you need?
        </h1>
      </HeaderContainer>
      <Category to="/looking_for_resources/volunteers">
        <h2>
          🛠 Volunteers
        </h2>
        <p>
          For property assistance, events, animal care, and more.
        </p>
      </Category>
      <External
        href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=1117680778"
        target="_blank"
      >
        <h2>
          🏘 Housing
        </h2>
        <p>
          View housing that is available now.
        </p>
      </External>
      <External
        href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
        target="_blank"
      >
        <h2>
          🗃 Supplies
        </h2>
        <p>
          Free food, tools, housewares, animal supplies, and more.
        </p>
      </External>
    </Container>
  </Layout>
)

export default Home
