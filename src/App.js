import React from 'react';


// import Original from './Original.js';
import FamilyTree from './FamilyTree';

const nodes = [
  {
      id: 1,
      title: 'parent',
      nodes: [
          {
              id: 90329,
              title: 'child 1',
              nodes: [
                  {
                      id: 677,
                      title: 'grand child 1',
                  },
              ] 
          },
          {
              id: 1889,
              title: 'child 2',
              nodes: [
                  {
                      id: 7237823,
                      title: 'grand child 2',
                      nodes: [
                        {
                            id: 5437387,
                            title: 'great grand child 1',
                        },
                        {
                            id: 9023903209,
                            title: 'great grand child 2',
                        }
                    ] 
                  },
                  {
                      id: 33,
                      title: 'grand child 3',
                  }
              ] 
          }
      ] 
  },
];




function App() {
  // return <Original />
  return <FamilyTree nodes={nodes} nodesKey='nodes' />
}

export default App;
