import { styled } from '@css';

export const Block = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 11.2%;
  left: 4.2%;
  width: 88.8%;
  height: 3%;
`;

const TypeWrapper = styled('div')`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.35em;
  font-family: 'Futura LT Medium Bold', monospace;
`;

export const WeaknessWrapper = styled(TypeWrapper)`
  left: 13.3%;
`;

export const ResistanceWrapper = styled(TypeWrapper)`
  left: 42.5%;
`;
