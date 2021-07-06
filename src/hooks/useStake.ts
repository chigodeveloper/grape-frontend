import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, sousStake, sousStakeBnb } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract'

const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000'

function getReferrer() {
  const ref = localStorage.getItem('REFERRER')
  const ref2 = Cookies.get('referral_code')
  if (ref) {
    return ref
  }
  if (ref2){
    return ref2
  }
  return EMPTY_ADDRESS
}

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()


  const handleStake = useCallback(
    async (amount: string) => {

      if(account === getReferrer()){
        const referrer = EMPTY_ADDRESS
      } else {
        const referrer = getReferrer()
      }

      const txHash = await stake(masterChefContract, pid, amount, account, referrer)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
      if (referrer !== EMPTY_ADDRESS) {
        localStorage.removeItem('REFERRER')
        Cookies.remove('referral_code')
      }
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export const useSousStake = (sousId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string) => {
      if (sousId === 0) {
        await stake(masterChefContract, 0, amount, account, EMPTY_ADDRESS)
      } else if (isUsingBnb) {
        await sousStakeBnb(sousChefContract, amount, account)
      } else {
        await sousStake(sousChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStake
