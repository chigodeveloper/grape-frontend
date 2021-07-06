import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@binance-chain/bsc-use-wallet'
import CopyToClipboard from './CopyClipload'

const StyledLotteryCard = styled(Card)``

const MyReferralLinkCard = () => {
  const { account } = useWeb3React()

  const domain = 'https://grape-frontend.vercel.app/?ref='
  const referralLink = domain + account
  return (
    <StyledLotteryCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          My Referral Link
        </Heading>
        <Flex mb="32px">
          <CopyToClipboard toCopy={referralLink}>{referralLink}</CopyToClipboard>
        </Flex>
      </CardBody>
    </StyledLotteryCard>
  )
}

export default MyReferralLinkCard
