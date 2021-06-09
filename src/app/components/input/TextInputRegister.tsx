import React from "react";

interface Props {
  rest?: any;
  register?: any;
  name: string;
  label: string;
  errors?: any;
}
export function TextInputRegister({ register, name, ...rest }: Props) {
  return <input {...register(name)} {...rest} />;
}
