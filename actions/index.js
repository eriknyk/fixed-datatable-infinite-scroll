import fetcher from 'isomorphic-fetch';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_FAILURE = 'LOAD_COMPANIES_FAILURE';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

function loadCompanies () {
  return {
    type: LOAD_COMPANIES
  };
}

function loadCompaniesSuccess (companies, page, size) {
  return {
    type: LOAD_COMPANIES_SUCCESS,
    payload: {
      companies,
      page,
      size
    }
  };
}

function loadCompaniesFailure (error) {
  return {
    type: LOAD_COMPANIES_FAILURE,
    payload: { error }
  };
}

export function handleLoadCompanies (page = 1, size = 10) {
  return dispatch => {
    dispatch(loadCompanies());

    return fetcher(
      `http://twbk-fake-api.herokuapp.com/users?page=${page}&size=${size}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-token': 'eb2ea45e6f7e49409eb23db106e93942f1eb6d996a404b48b58484238c57c931'
        },
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => dispatch(loadCompaniesSuccess(json, page + 1, size)))
  }

}
