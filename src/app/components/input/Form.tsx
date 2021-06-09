import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  defaultValues?: any;
  children?: any;
  onSubmit: any;
}

export default function Form({ defaultValues, children, onSubmit }: Props) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}
