import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name,accountNumber)
    }

    deposit = (deposit: number): void => {
        let bonus = 10;
    if(this.validateStatus(deposit)){
        this.setBalance(this.getBalance() + deposit + bonus)
      console.log(`${this.getName()} deposited ${deposit} in your account\nNew Balance = ${this.getBalance()}`)
    }
  }
}