/**
 * InfiniteScrollDatatable - A possible implementation of Infinite scroll datatable
 *
 * @author Erik Amaru Ortiz
 * @license MIT
 */

import React, { Component, PropTypes } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class MyTextCell extends Component {
  render() {
    const {rowIndex, field, _getMyDataForIndex, ...props} = this.props;

    return (
      <Cell {...props}>
        {_getMyDataForIndex(rowIndex, field)}
      </Cell>
    );
  }
}

class MyLinkCell extends Component {
  render() {
    const {rowIndex, field, _getMyDataForIndex, ...props} = this.props;
    const link = _getMyDataForIndex(rowIndex, field)

    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}

class InfiniteScrollDatatable extends Component {
  render() {
    const {data, rowsCount, _getMyDataForIndex} = this.props;

    return (
      <Table
        rowsCount={rowsCount}
        rowHeight={50}
        headerHeight={50}
        width={1024}
        height={700}>
        <Column
          header={<Cell>ID</Cell>}
          cell={
            <MyTextCell
              field="id"
              _getMyDataForIndex={_getMyDataForIndex}
            />
          }
          fixed={true}
          width={70}
        />
        <Column
          header={<Cell>Name</Cell>}
          cell={
            <MyLinkCell
              field="name"
              _getMyDataForIndex={_getMyDataForIndex}
            />
          }
          width={160}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={
            <MyTextCell
              field="email"
              _getMyDataForIndex={_getMyDataForIndex}
            />
          }
          width={300}
        />
        <Column
          header={<Cell>Address</Cell>}
          cell={
            <MyTextCell
              field="address"
              _getMyDataForIndex={_getMyDataForIndex}
            />
          }
          width={240}
        />
        <Column
          header={<Cell>Phone</Cell>}
          cell={
            <MyTextCell
              field="phone"
              _getMyDataForIndex={_getMyDataForIndex}
            />
          }
          width={200}
        />
      </Table>
    )
  }
}

export default InfiniteScrollDatatable;
