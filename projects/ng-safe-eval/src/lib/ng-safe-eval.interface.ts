type GloablKeys = keyof Window;


export type GlobalScopeToBeAvaliavble = {
    [key in GloablKeys]: true;
}

type ArrowFunxctionType = (...args: any[]) => any;

export interface EvaluationContext {
    [key: string]: Function | ArrowFunxctionType | any
}

