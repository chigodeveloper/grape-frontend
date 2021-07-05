import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'GRP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x09646e26b1d1da23e52d5f93b9ee717c61f953ee',
    },
    tokenSymbol: 'GRP',
    tokenAddresses: {
      97: '',
      56: '0x382B5ed8dCb967555eb6992D19295FFe18265843',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'GRP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaaf51a93e2a4d8ad41d91179f1cdcf4563a8c59e',
    },
    tokenSymbol: 'GRP',
    tokenAddresses: {
      97: '',
      56: '0x382B5ed8dCb967555eb6992D19295FFe18265843',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'GRP',
    lpAddresses: {
      97: '',
      56: '0x09646e26b1d1da23e52d5f93b9ee717c61f953ee', // GRP-BUSD LP
    },
    tokenSymbol: 'GRP',
    tokenAddresses: {
      97: '',
      56: '0x382B5ed8dCb967555eb6992D19295FFe18265843',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x09646e26b1d1da23e52d5f93b9ee717c61f953ee', // GRP-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
