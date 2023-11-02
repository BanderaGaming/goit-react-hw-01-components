import userData from '../data/user.json';
import data from '../data/data.json'

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile username={userData.username} avatar={userData.avatar} tag={userData.tag} location={userData.location} stats={userData.stats}/>
    <Statistics title={"Upload stats"} data={data}/>
    </div>
  );
};
