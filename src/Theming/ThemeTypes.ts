export type Color = {
  primary: string;
  secondary: string;
  accent: string;
  error: string;
  warning: string;
  text: string;
  darkenValue: number;
  lightenValue: number;
  defaultContrastValue: number;
};
type flexType =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-end'
  | 'flex-start'
  | 'stretch';
export type Root = {
  backgroundColor: string;
  elevation: number;
  borderRadius: number;
  margin: number;
  padding: number;
  overflow: string;
};

export type Props = {
  justify: flexType;
  alignItems: flexType;
  alignContent: string;
  direction: string;
};

export type Surface = {
  root: Root;
  props: Props;
};

export type Components = {
  surface: Surface;
};

export type FontSizes = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  subtitle1: number;
  subtitle2: number;
  body1: number;
  body2: number;
  caption: number;
  button: number;
  overline: number;
};

export type Contrasts = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  subtitle1: number;
  subtitle2: number;
  body2: number;
  body1: number;
  caption: number;
  button: number;
  overline: number;
};

export type FontWeights = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  subtitle1: string;
  subtitle2: string;
  body1: string;
  body2: string;
  caption: string;
  button: string;
  overline: string;
};

export type LetterSpacings = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  subtitle1: number;
  subtitle2: number;
  body1: number;
  body2: number;
  caption: number;
  button: number;
  overline: number;
};

export type Typography = {
  fontSizes: FontSizes;
  contrasts: Contrasts;
  fontWeights: FontWeights;
  letterSpacings: LetterSpacings;
};

type ThemeTypes = {
  gutter: number;
  color: Color;
  spacing: (multiplier?: number) => number;
  components: Components;
  typography: Typography;
};
export default ThemeTypes;