export default class GlobalStorage {
    private static instance: GlobalStorage;
    private data: any = {};

    private constructor() { }

    static getInstance(): GlobalStorage {
        return this.instance || (this.instance = new GlobalStorage());
    }

    setData(key: string, value: any): void {
        this.data[key] = value;
    }

    getData(key: string): any {
        return this.data[key];
    }
}

