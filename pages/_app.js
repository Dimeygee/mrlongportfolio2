import '../styles/globals.css'
import MenuContextProvider from '../components/context/menucontext'
import MouseContextProvider from '../components/context/mousecontext'
import MenuNav__Footer from '../components/menunav&footer'
import DotRing from '../components/customcursor'
import { ThemeToggle } from '../components/themetoggle'
import MobileMenu from '../components/mobilemenu'

function MyApp({ Component, pageProps }) {


  return( 
    <MenuContextProvider>
      <MouseContextProvider>
        <DotRing />
        <ThemeToggle />
        <MenuNav__Footer>
          <Component {...pageProps} />
        </MenuNav__Footer>
      </MouseContextProvider>
    </MenuContextProvider>
  )
}

export default MyApp
