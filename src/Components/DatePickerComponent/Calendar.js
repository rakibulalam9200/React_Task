import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

const stateDefinitions = {
  available: {
    color: null,
    label: "Available"
  },
  enquire: {
    color: "#ffd200",
    label: "Enquire"
  },
  unavailable: {
    selectable: false,
    color: "#78818b",
    label: "Unavailable"
  }
};

const dateRanges = [
  {
    state: "enquire",
    range: moment.range(
      moment()
        .add(2, "weeks")
        .subtract(5, "days"),
      moment()
        .add(2, "weeks")
        .add(6, "days")
    )
  },
  {
    state: "unavailable",
    range: moment.range(
      moment().add(3, "weeks"),
      moment()
        .add(3, "weeks")
        .add(5, "days")
    )
  }
];

export default class Calendar extends React.Component {
  state = {
    value: moment.range(moment(), moment())
  };

  handleSelect = range => {
    this.setState({
      value: range
    });
  };

  render() {
   // this.props.startDate = this.state.value.start._d;
    console.log(typeof this.state.value.start._d);
    console.log(this.state.value.start._d);
    return (
      <DateRangePicker
        numberOfCalendars={2}
        selectionType="range"
        singleDateRange
        initialFromValue
        minimumDate={new Date()}
        value={this.state.value}
        onSelect={this.handleSelect}
        startDate= {this.state.value.start._i}
      />
    );
  }
}
