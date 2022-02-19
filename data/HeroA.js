import Image from 'next/image'
import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles.module.css'

const HeroA = () => (
  <div>
    <ViewSource pathname="pages/background.js" />
    <div className={bgWrap}>
      <Image
        alt="Hero Head"
        src="/Hero.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className={bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
)

export default HeroA