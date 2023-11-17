import { useEffect, useRef, useState } from 'react'
import { type Address, useContractRead } from 'wagmi'

import { toast } from 'react-hot-toast'
import { badgeTcrContractConfig, tokensViewContractConfig } from './klerosAbis'

const zeroAddress = '0x0000000000000000000000000000000000000000'
const t2crAddr = '0xebcf3bca271b26ae4b162ba560e243055af0e679'

const filter = [
  false, // Do not include items which are not on the TCR.
  true, // Include registered items.
  false, // Do not include items with pending registration requests.
  true, // Include items with pending clearing requests.
  false, // Do not include items with challenged registration requests.
  true, // Include items with challenged clearing requests.
  false, // Include token if caller is the author of a pending request.
  false // Include token if caller is the challenger of a pending request.
] as const

type TokenData = {
  ID: string
  name: string
  ticker: string
  addr: Address
  symbolMultihash: string
  status: number
  decimals: bigint
  balance?: bigint
}

export const TokenFetcher = () => {
  const currentToastId = useRef('')
  const [, setIsFetching] = useState(false)

  const {
    data: badgeData,
    isError: badgeIsError,
    isLoading: badgeIsLoading,
    refetch: refetchBadgeData
  } = useContractRead({
    ...badgeTcrContractConfig,
    functionName: 'queryAddresses',
    enabled: false,
    args: [zeroAddress, BigInt(1000), filter, true],
    select: (data) => data?.[0]?.filter((address) => address !== zeroAddress)
  })

  const {
    data: tokenIdsData,
    isError: tokenIdsIsError,
    isLoading: tokenIdsIsLoading,
    refetch: refetchTokenIdsData
  } = useContractRead({
    ...tokensViewContractConfig,
    functionName: 'getTokensIDsForAddresses',
    args: [t2crAddr, badgeData as Address[]],
    enabled: false,
    select: (tokenIdsData) => [...tokenIdsData] //spread operator to convert to array
  })

  const {
    data: tokenData,
    isError: tokensDataIsError,
    isLoading: tokensDataIsLoading,
    isSuccess: tokensDataIsSuccess,
    refetch: refetchTokensData
  } = useContractRead({
    ...tokensViewContractConfig,
    functionName: 'getTokens',
    args: [t2crAddr, tokenIdsData as Address[]],
    select: (tokenData) => {
      return tokenData
        ?.filter((token) => token.addr !== zeroAddress)
        .map((token) => ({
          ...token,
          balance: 0n
        })) as TokenData[]
    },
    enabled: false
  })

  useEffect(() => {
    console.log('token fetcher mounted')
    refetchBadgeData()
  }, [refetchBadgeData])

  useEffect(() => {
    if (badgeData) {
      refetchTokenIdsData()
    }
  }, [badgeData, refetchTokenIdsData])

  useEffect(() => {
    if (tokenIdsData) {
      refetchTokensData()
    }
  }, [tokenIdsData, refetchTokensData])

  useEffect(() => {
    if (badgeIsLoading || tokenIdsIsLoading || tokensDataIsLoading)
      setIsFetching(true)
  }, [badgeIsLoading, tokenIdsIsLoading, tokensDataIsLoading])

  useEffect(() => {
    // Dismiss the current toast when the state changes
    if (currentToastId.current) {
      toast.dismiss(currentToastId.current)
      currentToastId.current = ''
    }

    // Show loading toast if any query is loading
    if (badgeIsLoading || tokenIdsIsLoading || tokensDataIsLoading) {
      setIsFetching(true)
      currentToastId.current = toast.loading('Fetching Kleros token list...')
    }
    // Show error toast if any query encounters an error
    else if (badgeIsError || tokenIdsIsError || tokensDataIsError) {
      currentToastId.current = toast.error('Error fetching Kleros token list')
      setIsFetching(false)
    }
    // Show success toast when all data is fetched successfully
    else if (tokensDataIsSuccess) {
      currentToastId.current = toast.success('Retrieved badge tokens')
      setIsFetching(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    badgeIsError,
    badgeIsLoading,
    tokenIdsIsError,
    tokenIdsIsLoading,
    tokensDataIsError,
    tokensDataIsLoading,
    tokensDataIsSuccess
  ])

  // Clean up the toast on unmount
  useEffect(() => {
    return () => {
      if (currentToastId.current) {
        toast.dismiss(currentToastId.current)
      }
    }
  }, [])

  return (
    <div className="text-center body">
      <div id="metamask-loaded">
        <div className="fetch-tokens">
          <h1 className="h3 mb-3 font-weight-normal">
            Tokens with the ERC20 Standard badge
          </h1>
          <br />
        </div>
        {tokenData && (
          <div className="output">
            <div id="symbols">
              {tokenData?.map((token) => {
                const { addr, symbolMultihash, ID, name } = token
                return (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        alignItems: 'center',
                        width: '300px'
                      }}
                    >
                      <a href={`https://etherscan.io/address/${addr}`}>
                        <img
                          key={ID}
                          src={`https://ipfs.kleros.io${symbolMultihash}`}
                          className="img-thumbnail symbol"
                          alt="symbol"
                        />
                      </a>
                      <h3>{name}</h3>
                    </div>
                    <pre id="data-display">
                      {JSON.stringify(
                        token,
                        (_key, value) =>
                          typeof value === 'bigint' ? value.toString() : value,
                        2
                      )}
                    </pre>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TokenFetcher
