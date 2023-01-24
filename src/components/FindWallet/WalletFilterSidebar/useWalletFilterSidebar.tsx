// Libraries
import { useEffect, useState } from "react"
import { Icon } from "@chakra-ui/react"

// Data
import walletFilterData from "../../../data/wallets/wallet-filters"

import {
  BrowserIcon,
  BuyCryptoIcon,
  ConnectDappsIcon,
  DesktopIcon,
  EIP1559Icon,
  ENSSupportIcon,
  ERC20SupportIcon,
  GasFeeCustomizationIcon,
  HardwareIcon,
  HardwareSupportIcon,
  Layer2Icon,
  MobileIcon,
  MultisigIcon,
  NFTSupportIcon,
  NonCustodialIcon,
  OpenSourceWalletIcon,
  RPCImportingIcon,
  SocialRecoverIcon,
  StakingIcon,
  SwapIcon,
  WalletConnectIcon,
  WithdrawCryptoIcon,
} from "../../icons/wallets"

import { WalletFilterSidebarProps } from "."

type FilterOptionType = {
  title: string
  items: Array<{
    title: string
    icon: typeof Icon
    description: string
    filterKey: string | undefined
    showOptions: boolean | undefined
    options:
      | Array<{
          name: string
          filterKey?: string
          inputType: "checkbox"
        }>
      | []
  }>
}

export const useWalletFilterSidebar = ({
  resetWalletFilter,
  filters,
  updateFilterOptions,
}: Omit<WalletFilterSidebarProps, "updateFilterOption">) => {
  const [filterOptions, setFilterOptions] = useState<FilterOptionType[]>([
    {
      title: "Device",
      items: [
        {
          title: walletFilterData.mobile.title,
          icon: MobileIcon,
          description: walletFilterData.mobile.description,
          filterKey: walletFilterData.mobile.filterKey,
          showOptions: filters.android || filters.ios ? true : false,
          options: [
            {
              name: walletFilterData.android.title,
              filterKey: walletFilterData.android.filterKey,
              inputType: "checkbox",
            },
            {
              name: walletFilterData.ios.title,
              filterKey: walletFilterData.ios.filterKey,
              inputType: "checkbox",
            },
          ],
        },
        {
          title: walletFilterData.desktop.title,
          icon: DesktopIcon,
          description: walletFilterData.desktop.description,
          filterKey: walletFilterData.desktop.filterKey,
          showOptions:
            filters.linux || filters.windows || filters.macOS ? true : false,
          options: [
            {
              name: walletFilterData.linux.title,
              filterKey: walletFilterData.linux.filterKey,
              inputType: "checkbox",
            },
            {
              name: walletFilterData.windows.title,
              filterKey: walletFilterData.windows.filterKey,
              inputType: "checkbox",
            },
            {
              name: walletFilterData.macos.title,
              filterKey: walletFilterData.macos.filterKey,
              inputType: "checkbox",
            },
          ],
        },
        {
          title: walletFilterData.browser.title,
          icon: BrowserIcon,
          description: walletFilterData.browser.description,
          filterKey: walletFilterData.browser.filterKey,
          showOptions: filters.firefox || filters.chrome ? true : false,
          options: [
            {
              name: walletFilterData.firefox.title,
              filterKey: walletFilterData.firefox.filterKey,
              inputType: "checkbox",
            },
            {
              name: walletFilterData.chromium.title,
              filterKey: walletFilterData.chromium.filterKey,
              inputType: "checkbox",
            },
          ],
        },
        {
          title: walletFilterData.hardware.title,
          icon: HardwareIcon,
          description: walletFilterData.hardware.description,
          filterKey: walletFilterData.hardware.filterKey,
          showOptions: undefined,
          options: [],
        },
      ],
    },
    {
      title: "Security",
      items: [
        {
          title: walletFilterData.open_source.title,
          icon: OpenSourceWalletIcon,
          description: walletFilterData.open_source.description,
          filterKey: walletFilterData.open_source.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.non_custodial.title,
          icon: NonCustodialIcon,
          description: walletFilterData.non_custodial.description,
          filterKey: walletFilterData.non_custodial.filterKey,
          showOptions: undefined,
          options: [],
        },
      ],
    },
    {
      title: "Features",
      items: [
        {
          title: walletFilterData.hardware_support.title,
          icon: HardwareSupportIcon,
          description: walletFilterData.hardware_support.description,
          filterKey: walletFilterData.hardware_support.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.walletconnect.title,
          icon: WalletConnectIcon,
          description: walletFilterData.walletconnect.description,
          filterKey: walletFilterData.walletconnect.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.rpc_importing.title,
          icon: RPCImportingIcon,
          description: walletFilterData.rpc_importing.description,
          filterKey: walletFilterData.rpc_importing.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.nft_support.title,
          icon: NFTSupportIcon,
          description: walletFilterData.nft_support.description,
          filterKey: walletFilterData.nft_support.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.connect_to_dapps.title,
          icon: ConnectDappsIcon,
          description: walletFilterData.connect_to_dapps.description,
          filterKey: walletFilterData.connect_to_dapps.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.staking.title,
          icon: StakingIcon,
          description: walletFilterData.staking.description,
          filterKey: walletFilterData.staking.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.swaps.title,
          icon: SwapIcon,
          description: walletFilterData.swaps.description,
          filterKey: walletFilterData.swaps.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.layer_2.title,
          icon: Layer2Icon,
          description: walletFilterData.layer_2.description,
          filterKey: walletFilterData.layer_2.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.gas_fee_customization.title,
          icon: GasFeeCustomizationIcon,
          description: walletFilterData.gas_fee_customization.description,
          filterKey: walletFilterData.gas_fee_customization.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.ens_support.title,
          icon: ENSSupportIcon,
          description: walletFilterData.ens_support.description,
          filterKey: walletFilterData.ens_support.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.erc_20_support.title,
          icon: ERC20SupportIcon,
          description: walletFilterData.erc_20_support.description,
          filterKey: walletFilterData.erc_20_support.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.eip_1559_support.title,
          icon: EIP1559Icon,
          description: walletFilterData.eip_1559_support.description,
          filterKey: walletFilterData.eip_1559_support.filterKey,
          showOptions: undefined,
          options: [],
        },
      ],
    },
    {
      title: "Buy crypto / Sell for fiat",
      items: [
        {
          title: walletFilterData.buy_crypto.title,
          icon: BuyCryptoIcon,
          description: walletFilterData.buy_crypto.description,
          filterKey: walletFilterData.buy_crypto.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.withdraw_crypto.title,
          icon: WithdrawCryptoIcon,
          description: walletFilterData.withdraw_crypto.description,
          filterKey: walletFilterData.withdraw_crypto.filterKey,
          showOptions: undefined,
          options: [],
        },
      ],
    },
    {
      title: "Smart contracts",
      items: [
        {
          title: walletFilterData.multisig.title,
          icon: MultisigIcon,
          description: walletFilterData.multisig.description,
          filterKey: walletFilterData.multisig.filterKey,
          showOptions: undefined,
          options: [],
        },
        {
          title: walletFilterData.social_recovery.title,
          icon: SocialRecoverIcon,
          description: walletFilterData.social_recovery.description,
          filterKey: walletFilterData.social_recovery.filterKey,
          showOptions: undefined,
          options: [],
        },
      ],
    },
  ])

  const setShowOptions = (idx, itemidx, value) => {
    const updatedFilterOptions = [...filterOptions]
    updatedFilterOptions[idx].items[itemidx].showOptions =
      !updatedFilterOptions[idx].items[itemidx].showOptions
    setFilterOptions(updatedFilterOptions)

    const keys = updatedFilterOptions[idx].items[itemidx].options.map(
      (item) => item.filterKey
    )
    updateFilterOptions(keys, value)
  }

  const resetFilters = () => {
    for (let filterItem of filterOptions) {
      for (let item of filterItem.items) {
        if (item.options.length > 0) {
          item.showOptions = false
        } else {
          item.showOptions = undefined
        }
      }
    }
  }

  useEffect(() => {
    resetWalletFilter.current = resetFilters
  }, [])

  return {
    setShowOptions,
    filterOptions,
  }
}
