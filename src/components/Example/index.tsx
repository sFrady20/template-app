import { View, ViewProps } from "react-native";
import React from "react";
import clsx from "clsx";

export function ExampleComponent(props: {} & ViewProps) {
  const { children, className, ...rest } = props;

  return (
    <View {...rest} className={clsx("", className)}>
      {children}
    </View>
  );
}
