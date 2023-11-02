import userData from '../data/user.json';

import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div>
      <Profile username={userData.username} avatar={userData.avatar} tag={userData.tag} location={userData.location} stats={userData.stats}/>
    </div>
  );
};
