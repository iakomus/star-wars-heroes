export interface Theme {
  global: {
    background: string;
    foreground: string;
    accent: {
      background: string;
      foreground: string;
    };
    highlight: {
      background: string;
      foreground: string;
    };
  };
  button: {
    borderWidth: string;
    borderStyle: string;
    primary: {
      background: string;
      borderColor: string;
      foreground: string;
    };
  };
  input: {
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
    background: string;
    foreground: string;
    placeholder: string;
  };
}
