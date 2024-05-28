import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
// import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
// import "hardhat-interact";
// import '@primitivefi/hardhat-dodoc';
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: "cancun",
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/0bxYCEMVua9fTrQ8ZdjLmtneFjjI2HI_" || "", // ethereum
        blockNumber: 19797228,
      },
      blockGasLimit: 60000000000,
      // hardfork: "cancun",
    },
    ethereum: {
      url: "https://eth-mainnet.g.alchemy.com/v2/DfqHvUR3P6-A2Ce3XX6Xx_Z4QPM54MZS" || "",
      accounts: [vars.get("Test1_key")],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ozWVNCbqDXI4BIRxUQtKjpNkJpU1Iy8w" || "",
      accounts: [vars.get("Test1_key")],
    },
    // arbitrum: {
    //   url: "https://arb-mainnet.g.alchemy.com/v2/3xJE5XydRW9R6svaRlbiXeyhVEm6yFFQ" || "",
    //   accounts: [vars.get("TEST1_KEY"), vars.get("TEST2_KEY")],
    // },
    // optimism: {
    //   url: "https://opt-mainnet.g.alchemy.com/v2/C0rnovoXZQ6eo9Egfvw1sTfkdLGsvouh" || "",
    //   accounts: [vars.get("TEST1_KEY"), vars.get("TEST2_KEY")],
    // },
    // base: {
    //   url: "https://base-mainnet.g.alchemy.com/v2/TGwFWGfUH96rmhISEJYNY1o1kTvqYasp" || "",
    //   accounts: [vars.get("TEST1_KEY"), vars.get("TEST2_KEY")],
    // }
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: '',
      sepolia: '7SDXGC9HSGSBQ5SD1NGHK5UKQFZ64FICVR',
      optimisticEthereum: '',
      base: '',
    }
  },
  // dodoc: {
  //   runOnCompile: true,
  //   debugMode: false,
  // }
};

export default config;

