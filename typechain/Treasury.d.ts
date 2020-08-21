/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TreasuryInterface extends ethers.utils.Interface {
  functions: {
    "addressBalances(address)": FunctionFragment;
    "deposit(address)": FunctionFragment;
    "deposits(address,uint256)": FunctionFragment;
    "getDepositsForAddress(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressBalances",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositsForAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDepositsForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "DepositEvent(uint256,address,uint256)": EventFragment;
    "DepositWithdrawnEvent(uint256,address,uint256,bool)": EventFragment;
    "WithdrawalEvent(uint256,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositWithdrawnEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawalEvent"): EventFragment;
}

export class Treasury extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TreasuryInterface;

  functions: {
    addressBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "addressBalances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    deposit(
      _address: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "deposit(address)"(
      _address: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    deposits(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      _amount: BigNumber;
      _address: string;
      _timeDeposit: BigNumber;
      0: BigNumber;
      1: string;
      2: BigNumber;
    }>;

    "deposits(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      _amount: BigNumber;
      _address: string;
      _timeDeposit: BigNumber;
      0: BigNumber;
      1: string;
      2: BigNumber;
    }>;

    getDepositsForAddress(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      0: BigNumber;
    }>;

    "getDepositsForAddress(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      0: BigNumber;
    }>;

    withdraw(
      _address: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256)"(
      _address: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addressBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "addressBalances(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    _address: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "deposit(address)"(
    _address: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  deposits(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    _amount: BigNumber;
    _address: string;
    _timeDeposit: BigNumber;
    0: BigNumber;
    1: string;
    2: BigNumber;
  }>;

  "deposits(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    _amount: BigNumber;
    _address: string;
    _timeDeposit: BigNumber;
    0: BigNumber;
    1: string;
    2: BigNumber;
  }>;

  getDepositsForAddress(
    _address: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getDepositsForAddress(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    _address: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256)"(
    _address: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addressBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addressBalances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(_address: string, overrides?: CallOverrides): Promise<void>;

    "deposit(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposits(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      _amount: BigNumber;
      _address: string;
      _timeDeposit: BigNumber;
      0: BigNumber;
      1: string;
      2: BigNumber;
    }>;

    "deposits(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      _amount: BigNumber;
      _address: string;
      _timeDeposit: BigNumber;
      0: BigNumber;
      1: string;
      2: BigNumber;
    }>;

    getDepositsForAddress(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDepositsForAddress(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _address: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,uint256)"(
      _address: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    DepositEvent(_amount: null, _from: null, when: null): EventFilter;

    DepositWithdrawnEvent(
      _amount: null,
      _to: null,
      when: null,
      isDepositEmpty: null
    ): EventFilter;

    WithdrawalEvent(
      _amount: null,
      _amountRemaining: null,
      _to: null,
      when: null
    ): EventFilter;
  };

  estimateGas: {
    addressBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addressBalances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(_address: string, overrides?: PayableOverrides): Promise<BigNumber>;

    "deposit(address)"(
      _address: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    deposits(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deposits(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDepositsForAddress(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDepositsForAddress(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _address: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(address,uint256)"(
      _address: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addressBalances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _address: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "deposit(address)"(
      _address: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    deposits(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deposits(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDepositsForAddress(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDepositsForAddress(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _address: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address,uint256)"(
      _address: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
