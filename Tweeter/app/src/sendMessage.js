import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle } = drizzleReactHooks;
const { ContractForm } = newContextComponents;

export default () => {
  const { drizzle } = useDrizzle();

  return (
    <>
      <div>
        <h3>Send message</h3>
        <ContractForm 
          drizzle={drizzle}
          contract="Tweeter"
          method="sendMessage"
          />
      </div>
    </>
  );
};
