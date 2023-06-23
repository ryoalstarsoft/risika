import express from 'express';
import commonValidations from '../shared/validations/financial';
import bcrypt from 'bcrypt';
import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';

import FinancialReports from '../models/financial_reports';

let router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

router.post('/', (req, res) => {
  let { errors, isValid } = validateInput(req.body, commonValidations);
  if (isValid) {
    const {
      case_id,
      reportingperiodstartdate,
      reportingperiodenddate,
      dateofapprovalofannualreport,
      dateofgeneralmeeting,
      typeofauditorassistance,
      classofreportingentity,
      supplementaryinformationonothermatters,
      indentificationnumbercvrofauditfirm,
      nameandsurnameofauditor,
      ifrs,
      unit,
      number_scale,
      revenue,
      other_income,
      costs,
      change_in_inventories,
      gross_result,
      operating_costs,
      other_operating_income,
      staff_expenses,
      ebitda,
      depreciation,
      ebit,
      interest_income,
      interest_expenses,
      net_financial_income,
      tax_expenses,
      profit_loss,
      intangible_assets,
      property_plant_and_equipment,
      non_current_investments_and_receivables,
      deferred_tax_assets,
      other_financial_assets,
      non_current_assets,
      inventories,
      short_term_receivables,
      cash,
      current_assets,
      assets,
      contributed_capital,
      reserves,
      dividend,
      retained_earnings,
      minority_interests,
      equity,
      provisions,
      short_term_debt,
      long_term_debt,
      debt,
      liabilities_and_equity,
      equity_loan } = req.body;

    console.log(req.body);

    FinancialReports.forge({
      case_id: case_id,
      reportingperiodstartdate: reportingperiodstartdate,
      reportingperiodenddate: reportingperiodenddate,
      dateofapprovalofannualreport: dateofapprovalofannualreport,
      dateofgeneralmeeting: dateofgeneralmeeting,
      typeofauditorassistance: typeofauditorassistance,
      classofreportingentity: classofreportingentity,
      supplementaryinformationonothermatters: supplementaryinformationonothermatters,
      indentificationnumbercvrofauditfirm: indentificationnumbercvrofauditfirm,
      nameandsurnameofauditor: nameandsurnameofauditor,
      ifrs: ifrs,
      unit: unit,
      number_scale: number_scale,
      revenue: parseFloat(revenue),
      other_income: parseFloat(other_income),
      costs: parseFloat(costs),
      change_in_inventories: parseFloat(change_in_inventories),
      gross_result: parseFloat(gross_result),
      operating_costs: parseFloat(operating_costs),
      other_operating_income: parseFloat(other_operating_income),
      staff_expenses: parseFloat(staff_expenses),
      ebitda: parseFloat(ebitda),
      depreciation: parseFloat(depreciation),
      ebit: parseFloat(ebit),
      interest_income: parseFloat(interest_income),
      interest_expenses: parseFloat(interest_expenses),
      net_financial_income: parseFloat(net_financial_income),
      tax_expenses: parseFloat(tax_expenses),
      profit_loss: parseFloat(profit_loss),
      intangible_assets: parseFloat(intangible_assets),
      property_plant_and_equipment: parseFloat(property_plant_and_equipment),
      non_current_investments_and_receivables: parseFloat(non_current_investments_and_receivables),
      deferred_tax_assets: parseFloat(deferred_tax_assets),
      other_financial_assets: parseFloat(other_financial_assets),
      non_current_assets: parseFloat(non_current_assets),
      inventories: parseFloat(inventories),
      short_term_receivables: parseFloat(short_term_receivables),
      cash: parseFloat(cash),
      current_assets: parseFloat(current_assets),
      assets: parseFloat(assets),
      contributed_capital: parseFloat(contributed_capital),
      reserves: parseFloat(reserves),
      dividend: parseFloat(dividend),
      retained_earnings: parseFloat(retained_earnings),
      minority_interests: parseFloat(minority_interests),
      equity: parseFloat(equity),
      provisions: parseFloat(provisions),
      short_term_debt: parseFloat(short_term_debt),
      long_term_debt: parseFloat(long_term_debt),
      debt: parseFloat(debt),
      liabilities_and_equity: parseFloat(liabilities_and_equity),
      equity_loan: parseFloat(equity_loan)
    }, { hasTimestamps: true }).save()
    .then(fr => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
  } else {
    res.status(400).json(errors);
  }
});

export default router;