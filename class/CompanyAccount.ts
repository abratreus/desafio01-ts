import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)

  }

  getLoan = (loan: number): void => {
    if(this.validateStatus(loan)){
        this.setBalance(this.getBalance() + loan)
      console.log(`The ${this.getName()} get a loan of ${loan} for your account\nNew Balance = ${this.getBalance()}`)
    }
  }

    withdraw = (withdraw: number): void => {
    if(this.validateStatus(withdraw)){
        this.setBalance(this.getBalance() - withdraw)
      console.log(`The ${this.getName()} withdrawed ${withdraw} of your account\nNew Balance = ${this.getBalance()}`)
    }
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus(deposit)){
        this.setBalance(this.getBalance() + deposit)
      console.log(`The ${this.getName()} deposited ${deposit} in your account\nNew Balance = ${this.getBalance()}`)
    }
  }
}
