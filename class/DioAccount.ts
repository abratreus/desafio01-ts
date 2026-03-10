export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus(deposit)){
        this.setBalance(this.balance + deposit)
      console.log(`${this.getName()} deposited ${deposit} in your account\nNew Balance = ${this.balance}`)
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validateStatus(withdraw)){
        this.setBalance(this.balance - withdraw)
      console.log(`${this.getName()} withdrawed ${withdraw} of your account\nNew Balance = ${this.balance}`)
    }
  }

  getBalance = (): number  => {
    return this.balance
  }

  setBalance = (balance: number): void => {
    this.balance = balance
    console.log('balance altered')
  }


  protected validateStatus = (solicitacao?: number): boolean => {
     
    if (this.status && solicitacao == undefined) {  
      return this.status
    } else if(solicitacao != undefined &&  this.status){
      return true
    }

    throw new Error('Conta inválida')
  }
}
