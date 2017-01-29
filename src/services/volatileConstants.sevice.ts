import { Injectable } from '@angular/core'

@Injectable()
export class VolatileConstants {
    public actionGuid: string = '';

    newGUID(): string {
        this.actionGuid =
            this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();

        return this.actionGuid;
    }

    s4(): any {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    nullifyGUID(): void {
        this.actionGuid = '';
    }
}