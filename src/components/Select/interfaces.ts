export interface Option {
  nome: string;
  valor: string;
}

export interface SelectProps {
  label: string;
  options: Option[]
}
