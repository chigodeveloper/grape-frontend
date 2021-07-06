/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { ReferralState } from '../types'
import fetchReferralInfo from './fetchReferralsInfo'

const initialState: ReferralState = {
  isloading: true,
  data: {
    referralsCount: 0,
    referrer: '',
    totalReferralCommissions: 0,
  },
}

export const referralsSlice = createSlice({
  name: 'Referrals',
  initialState,
  reducers: {
    setReferralInfoData: (state, action) => {
      state.data = action.payload
    },
  },
})

// Actions
export const { setReferralInfoData } = referralsSlice.actions

export const fetchReferralInfoAsync = (account: string) => async (dispatch) => {


  const referralData = await fetchReferralInfo(account)
  dispatch(setReferralInfoData(referralData))
}

export default referralsSlice.reducer
