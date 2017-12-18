export default class Container {
    constructor(){
        this.services = {}
        this.isLoading = {}
        this.loaded = []
    }

    service(name, cb){
        Object.defineProperty(this, name, {
            get: () => {
                if(this.isLoading[name]){
                    console.log('Services loaded: ', this.loaded)
                    throw new Error(`Circular dependency: ${name}`)
                }

                if(!this.services.hasOwnProperty(name)){
                    this.isLoading[name] = true
                    this.services[name] = cb(this)
                    this.loaded.push(name)
                    this.isLoading[name] = false
                }

                return this.services[name];
            },
            configurable: true,
            enumerable: true
        });

        return this
    }
}