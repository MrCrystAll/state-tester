export class Command{
    value: string = "";
}

export class CommandInfo{
    name: string = "";
    key: Command =new Command();
}

export class SubcomponentInfo{
    commands: CommandInfo[] = [];
    component: string = "";
}

export class CallbackInfo{
    id: number = 0;
    name: string = "";
    path: string = "";
    commands: CommandInfo[] = [];
    subcommands: SubcomponentInfo[] = [];
    callback: any
}