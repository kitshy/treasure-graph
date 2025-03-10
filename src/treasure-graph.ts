import {DepositToken as DepositTokenEvent, GrantRewardTokenAmount as GrantRewardTokenAmountEvent, WithdrawManagerUpdate as WithdrawManagerUpdateEvent, WithdrawToken as WithdrawTokenEvent} from "../generated/TreasureManager/TreasureManager"
import {DepositToken,GrantRewardTokenAmount,WithdrawManagerUpdate,WithdrawToken} from "../generated/schema";
import { log } from '@graphprotocol/graph-ts';

export function handlerDepositToken(event: DepositTokenEvent):void{
    let tokenAddress = event.params.tokenAddress;
    let sender = event.params.sender;
    let amount = event.params.amount;
    let timestamp = event.block.timestamp;

    log.info('Deposit Token: Address: {}, Sender: {}, Amount: {}', [
        tokenAddress.toHexString(),
        sender.toHexString(),
        amount.toString()
    ]);

    let deposit = new DepositToken(event.transaction.hash.toHex());
    deposit.tokenAddress = tokenAddress;
    deposit.sender = sender;
    deposit.amount = amount;
    deposit.timestamp = timestamp;

    deposit.save();

}

export function handlerWithdrawToken(event: WithdrawTokenEvent):void{
    let  tokenAddress = event.params.tokenAddress;
    let sender = event.params.sender;
    let withdrawAddress = event.params.withdrawAddress;
    let amount = event.params.amount;
    let timestamp = event.block.timestamp;

    log.info('Withdraw Token: tokenAddress: {}, sender: {}, withdrawAddress: {}, Amount: {}', [
        tokenAddress.toHexString(),
        sender.toHexString(),
        withdrawAddress.toHexString(),
        amount.toString()
    ]);

    let withdraw = new WithdrawToken(event.transaction.hash.toHex());
    withdraw.tokenAddress = tokenAddress;
    withdraw.sender = sender;
    withdraw.amount = amount;
    withdraw.withdrawAddress = withdrawAddress;
    withdraw.timestamp = timestamp;

    withdraw.save();
}

export function handlerGrantRewardTokenAmount(event: GrantRewardTokenAmountEvent):void{
    let  tokenAddress = event.params.tokenAddress;
    let granter = event.params.granter;
    let amount = event.params.amount;
    let timestamp = event.block.timestamp;

    log.info('GrantReward Token: tokenAddress: {}, granter: {}, Amount: {}', [
        tokenAddress.toHexString(),
        granter.toHexString(),
        amount.toString()
    ]);

    let grantReward = new GrantRewardTokenAmount(event.transaction.hash.toHex());
    grantReward.tokenAddress = tokenAddress;
    grantReward.granter = granter;
    grantReward.amount = amount;
    grantReward.timestamp = timestamp;
    grantReward.save();

}


export function handlerWithdrawManagerUpdate(event:WithdrawManagerUpdateEvent):void{
    let  withdrawManger = event.params.withdrawManger;
    let timestamp = event.block.timestamp;

    log.info('Withdraw Token: withdrawManger: {}', [
        withdrawManger.toHexString()
    ]);
    let withdrawManager = new WithdrawManagerUpdate(event.transaction.hash.toHex());
    withdrawManager.withdrawManger = withdrawManager.withdrawManger;
    withdrawManager.timestamp = timestamp;
    withdrawManager.save();

}


