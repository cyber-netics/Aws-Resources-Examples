import { Stack } from "@aws-cdk/core";
import { Role, ServicePrincipal, ManagedPolicy } from "@aws-cdk/aws-iam";

interface IRoles {
  [key: string]: Role;
}

interface IProps {
  servicePrincipal: string;
  roles: {
    [key: string]: string[];
  };
}

export default class Permissions {
  private readonly _id: string;
  private readonly _self: Stack;
  public roles: IRoles;

  constructor(self: Stack, id: string, props: IProps) {
    this._self = self;
    this._id = id;

    Object.keys(props.roles).map((role: string) => {
      this._createRole(props.servicePrincipal, role);

      props.roles[role].map((policy: string) => {
        this._addManagedPolicy(this.roles[role], policy);
      });
    });
  }

  private _addManagedPolicy(role: Role, policy: string): void {
    role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(policy));
  }

  private _combinePolicyToRole(roleName: string, role: Role): void {
    if (!this.roles) this.roles = {};
    this.roles = Object.assign(this.roles, { [roleName]: role });
  }

  private _createRole(principal: string, policy: string): void {
    const _id = `${this._id}-${principal}-${policy}`;
    const _principal = `${principal}.amazonaws.com`;

    const role = new Role(this._self, _id, {
      assumedBy: new ServicePrincipal(_principal),
    });

    this._combinePolicyToRole(policy, role);
  }
}
