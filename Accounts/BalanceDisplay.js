import { connect } from "react-redux"


function BalanceDisplay(balance){
  return <div className="balance">{balance}</div>
}

const mapStatetoProps = (state) =>{
  return{
    balance:state.account.balance,
  }
}

export default connect(mapStatetoProps(BalanceDisplay)) 