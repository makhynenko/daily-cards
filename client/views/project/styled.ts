import styled from 'styled-components';
import { DateInput } from 'semantic-ui-calendar-react';

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 16px;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
`;

// ---------- Date Pagination ----------

export const PaginationContainer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-top: 1px solid;
`;

export const DatePicker = styled(DateInput)`
  margin-right: 5px;
`
