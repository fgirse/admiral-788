/* eslint-disable prettier/prettier */
import siteMetadata from '/data/siteMetadata'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import LogoNeu from'../data/SvgLogoNeu'
import { PhoneIcon } from '@heroicons/react/solid'
import InfoBar from '../components/InfoBar';
import { AtSymbolIcon } from '@heroicons/react/solid';
import headerNavLinks from '/data/headerNavLinks'
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="w-screen flex flex-col justify-between bg-gray-900 h-screen">
        <InfoBar></InfoBar>
      <header className="flex items-center justify-between lg:py-3"> 
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-end">
              
               
                  
                </div>
              
              
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden lg:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-100 sm:p-4 hover:text-yellow-400 hover:border-b hover:border-yellow-400 dark:text-gray-100 2xl:text-[1.6666rem] 2xl:py-1 dark:hover:text-sky-700"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper