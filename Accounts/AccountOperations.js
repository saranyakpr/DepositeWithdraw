import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deposite, withdraw, requestLoan, payLoan } from './AccountSlice';
const AccountOperations = () => {

  const [deposit, setDeposit] = useState();
  const [withdraw, setWithdraw] = useState();
  const [loanAmount, setLoanAmount] = useState();
  const [loanPurpose, setLoanPurpose] = useState();

  const dispatch = useDispatch()

  const {loan:curretLoan, loanPurpose:currentLoanPurpose, balance} = useSelector((store)=>store.account.balance);

  const handleDeposite = ()=>{
    if(!deposit)return;

    dispatch(deposite(deposit))
    setDeposit('');
  }

  const handleWithdraw = () =>{
    if(!withdraw)return;

    dispatch(withdraw(withdraw))
    setWithdraw('')
  }

  const handleRequestLoan = () =>{
    if(!loanAmount && !loanPurpose)return;

    dispatch(requestLoan(loanAmount, loanPurpose))
    setLoanAmount('')
    setLoanPurpose('')
  }

  const handlePayLoan = ()=>{
    dispatch(payLoan())
  }

  return (
    <div>
      <label>Deposit:</label>
      <input type='number' value={deposit} onChange={(e)=>setDeposit(e.target.value)}/>
      <button onClick={handleDeposite}>DEPOSIT</button>

      <label>withdraw:</label>
      <input type='number' value={withdraw} onChange={(e)=>setWithdraw(e.target.value)}/>
      <button onClick={handleWithdraw}>WITHDROW</button>

      <label>Request Loan:</label>
      <input type='number' placeholder='Loan Amount' value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)}/>
      <input type='text' placeholder='Loan purpose' value={loanPurpose} onChange={(e)=>setLoanPurpose(e.target.value)}/>
      <button onClick={handleRequestLoan}>REQUEST LOAN</button>

      <label>Pay back ${curretLoan}{ currentLoanPurpose}:</label>
      <button onClick={handlePayLoan}>PAY LOAN</button>
    </div>
  )
}

export default AccountOperations