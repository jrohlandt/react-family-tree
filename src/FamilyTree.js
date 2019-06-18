import React from 'react';
import './FamilyTree.css';

function createNodes(nodes, nodesKey) {
    console.log(nodesKey);
    return (
        <ul>
            { 
                nodes.map(node => {
                    return (
                        <li key={'li_'+node.id}>
                            <span className="node-title">{node.title}</span>
                            { typeof node[nodesKey] !== 'undefined' ? createNodes(node[nodesKey], nodesKey) : '' }
                        </li>
                    );    
                })
            }
        </ul>
    );
}

function FamilyTree(props) {
    // e.g. your child nodes might have a different name so you can pass the key as a prop.
    const nodesKey = props.nodesKey ? props.nodesKey : 'nodes';
    return (
        <div>
            <div className="tree">
                {createNodes(props.nodes, nodesKey)}
            </div>
        </div>
    );
}

export default FamilyTree;