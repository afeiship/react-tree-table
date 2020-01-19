import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import NxTree from '@feizheng/next-tree';

const CLASS_NAME = 'react-tree-table';

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  getChildView(inItems) {
    const nxTree = new NxTree(inItems);
    const table = nxTree.table();
    return table.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((item, index) => {
            const spans = {
              rowSpan: item.rowSpan || null,
              colSpan: item.colSpan || null
            };
            return (
              <th key={index} {...spans}>
                {item.label}
              </th>
            );
          })}
        </tr>
      );
    });
  }

  render() {
    const { className, items, ...props } = this.props;
    return (
      <table
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <thead>{this.getChildView(items)}</thead>
      </table>
    );
  }
}
