import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/financial';
import { connect } from 'react-redux';
import { addFinancialReport } from '../../actions/financialReportActions';
import { deleteFlashAllMessages } from '../../actions/flashMessages';
import moment from 'moment';
import './FinancialReportsForm.scss';

class FinancialReportsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      case_id: '',
      reportingperiodstartdate: new Date(),
      reportingperiodenddate: new Date(),
      dateofapprovalofannualreport: new Date(),
      dateofgeneralmeeting: new Date(),
      typeofauditorassistance: '',
      classofreportingentity: '',
      supplementaryinformationonothermatters: '',
      indentificationnumbercvrofauditfirm: '',
      nameandsurnameofauditor: '',
      ifrs: false,
      unit: '',
      number_scale: '1E0',
      revenue: '',
      other_income: '',
      costs: '',
      change_in_inventories: '',
      gross_result: '',
      operating_costs: '',
      other_operating_income: '',
      staff_expenses: '',
      ebitda: '',
      depreciation: '',
      ebit: '',
      interest_income: '',
      interest_expenses: '',
      net_financial_income: '',
      tax_expenses: '',
      profit_loss: '',
      intangible_assets: '',
      property_plant_and_equipment: '',
      non_current_investments_and_receivables: '',
      deferred_tax_assets: '',
      other_financial_assets: '',
      non_current_assets: '',
      inventories: '',
      short_term_receivables: '',
      cash: '',
      current_assets: '',
      assets: '',
      contributed_capital: '',
      reserves: '',
      dividend: '',
      retained_earnings: '',
      minority_interests: '',
      equity: '',
      provisions: '',
      short_term_debt: '',
      long_term_debt: '',
      debt: '',
      liabilities_and_equity: '',
      equity_loan: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.addFinancialReport(this.state).then(
        (res) => {
          if (res.data.success === true) {
            this.context.router.history.push('/');
            this.props.deleteFlashAllMessages();
          }
        },
        (err) => {
          this.setState({ errors: err.response.data.errors, isLoading: false })
        }
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDateChange(date, e) {
    this.setState({
      [e.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling.querySelector('input').name]: date
    });
  }

  render() {
    const {
      errors,
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
      equity_loan,
      isLoading } = this.state;

    return (
      <div className="financial-form">
        <form onSubmit={this.onSubmit}>
          <h1>Financial Report</h1>

          <div className="row">
            <div className="col-md-4">
              <TextFieldGroup
                field="case_id"
                label="case id"
                value={case_id}
                error={errors.case_id}
                onChange={this.onChange}
              />

              <TextFieldGroup
                field="reportingperiodstartdate"
                label="reporting period start date"
                value={reportingperiodstartdate}
                error={errors.reportingperiodstartdate}
                onChange={this.handleDateChange}
                type="date"
              />

              <TextFieldGroup
                field="reportingperiodenddate"
                label="reporting period end date"
                value={reportingperiodenddate}
                error={errors.reportingperiodenddate}
                onChange={this.handleDateChange}
                type="date"
              />

              <TextFieldGroup
                field="dateofapprovalofannualreport"
                label="date of approval of annual report"
                value={dateofapprovalofannualreport}
                error={errors.dateofapprovalofannualreport}
                onChange={this.handleDateChange}
                type="date"
              />

              <TextFieldGroup
                field="dateofgeneralmeeting"
                label="date of general meeting"
                value={dateofgeneralmeeting}
                error={errors.dateofgeneralmeeting}
                onChange={this.handleDateChange}
                type="date"
              />

              <TextFieldGroup
                field="typeofauditorassistance"
                label="type of auditor assistance"
                value={typeofauditorassistance}
                error={errors.typeofauditorassistance}
                onChange={this.onChange}
                type="select"
                data={["AUDITORS REPORT", "AUDITORS REPORT(OTHER NON - ASSURANCE REPORTS)", "NO AUDITOR ASSISTANCE", "THE INDEPENDENT AUDITORS REPORT (REVIEW)", "AUDITORS REPORT ON EXTENDED REVIEW", '']}
              />

              <TextFieldGroup
                field="classofreportingentity"
                label="class of reporting entity"
                value={classofreportingentity}
                error={errors.classofreportingentity}
                onChange={this.onChange}
                type="select"
                data={["REPORTING CLASS A", "REPORTING CLASS B", "REPORTING CLASS C", "REPORTING CLASS D", '']}
              />

              <TextFieldGroup
                field="supplementaryinformationonothermatters"
                label="supplementary information on other matters"
                value={supplementaryinformationonothermatters}
                error={errors.supplementaryinformationonothermatters}
                onChange={this.onChange}
              />

              <TextFieldGroup
                field="indentificationnumbercvrofauditfirm"
                label="indentification number cvr of audit firm"
                value={indentificationnumbercvrofauditfirm}
                error={errors.indentificationnumbercvrofauditfirm}
                onChange={this.onChange}
              />

              <TextFieldGroup
                field="nameandsurnameofauditor"
                label="name and surname of auditor"
                value={nameandsurnameofauditor}
                error={errors.nameandsurnameofauditor}
                onChange={this.onChange}
              />

              <TextFieldGroup
                field="ifrs"
                label="IFRS"
                value={ifrs}
                error={errors.ifrs}
                onChange={this.onChange}
                type="checkbox"
              />

              <TextFieldGroup
                field="unit"
                label="unit"
                value={unit}
                error={errors.unit}
                onChange={this.onChange}
              />

              <TextFieldGroup
                field="number_scale"
                label="number scale"
                value={number_scale}
                error={errors.number_scale}
                onChange={this.onChange}
                type="select"
                data={['1E0', '1E3', '1E6', '1E9', '']}
              />

              <TextFieldGroup
                field="revenue"
                label="revenue"
                value={revenue}
                error={errors.revenue}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="other_income"
                label="other income"
                value={other_income}
                error={errors.other_income}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="costs"
                label="costs"
                value={costs}
                error={errors.costs}
                onChange={this.onChange}
                type="number"
              />
            </div>
            <div className="col-md-4">
              <TextFieldGroup
                field="change_in_inventories"
                label="change in inventories"
                value={change_in_inventories}
                error={errors.change_in_inventories}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="gross_result"
                label="gross result"
                value={gross_result}
                error={errors.gross_result}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="operating_costs"
                label="operating costs"
                value={operating_costs}
                error={errors.operating_costs}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="other_operating_income"
                label="other operating income"
                value={other_operating_income}
                error={errors.other_operating_income}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="staff_expenses"
                label="staff expenses"
                value={staff_expenses}
                error={errors.staff_expenses}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="ebitda"
                label="EBITDA"
                value={ebitda}
                error={errors.ebitda}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="depreciation"
                label="depreciation"
                value={depreciation}
                error={errors.depreciation}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="ebit"
                label="EBIT"
                value={ebit}
                error={errors.ebit}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="interest_income"
                label="interest income"
                value={interest_income}
                error={errors.interest_income}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="interest_expenses"
                label="interest expenses"
                value={interest_expenses}
                error={errors.interest_expenses}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="net_financial_income"
                label="net financial income"
                value={net_financial_income}
                error={errors.net_financial_income}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="tax_expenses"
                label="tax expenses"
                value={tax_expenses}
                error={errors.tax_expenses}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="profit_loss"
                label="profit loss"
                value={profit_loss}
                error={errors.profit_loss}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="intangible_assets"
                label="intangible assets"
                value={intangible_assets}
                error={errors.intangible_assets}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="property_plant_and_equipment"
                label="property plant and equipment"
                value={property_plant_and_equipment}
                error={errors.property_plant_and_equipment}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="non_current_investments_and_receivables"
                label="non current investments and receivables"
                value={non_current_investments_and_receivables}
                error={errors.non_current_investments_and_receivables}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="deferred_tax_assets"
                label="deferred tax assets"
                value={deferred_tax_assets}
                error={errors.deferred_tax_assets}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="other_financial_assets"
                label="other financial assets"
                value={other_financial_assets}
                error={errors.other_financial_assets}
                onChange={this.onChange}
                type="number"
              />
            </div>
            <div className="col-md-4">
              <TextFieldGroup
                field="non_current_assets"
                label="non current assets"
                value={non_current_assets}
                error={errors.non_current_assets}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="inventories"
                label="inventories"
                value={inventories}
                error={errors.inventories}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="short_term_receivables"
                label="short term receivables"
                value={short_term_receivables}
                error={errors.short_term_receivables}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="cash"
                label="cash"
                value={cash}
                error={errors.cash}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="current_assets"
                label="current assets"
                value={current_assets}
                error={errors.current_assets}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="assets"
                label="assets"
                value={assets}
                error={errors.assets}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="contributed_capital"
                label="contributed capital"
                value={contributed_capital}
                error={errors.contributed_capital}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="reserves"
                label="reserves"
                value={reserves}
                error={errors.reserves}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="dividend"
                label="dividend"
                value={dividend}
                error={errors.dividend}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="retained_earnings"
                label="retained earnings"
                value={retained_earnings}
                error={errors.retained_earnings}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="minority_interests"
                label="minority interests"
                value={minority_interests}
                error={errors.minority_interests}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="equity"
                label="equity"
                value={equity}
                error={errors.equity}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="provisions"
                label="provisions"
                value={provisions}
                error={errors.provisions}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="short_term_debt"
                label="short term debt"
                value={short_term_debt}
                error={errors.short_term_debt}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="long_term_debt"
                label="long term debt"
                value={long_term_debt}
                error={errors.long_term_debt}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="debt"
                label="debt"
                value={debt}
                error={errors.debt}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="liabilities_and_equity"
                label="liabilities and equity"
                value={liabilities_and_equity}
                error={errors.liabilities_and_equity}
                onChange={this.onChange}
                type="number"
              />

              <TextFieldGroup
                field="equity_loan"
                label="equity loan"
                value={equity_loan}
                error={errors.equity_loan}
                onChange={this.onChange}
                type="number"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <button className="btn btn-primary btn-lg" disabled={isLoading}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

FinancialReportsForm.propTypes = {
  addFinancialReport: PropTypes.func.isRequired,
  deleteFlashAllMessages: PropTypes.func.isRequired
}

FinancialReportsForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { addFinancialReport, deleteFlashAllMessages })(FinancialReportsForm);