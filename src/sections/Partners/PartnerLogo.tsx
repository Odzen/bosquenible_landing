import Image from 'next/image'

interface Props {
  logo: string
  web: string
  size: { w: number; h: number }
  className: string
}

export default function PartnerLogo({ logo, web, size, className }: Props) {
  return (
    <a href={web} target='_blank' rel='noreferrer' className={className}>
      <Image width={size.w} height={size.h} src={logo} alt='' />
    </a>
  )
}
