import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

// https://material-ui.com/components/box/#box
// https://gestalt.netlify.app/Box#card-0
export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;