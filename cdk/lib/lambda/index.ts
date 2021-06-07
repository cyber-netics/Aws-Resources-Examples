import { Stack } from "@aws-cdk/core";
import Triggers from "./triggers";

class Lambda {
  public triggers: Triggers;

  constructor(self: Stack, nameId: string) {
    this.triggers = new Triggers(self, `${nameId}-Triggers`);
  }
}

export default Lambda;
