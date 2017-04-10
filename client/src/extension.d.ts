declare interface Window {
    ioc: any;
    jQuery: any;
    Sys: any;
}

interface StringConstructor {
    format(...params: Array<any>): string;
    isNullOrWhiteSpace(value: string): boolean;
    empty: string;
    firstCharToLower(str: string): string;
    toPascalCase(str: string): string;
}
interface Array<T> {
    firstOrDefault(callback: any): any;
    removeItem(item: any): Array<any>;
    any(callback: any): boolean;
    toString(saperator?: string): string;
}

interface Route {
    name?: string;
}