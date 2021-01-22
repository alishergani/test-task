import { Component } from 'react';
import TreeItem from "./TreeItem";


class Tree extends Component {
    state = {
        tree: [
            {
              title: 'Iron Man',
              inner: [
                {
                  title: 'Downey JR'
                },
                {
                  title: 'Tim Cook'
                },
                {
                  title: 'Another',
                  inner: [
                    {
                      title: 'SpiderMan'
                    }
                  ]
                }
              ]
            }, 
            {
              title: 'Hanckok',
              inner: [
                {
                  title: 'will smith',
                  inner: [
                    {
                      title: 'King Kong',
                      inner: [
                        {
                          title: 'Toyota',
                          inner: [
                            {
                              title: 'Corolla'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  title: 'hulk'
                }
              ]
            }
        ]
    };

    
    render() {
        const items = this.state.tree.map((item, i) =>
            <TreeItem key={i} item={item}/>
        );
        return (
          <div className="Tree">
              {items}
          </div>
        );
    }
}


export default Tree;