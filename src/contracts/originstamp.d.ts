/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";
import {Contract} from "@ethersproject/contracts";

export class Originstamp implements Contract {
  docRegistrationTime(hash: string, overrides?: CallOverrides): Promise<BigNumber>;
  validUntil(hash: string, overrides?: CallOverrides): Promise<BigNumber>;
  newVersions(hash: string, overrides?: CallOverrides): Promise<string>;
  transferOwnership(hash: string, overrides?: CallOverrides): Promise<ContractTransaction>;
  register(hash: string, validUntil: BigNumberish, overrides?: CallOverrides): Promise<ContractTransaction>;
  registerMultiply(hashes: string[], validUntilList: BigNumberish[], overrides?: CallOverrides): Promise<ContractTransaction>;
  registerNewVersion(newHash: string, oldHash: string, validUntil: BigNumberish, overrides?: CallOverrides): Promise<ContractTransaction>;
  registerNewVersionMultiply(newHash: string[], oldHash: string[], validUntil: BigNumberish[], overrides?: CallOverrides): Promise<ContractTransaction>;
  owner(overrides?: CallOverrides): Promise<string>;

  ////////
  CAMPAIGN_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  advisorsVestingController(overrides?: CallOverrides): Promise<string>;

  busd(overrides?: CallOverrides): Promise<string>;

  buy(
    _busdAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  communitySale1VestingController(overrides?: CallOverrides): Promise<string>;

  communitySale2VestingController(overrides?: CallOverrides): Promise<string>;

  communitySale3VestingController(overrides?: CallOverrides): Promise<string>;

  developmentVestingController(overrides?: CallOverrides): Promise<string>;

  fundingTeamVestingController(overrides?: CallOverrides): Promise<string>;


  getAvailableAmountByInvestor(
    _investor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAvailableAmountByPhase(
    _phase: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAvailableAmountByPhaseAndInvestor(
    _phase: BigNumberish,
    _investor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getInvestedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getInvestedAmountByInvestor(
    _investor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getInvestedAmountByPhase(
    _phase: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getInvestedAmountByPhaseAndInvestor(
    _phase: BigNumberish,
    _investor: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReleasedAmountByPhase(
    _phase: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWithdrawableAmountByPhase(
    _phase: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  marketingVestingController(overrides?: CallOverrides): Promise<string>;



  preTgePurchaseTotals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  preTgePurchases(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, string, BigNumber] & {
      phase: number;
      buyer: string;
      phetaAmount: BigNumber;
    }
  >;

  priceByPhase(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  privateRoundVestingController(overrides?: CallOverrides): Promise<string>;

  publicSaleRegistry(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      buyer: string;
      busdAmount: BigNumber;
      phetaAmount: BigNumber;
    }
  >;

  publicSaleRegistryCount(overrides?: CallOverrides): Promise<BigNumber>;

  registerMultiplyPurchases(
    _phase: BigNumberish,
    _investors: string[],
    _amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerMultiplyUsdPurchases(
    _phase: BigNumberish,
    _investors: string[],
    _usdAmounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerPurchase(
    _phase: BigNumberish,
    _investor: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerUsdPurchase(
    _phase: BigNumberish,
    _investor: string,
    _usdAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseAvailable(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseAvailableByInvestor(
    _investor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseAvailableByPhaseAndInvestor(
    _phase: BigNumberish,
    _investor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  seedRoundVestingController(overrides?: CallOverrides): Promise<string>;

  setTgeTime(
    _tgeTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePrice(
    _phase: BigNumberish,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vestingStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _phase: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CAMPAIGN_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    advisorsVestingController(overrides?: CallOverrides): Promise<string>;

    busd(overrides?: CallOverrides): Promise<string>;

    buy(_busdAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    communitySale1VestingController(overrides?: CallOverrides): Promise<string>;

    communitySale2VestingController(overrides?: CallOverrides): Promise<string>;

    communitySale3VestingController(overrides?: CallOverrides): Promise<string>;

    developmentVestingController(overrides?: CallOverrides): Promise<string>;

    fundingTeamVestingController(overrides?: CallOverrides): Promise<string>;

    getAvailableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getAvailableAmountByInvestor(
      _investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAvailableAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAvailableAmountByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInvestedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getInvestedAmountByInvestor(
      _investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInvestedAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInvestedAmountByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReleasedAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawableAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketingVestingController(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    preTgePurchaseTotals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    preTgePurchases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, BigNumber] & {
        phase: number;
        buyer: string;
        phetaAmount: BigNumber;
      }
    >;

    priceByPhase(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    privateRoundVestingController(overrides?: CallOverrides): Promise<string>;

    publicSaleRegistry(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        buyer: string;
        busdAmount: BigNumber;
        phetaAmount: BigNumber;
      }
    >;

    publicSaleRegistryCount(overrides?: CallOverrides): Promise<BigNumber>;

    registerMultiplyPurchases(
      _phase: BigNumberish,
      _investors: string[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    registerMultiplyUsdPurchases(
      _phase: BigNumberish,
      _investors: string[],
      _usdAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    registerPurchase(
      _phase: BigNumberish,
      _investor: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerUsdPurchase(
      _phase: BigNumberish,
      _investor: string,
      _usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseAvailable(overrides?: CallOverrides): Promise<void>;

    releaseAvailableByInvestor(
      _investor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseAvailableByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    seedRoundVestingController(overrides?: CallOverrides): Promise<string>;

    setTgeTime(
      _tgeTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePrice(
      _phase: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vestingStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _phase: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "PriceUpdated(uint8,uint256,uint256)"(
      phase?: BigNumberish | null,
      oldPrice?: BigNumberish | null,
      newPrive?: BigNumberish | null
    ): TypedEventFilter<
      [number, BigNumber, BigNumber],
      { phase: number; oldPrice: BigNumber; newPrive: BigNumber }
    >;

    PriceUpdated(
      phase?: BigNumberish | null,
      oldPrice?: BigNumberish | null,
      newPrive?: BigNumberish | null
    ): TypedEventFilter<
      [number, BigNumber, BigNumber],
      { phase: number; oldPrice: BigNumber; newPrive: BigNumber }
    >;
  };

  estimateGas: {
    CAMPAIGN_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    advisorsVestingController(overrides?: CallOverrides): Promise<BigNumber>;

    busd(overrides?: CallOverrides): Promise<BigNumber>;

    buy(
      _busdAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    communitySale1VestingController(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    communitySale2VestingController(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    communitySale3VestingController(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    developmentVestingController(overrides?: CallOverrides): Promise<BigNumber>;

    fundingTeamVestingController(overrides?: CallOverrides): Promise<BigNumber>;

    getAvailableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getAvailableAmountByInvestor(
      _investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAvailableAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAvailableAmountByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInvestedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getInvestedAmountByInvestor(
      _investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInvestedAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInvestedAmountByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReleasedAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawableAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketingVestingController(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    preTgePurchaseTotals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    preTgePurchases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceByPhase(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    privateRoundVestingController(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    publicSaleRegistry(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    publicSaleRegistryCount(overrides?: CallOverrides): Promise<BigNumber>;

    registerMultiplyPurchases(
      _phase: BigNumberish,
      _investors: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerMultiplyUsdPurchases(
      _phase: BigNumberish,
      _investors: string[],
      _usdAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerPurchase(
      _phase: BigNumberish,
      _investor: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerUsdPurchase(
      _phase: BigNumberish,
      _investor: string,
      _usdAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseAvailable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseAvailableByInvestor(
      _investor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseAvailableByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    seedRoundVestingController(overrides?: CallOverrides): Promise<BigNumber>;

    setTgeTime(
      _tgeTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePrice(
      _phase: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vestingStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _phase: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CAMPAIGN_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    advisorsVestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    busd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buy(
      _busdAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    communitySale1VestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    communitySale2VestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    communitySale3VestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    developmentVestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fundingTeamVestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAvailableAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAvailableAmountByInvestor(
      _investor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAvailableAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAvailableAmountByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInvestedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInvestedAmountByInvestor(
      _investor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInvestedAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInvestedAmountByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReleasedAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithdrawableAmountByPhase(
      _phase: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketingVestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    preTgePurchaseTotals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    preTgePurchases(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceByPhase(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    privateRoundVestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publicSaleRegistry(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publicSaleRegistryCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerMultiplyPurchases(
      _phase: BigNumberish,
      _investors: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerMultiplyUsdPurchases(
      _phase: BigNumberish,
      _investors: string[],
      _usdAmounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerPurchase(
      _phase: BigNumberish,
      _investor: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerUsdPurchase(
      _phase: BigNumberish,
      _investor: string,
      _usdAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseAvailable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseAvailableByInvestor(
      _investor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseAvailableByPhaseAndInvestor(
      _phase: BigNumberish,
      _investor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    seedRoundVestingController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTgeTime(
      _tgeTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePrice(
      _phase: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vestingStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _phase: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
