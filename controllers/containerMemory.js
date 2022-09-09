module.exports = class Container {
    constructor() {
        this.container = []
    }

    // Save data to file
    save (data) {
        try {
            if (this.container.length > 0) {
                data.id = this.container.reduce((max, obj) => { return obj.id > max ? obj.id : max }, 0) + 1
            } else {
                data.id = 1
            }
            this.container.push(data)
            return data.id
        } catch (error) {
            console.log(error)
        }
    }

    // Get all data from file, if no data or file return empty array
    getAll () {
        try {
            if (this.container) {
                return JSON.parse(this.container)
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Get by id
    getById (id) {
        try {
            const item = this.container.filter(obj => obj.id === id)
            if (item.length > 0) {
                return item[0]
            } else {
                return { error: 'data not found' }
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Update by id
    updateById (id, item) {
        item.id = id
        try {
            const idx = this.container.findIndex(obj => obj.id === item.id)
            if (idx !== -1) {
                this.container[idx] = item
                return { success: 'data updated' }
            } else {
                return { error: 'data not found' }
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Delete by id
    deleteById (id) {
        try {
            const result = this.getAll()
                .then (data => {
                    const len = data.length
                    const flt = data.filter(obj => obj.id !== id)
                    if (len > flt.length) {
                        this.container = flt
                        return { success: 'data deleted' }
                    } else {
                        return { error: 'data not found' }
                    }
                })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    // Erase all data
    deleteAll () {
        try {
            this.container = []
        } catch (error) {
            console.log(error)
        }
    }
}