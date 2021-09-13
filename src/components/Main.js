import React from 'react';

import firebase from '../utils/firebaseConfig';
import Create from './Create';
import Read from './Read';

const Main = () => {
   return (
      <main>
         <nav>
            <h1>React Crud</h1>
            <h4>Hello {firebase.auth().currentUser.displayName}</h4>
            <div onClick={() => firebase.auth().signOut()}>Sich abmelden</div>
         </nav>
         <Create />
         <Read />
      </main>
   );
};

export default Main;
