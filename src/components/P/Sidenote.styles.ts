import styled from 'styled-components'
import { Collapse } from 'antd'

export const StyledCollapse: typeof Collapse = styled(Collapse)`
  padding: 10px;
  background: rgba(114, 146, 176, 0.1);
  border-radius: 4px;
  margin: 15px 0;
`

export const StyledTitle = styled.span`
  font-weight: 600;
`