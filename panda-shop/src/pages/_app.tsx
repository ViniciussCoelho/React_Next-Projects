import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logo from '../assets/panda-feed-logo.svg'
import { Container, Header } from "../styles/pages/app"
import Image from 'next/image'

globalStyles()

function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logo} alt="Panda Feed" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default App
