import React, { FC } from 'react'
import styled from 'styled-components'

import { Head } from '@Components/Head'
import { GlobalStyle } from '@Components/shared/GlobalStyle/GlobalStyle'
import { Header } from '@Components/shared/Header/Header'
import { Footer } from '@Components/shared/Footer/Footer'

const NotFoundPage: FC = () => (
  <>
    <Head
      title="404 Page not found"
      meta={[
        {
          name: 'robots',
          content: 'noindex',
        },
      ]}
    />
    <GlobalStyle />
    <Header />

    <NotFoundContent>
      <h1>404</h1>
      <p>お探しのページは見つかりませんでした</p>
    </NotFoundContent>

    <Footer />
  </>
)

export default NotFoundPage

const NotFoundContent = styled.div`
  margin-top: var(--header-height);
  padding-inline: 16px;
  text-align: center;

  > h1 {
    margin-block: 0;
    font-weight: bold;
    font-size: 4.5rem;
    line-height: 1.5;
    letter-spacing: 1px;
  }

  > p {
    margin-block: 12px 0;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 1px;
  }
`
