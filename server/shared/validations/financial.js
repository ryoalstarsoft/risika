import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (validator.isEmpty(data.unit)) {
        errors.unit = 'This field is required';
    }

    if (validator.isEmpty(data.number_scale)) {
        errors.number_scale = 'This field is required';
    }

    if (validator.isEmpty(data.profit_loss)) {
        errors.profit_loss = 'This field is required';
    }

    if (validator.isEmpty(data.assets)) {
        errors.assets = 'This field is required';
    }

    if (validator.isEmpty(data.contributed_capital)) {
        errors.contributed_capital = 'This field is required';
    }

    if (validator.isEmpty(data.equity)) {
        errors.equity = 'This field is required';
    }

    if (validator.isEmpty(data.liabilities_and_equity)) {
        errors.liabilities_and_equity = 'This field is required';
    }

    if (!validator.isEmpty(data.ebit) && !validator.isEmpty(data.ebitda) && !validator.isEmpty(data.depreciation)) {
        if (parseFloat(data.ebit).toFixed(2) !== (parseFloat(data.ebitda) - parseFloat(data.depreciation)).toFixed(2)) {
            errors.ebit = 'ebit = ebitda - depreciation';
        }
    }

    if (!validator.isEmpty(data.profit_loss) && !validator.isEmpty(data.ebit) && !validator.isEmpty(data.interest_income) && !validator.isEmpty(data.interest_expenses) && !validator.isEmpty(data.net_financial_income)) {
        if (parseFloat(data.profit_loss).toFixed(2) !== (parseFloat(data.ebit) + parseFloat(data.interest_income) - parseFloat(data.interest_expenses) + parseFloat(data.net_financial_income)).toFixed(2)) {
            errors.profit_loss = 'profit loss = EBIT + interest income - interest expenses + net financial income';
        }
    }

    if (!validator.isEmpty(data.assets) && !validator.isEmpty(data.non_current_assets) && !validator.isEmpty(data.current_assets) && !validator.isEmpty(data.assets)) {
        if (parseFloat(data.assets).toFixed(2) !== (parseFloat(data.non_current_assets) + parseFloat(data.current_assets)).toFixed(2)) {
            errors.assets = 'assets = non_current_assets + current_assets';
        }
    }

    if (!validator.isEmpty(data.debt) && !validator.isEmpty(data.short_term_debt) && !validator.isEmpty(data.long_term_debt)) {
        if (parseFloat(data.debt).toFixed(2) !== (parseFloat(data.short_term_debt) + parseFloat(data.long_term_debt)).toFixed(2)) {
            errors.debt = 'debt = short_term_debt + long_term_debt';
        }
    }

    if (!validator.isEmpty(data.liabilities_and_equity) && !validator.isEmpty(data.liabilities_and_equity)) {
        if (parseFloat(data.liabilities_and_equity).toFixed(2) !== parseFloat(data.assets).toFixed(2)) {
            errors.liabilities_and_equity = 'liabilities_and_equity = assets';
        }
    }

    console.log('isValid' + isEmpty(errors));

    return {
        errors,
        isValid: isEmpty(errors)
    };
}