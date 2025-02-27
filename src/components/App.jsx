import React from 'react';
import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHIstory';
import user from '../user.json';
import data from '../data.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import transactions from '../transactions.json';


export const App = () => {
  return (
    <div>           
       <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
       /> 
      <Statistics title="Upload stats" stats={data}  />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
  );
};
