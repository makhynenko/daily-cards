import * as React from 'react';
import { PaginationContainer, DatePicker } from './styled';
import { Icon, Button } from 'semantic-ui-react';
import { DatePaginationProps } from './types';
import * as moment from 'moment';
import { dateFormat } from 'helpers/format';

export class DatePagination extends React.PureComponent<DatePaginationProps> {
  render() {
    return (
      <PaginationContainer>
        <Button icon labelPosition="left" onClick={this.onPrev}>
          <Icon name="angle left" />
          Prev
        </Button>
        <DatePicker
          placeholder="Date"
          popupPosition="top left"
          className="example-calendar-input"
          name="date"
          closable
          clearIcon={<Icon name="remove" color="red" />}
          animation={'none' as any}
          value={this.props.value}
          iconPosition="left"
          preserveViewMode={false}
          autoComplete="off"
          onChange={this.onSelectDate}
        />
        <Button icon labelPosition="right" onClick={this.onNext}>
          Next
          <Icon name="angle right" />
        </Button>
      </PaginationContainer>
    );
  }

  private onSelectDate = (_, data) => {
    this.props.onChange(data.value);
  };

  private onPrev = () => {
    this.props.onChange(
      moment(this.props.value, dateFormat)
        .subtract(1, 'd')
        .format(dateFormat)
    );
  };
  private onNext = () => {
    this.props.onChange(
      moment(this.props.value, dateFormat)
        .add(1, 'd')
        .format(dateFormat)
    );
  };
}
