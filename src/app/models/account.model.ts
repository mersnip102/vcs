export interface AccountInterface {
    username: string | undefined;
    password: string | undefined;
}

export class Account implements AccountInterface {
    username: string | undefined;
    password: string | undefined;

    constructor(data?: AccountInterface) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

}

