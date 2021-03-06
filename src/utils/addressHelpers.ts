import addresses from 'config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getCakeAddress = () => {
  return addresses.cake[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}
export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}
export const getReferrerAddress = () => {
  return '0x8845f7DDC881959ba1f366d024CAcdCf23E58b81'
}

export const getReferralsAddress = () => {
  return '0xE77Fa3ad1c586523A7EEd46e3cCa5b5378cCddD4'
}
