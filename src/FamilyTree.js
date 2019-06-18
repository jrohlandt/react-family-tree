import React from 'react';

const nodes = [
    {
        id: 1,
        title: 'parent',
        nodes: [
            {
                id: 90329,
                title: 'n1',
            },
            {
                id: 1889,
                title: 'n2',
                nodes: [
                    {
                        id: 2222,
                        title: 'n33',
                    },
                    {
                        id: 9090,
                        title: 'n44',
                        nodes: [],
                    }
                ]
            }
        ] 
    }
];

class FamilyTree extends React.Component {

    render() {
        return (
            <div>
                <div class="tree">

                </div>
            </div>
        );
    }
}

export default FamilyTree;