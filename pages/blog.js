/* eslint-disable prettier/prettier */
import { getAllFilesFrontMatter } from '../lib/mdx'
import siteMetadata from '../data/siteMetadata'
import ListLayout from '../layouts/ListLayout'
import { PageSEO } from '../components/SEO'
import Image from 'next/image';

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog() {
  return (
    <>
      
{/*} Section 1 */} 
<section className="w-full px-8 py-32 bg-gray-800 xl:px-8 min-h-[70vh]">
    <div className="max-w-5xl mx-auto">
    
        <div className="flex flex-col items-center lg:flex-row md:mt-16 lg:mt-16">

            <div className="w-full space-y-5 md:w-4/5 md:pr-16">
            <div className='absolute w-5/12 left-[60vw]  top-[16vh] sm:top-[25vh] sm:4/12 md:w-3/12 md:left[-54vw] md:top-[15vh] lg:top-[23vh] lg:left-[43vw] lg:absolute lg:w-48 lg:top-33 xl:top-[20]' >
        <Image className='' src="/Albers_Illu_white.png" alt="ILLLustration" layout="responsive" height={195} width={208} />
      </div>
                <p className="font-medium text-yellow-500 uppercase md:text-4xl">Networking ist in...</p>
                <h2 className="text-2xl font-extrabold leading-none text-gray-300 sm:text-3xl md:text-6xl">
                    Mach mit im Rettungsanker Bloq!
                </h2>
                <p className="z-40 text-lg text-gray-300 md:pr-16">Melde Dich mit email Adrese und Passwort an Falls noch keinen Account, dann bitte um Registrierung im Rettungsanker Blog.</p>
            </div>

            <div className="w-full mt-16 md:mt-12 md:w-4/5">
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-yellow-400 border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 className="mb-6 text-2xl font-medium text-center ">Anmeldung zum Blog</h3>
                    <input type="text" name="email" className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email address"/>
                    <input type="password" name="password" className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Password"/>
                    <div className="block">
                        <button className="w-full px-3 py-4 font-medium text-white bg-indigo-800 hover:indigo-700 rounded-lg">Log In</button>
                    </div>
                    <p className="w-full mt-4 text-sm text-center text-gray-500">Noch keinen Account? <a href="#_" className="text-blue-500 underline">Registriere Dich im Bloq</a></p>
                </div>
            </div>

        </div>
    </div>
    
</section>

              
         
      
    </>
  )
}
