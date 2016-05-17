import {
  LOAD_COMPANIES,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_FAILURE
} from '../actions';

const initialState = {
  isLoadingCompanies: false,
  loadCompaniesError: null,
  companies: [],
  companiesPage: 1,
  companiesPageSize: 25
};

export default function companiesReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case LOAD_COMPANIES:
      return {
        ...state,
        isLoadingCompanies: true,
        loadCompaniesError: null
      };
    case LOAD_COMPANIES_SUCCESS:
      return {
        ...state,
        companies: [...state.companies, ...payload.companies],
        companiesPage: payload.page,
        companiesPageSize: payload.size,
        isLoadingCompanies: false,
        loadCompaniesError: null
      };
    case LOAD_COMPANIES_FAILURE:
      return {
        ...state,
        isLoadingCompanies: false,
        loadCompaniesError: payload.error
      };
    default:
      return state;
  }
}
