import axios from 'axios';

export function addFinancialReport(data) {
    return dispatch => {
        return axios.post('/api/financial_reports', data);
    }
}