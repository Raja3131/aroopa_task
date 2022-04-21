let inventory = {
    items: {},
    add: function(key,item) {
        if (item !== null)
            this.items[key] = item
    },
    remove: function(key) {
        this.items[key] = null
    },
    get: function(key) {
        if (this.items[key])
        {
           return this.items[key];
        } else {
           return null; 
        }
    }
}