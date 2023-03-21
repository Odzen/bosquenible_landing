import Image from 'next/image'

import { Banner, Content, ImageWrapper, ImageWrap } from './styles'

const BannerSection: React.FC = () => (
  <Banner>
    <Content>
      <ImageWrapper route='/images/backgrounds/bg_3.png'>
        <ImageWrap>
          <Image src='/images/logos/logo_3.png' alt='logo' width={1200} height={200} />
        </ImageWrap>
      </ImageWrapper>
    </Content>
  </Banner>
)

export default BannerSection
