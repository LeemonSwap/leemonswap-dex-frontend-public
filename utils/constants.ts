import { Token } from './types'

export const FOOTER_NAV = [
  { title: 'Home', url: '', target: '' },
  { title: 'Contact', url: '', target: '' },
  { title: 'Github', url: '', target: '' },
  { title: 'Documentation', url: '', target: '' },
  { title: 'Audits', url: '', target: '' },
]

export const TOKENS: Token[] = [
  {
    name: 'HBAR',
    address: '0x00000000000000000',
    balance: 0,
    bookmarked: false,
    imageSrc: '/hbar-icon.svg',
  },
  {
    name: 'HBARX',
    address: '0x00000000000000000',
    balance: 0,
    bookmarked: false,
    imageSrc: '/hbar-icon.svg',
  },
  {
    name: 'USDC',
    address: '0x00000000000000000',
    balance: 0,
    bookmarked: false,
    imageSrc: '/usdc-icon.svg',
  },
]
