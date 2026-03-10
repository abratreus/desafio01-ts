import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Abraao', 10)
console.log(peopleAccount)
peopleAccount.deposit(500)
peopleAccount.withdraw(500)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(500)
companyAccount.withdraw(500)
companyAccount.getLoan(500)
const bonusAccount: BonusAccount = new BonusAccount('Rico', 30)
console.log(bonusAccount)
bonusAccount.deposit(500)
bonusAccount.withdraw(500)