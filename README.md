# react-tree-table
> Tree table for react.

## installation
```shell
npm install -S @feizheng/react-tree-table
```

## update
```shell
npm update @feizheng/react-tree-table
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| value     | -      | -       | -           |
| onChange  | -      | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-tree-table/dist/style.scss";

  // customize your styles:
  $react-tree-table-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactTreeTable from '@feizheng/react-tree-table';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactTreeTable />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-tree-table/

## resources
- https://github.com/xuliangzhan/vxe-table
- https://codesandbox.io/s/optimistic-firefly-om3uh
