/**
 * InfiniteScrollDatatable - A possible implementation of Infinite scroll datatable
 *
 * @author Erik Amaru Ortiz
 * @license MIT
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InfiniteScrollTable from '../components/InfiniteScrollDatatable'
import * as companiesActions from '../actions';

class App extends Component {
  constructor(props) {
    super(props)

    this.page = 1;
    this.lastIndex = 0;
  }

  _getMyDataForIndex (rowIndex, field) {
    if (typeof this.props.companies[rowIndex] != 'undefined') {

      this.lastIndex = rowIndex > this.lastIndex ? rowIndex : this.lastIndex;
      return this.props.companies[rowIndex][field];
    }

    if (!this.props.isLoadingCompanies && rowIndex > this.lastIndex) {
      this.lastIndex = this.lastIndex + 19;

      setTimeout(() => {
        this.props.handleLoadCompanies(this.props.companiesPage, 25);
      }, 500)
    }

    return null;
  }

  render() {
    const { companies, isLoadingCompanies, loadCompaniesError } = this.props;

   if (!loadCompaniesError) {
      return (
        <div>
        {
          (isLoadingCompanies && companies.length == 0)?
          <b>Loading...</b>:
          <div>
            <h1><a href="https://facebook.github.io/fixed-data-table/">fixed-datatable</a> / <a href="https://github.com/eriknyk/fixed-datatable-infinite-scroll">InfiniteScrollTable</a></h1>
            <InfiniteScrollTable data={{}} rowsCount={200} _getMyDataForIndex={this._getMyDataForIndex.bind(this)}/>
          </div>
        }
        </div>
      );
    } else {
      return <pre>{ JSON.stringify(loadCompaniesError) }</pre>;
    }
  }
}

App.propTypes = {
  isLoadingCompanies: PropTypes.bool.isRequired,
  loadCompaniesError: PropTypes.object,
  companies: PropTypes.array.isRequired,
  companiesPage: PropTypes.number,
  companiesPageSize: PropTypes.number
}

export default connect(
  state => ({...state}),
  dispatch => bindActionCreators(companiesActions, dispatch)
)(App)



