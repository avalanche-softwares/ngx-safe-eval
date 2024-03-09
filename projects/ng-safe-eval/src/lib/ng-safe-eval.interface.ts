type GlobalKeys = keyof Window;


export type GlobalScopeToBeAvailable = {
    [key in GlobalKeys]: true;
}

type ArrowFunctionType = (...args: any[]) => any;

export interface EvaluationContext {
    [key: string]: Function | ArrowFunctionType | any
}

