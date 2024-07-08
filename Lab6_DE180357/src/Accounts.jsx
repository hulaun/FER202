import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccounts, addAccount, updateAccount, deleteAccount } from './slice';


const fetchAccounts = async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5500/accounts');
    const data = await response.json();
    dispatch(setAccounts(data));
  } catch (error) {
  }
};

const Accounts = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts.accounts);
  const [idCounter, setIdCounter] = useState(0);
  useEffect(() => {
    fetchAccounts(dispatch);
  }, [dispatch]);

  const addNewAccount = async () => {
    dispatch(addAccount({
      accountId: "ACC67890"+idCounter,
      accountHolder: {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1985-06-15",
        address: {
          street: "456 Elm St",
          city: "Townsville",
          state: "Stateville",
          zipcode: "67890"
        },
        contact: {
          email: "john.doe@example.com",
          phone: "+1234567890"
        }
      }}
    ));
    setIdCounter(idCounter+1);
  }

  return (
    <div>
      {accounts.map((account) => <AccountItem key={account.accountId} account={account} />)}
      <button onClick={addNewAccount}>Add Account</button>
    </div>
  );
};

const AccountItem = ({ account }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAccount(account.accountId));
  };

  const handleUpdate = () => {
    dispatch(updateAccount({
      accountId: account.accountId,
      accountHolder: {
        firstName: "Jane",
        lastName: "Doe",
        dateOfBirth: "1985-06-15",
        address: {
          street: "456 Elm St",
          city: "Townsville",
          state: "Stateville",
          zipcode: "67890"
        },
        contact: {
          email: "new@gmail.com",
          phone: "+1234567890"
        }
      }
    }));
  }

  return (
    <div style={{background: "lightgrey"}}>
      <h3>{account.accountHolder.firstName} {account.accountHolder.lastName}</h3>
      <div>{account.accountHolder.contact.email}, {account.accountHolder.contact.phone}</div>
      <div>{account.accountHolder.dateOfBirth}</div>
      <div>{account.accountHolder.address.street}, {account.accountHolder.address.city}, {account.accountHolder.address.state}</div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};


export default Accounts;
