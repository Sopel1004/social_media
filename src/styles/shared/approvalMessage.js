import styled from 'styled-components';
import COLORS from '../colors';

const ApprovalMessage = styled.span`
  color: ${COLORS.primary};
  background-color: ${COLORS.approvalColor};
  padding: 0.5em;
  margin: 0.5em 1em;
  border-radius: 0.5em;
`;

export default ApprovalMessage;
