// Type definitions for PubSubJS  1.3.5

declare module PubSubJS {
    interface Base extends Publish, Subscribe, Unsubscribe {
        version: string;
        name: string;
    }

    interface Publish{
        publish(message: any, data: any): boolean;

        publish(message:any, data:any, sync:boolean, immediateExceptions:Function): boolean;

        publishSync(message: any, data: any): boolean;
    }

    interface Subscribe{
        subscribe(message: any, func: Function): any;
    }


    interface Unsubscribe{
        unsubscribe(tokenOrFunction: any): any;
    }
}

declare var PubSub: PubSubJS.Base;