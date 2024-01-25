import AccountOperations from "./Accounts/AccountOperations";
import BalanceDisplay from "./Accounts/BalanceDisplay";
import CreateCustomer from "./Customer/CreateCustomer";
import Customers from "./Customer/Customers";

function App() {
  return (
    <div>
      <CreateCustomer/>
      <Customers/>
      <BalanceDisplay/>
      <AccountOperations/>
    </div>
  );
}

export default App;
