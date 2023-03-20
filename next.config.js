/** @type {import('next').NextConfig} */
const path = require('path')

const withReactSvg = require('next-react-svg')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'assets/svg'),
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\/mint\//,
        loader: 'ignore-loader'
      }
    )
    return config
  },
  images: {
    domains: [
      'nft.falco.gg'
    ],
  },
  async redirects() {
    return [
      {
        source: '/telegram-hh',
        destination: 'https://bit.ly/falcohh',
        permanent: false,
        basePath: false
      }
    ]
  },
})
