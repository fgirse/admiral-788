/* eslint-disable prettier/prettier */
import siteMetadata from '/data/siteMetadata'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import LogoNeu from'../data/SvgLogoNeu'
import { PhoneIcon } from '@heroicons/react/solid'
import { AtSymbolIcon } from '@heroicons/react/solid';
import headerNavLinks from '/data/headerNavLinks'
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="w-screen flex flex-col justify-between bg-gray-900 h-screen">
      <header className="flex items-center justify-between lg:py-8">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <LogoNeu />
                
                </div>
                <div className='flex flex-row justify-center'>
                <PhoneIcon className='hidden lg:block text-yellow-400 w-5 h-5'></PhoneIcon>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-slate-300 hover:text-yellow-400 text-xs lg:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
              <div className='-mt-3 mr-3 flex bg-slate-900 flex-row justify-start items-start gap-2 p-2'>
                  <AtSymbolIcon className="text-yellow-400 w-5 h-5"></AtSymbolIcon>
                   <p className='hidden h-6 text-slate-300 hover:text-yellow-400 text-xs lg:block'>rettungsanker-freiburg@gmx.de</p>   
                  </div> 
                  
                </div>
              
              
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-100 sm:p-4 hover:text-yellow-400 hover:border-b hover:border-yellow-400 dark:text-gray-100 2xl:text-2xl dark:hover:text-sky-700"
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