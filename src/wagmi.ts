import { configureChains, createConfig } from 'wagmi'
import { mainnet, hardhat } from 'wagmi/chains'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

//Todo: do I hide this in a .env file?
const { chains, publicClient, webSocketPublicClient } = configureChains(
  // [mainnet, ...(import.meta.env?.MODE === 'development' ? [hardhat] : [])],
  [mainnet, hardhat],
  [
    // alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }),
    // infuraProvider({ apiKey: import.meta.env.VITE_INFURA_API_KEY }),
    publicProvider()
  ]
)

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient
})

export { chains }
