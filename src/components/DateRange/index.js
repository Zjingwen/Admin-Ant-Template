import React from 'react';
import { DatePicker } from 'antd';
let localeConfig = {
  "lang": {
    "placeholder": "Select date",
    "rangePlaceholder": [
      "Start date",
      "End date"
    ],
    "today": "Today",
    "now": "当前",
    "backToToday": "Back to today",
    "ok": "确定",
    "clear": "Clear",
    "month": "Month",
    "year": "Year",
    "timeSelect": "选择时间",
    "dateSelect": "选择日期",
    "monthSelect": "Choose a month",
    "yearSelect": "Choose a year",
    "decadeSelect": "Choose a decade",
    "yearFormat": "YYYY",
    "dateFormat": "M/D/YYYY",
    "dayFormat": "D",
    "dateTimeFormat": "M/D/YYYY HH:mm:ss",
    "monthFormat": "MMMM",
    "monthBeforeYear": true,
    "previousMonth": "Previous month (PageUp)",
    "nextMonth": "Next month (PageDown)",
    "previousYear": "Last year (Control + left)",
    "nextYear": "Next year (Control + right)",
    "previousDecade": "Last decade",
    "nextDecade": "Next decade",
    "previousCentury": "Last century",
    "nextCentury": "Next century"
  },
  "timePickerLocale": {
    "placeholder": "Select time"
  }
};

class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      localeConfig: localeConfig
    };
  };

  render() {
    const { placeholder, localeConfig } = this.state;
    return (
      <DatePicker
        showTime
        format='YYYY-MM-DD HH:mm:ss'
        placeholder={placeholder}
        onChange={this.props.onChange}
        onOk={this.props.onOk}
        locale={localeConfig}
      />
    );
  }
}

export default DateRange;