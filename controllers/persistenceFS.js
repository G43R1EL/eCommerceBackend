import fs from 'fs'

class PersistenceFS {
    constructor(path) {
        this.path = path
        this.data = []
        this._readFile()
    }

    async _readFile () {
        try {
            if (fs.existsSync(this.path)) {
                this.data = JSON.parse(await fs.promises.readFile(this.path, 'utf8'))
            } else {
                console.log(`No existe el archivo ${this.path}. Creando nuevo.`)
                await this._writeFile(this.data)
            }
        } catch (err) {
            console.error(err)
        }
    }

    async _writeFile () {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(this.data), 'utf8')
        } catch (err) {
            console.error(err)
        }
    }

    async addItem (item) {
        try {
            item.id = Date.now()
            this.data.push(item)
            await this._writeFile()
            return {status: 'success', id: item.id}
        } catch (err) {
            console.error(err)
        }
    }

    async removeById (id) {
        try {
            const count = this.data.length
            this.data.splice(this.data.findIndex((item) => item.id === id), 1)
            if (count > this.data.length) {
                await this._writeFile()
                return {status: 'success'}
            } else {
                return {status: 'error', message: `Id: ${id} no encontrado`}
            }

        } catch (err) {
            console.error(err)
        }
    }

    async updateById (id, upd) {
        try {
            if (upd.id) { delete upd.id }
            const idx = this.data.findIndex((item) => item.id == id)
            if (idx !== -1) {
                this.data[idx] = {...this.data[idx], ...upd}
                await this._writeFile()
                return {status: 'success'}
            } else {
                return {status: 'error', message: `Id: ${id} no encontrado`}
            }
        } catch (err) {
            console.error(err)
        }
    }

    async getById (id) {
        try {
            const idx = this.data.findIndex((item) => item.id === id)
            if (idx !== -1) {
                return {status: 'success', payload: this.data[idx]}
            } else {
                return {status: 'error', message: `Id: ${id} no encontrado`}
            }
        } catch (err) {
            console.error(err)
        }
    }

    async getAll () {
        try {
            return {status: 'success', payload: this.data}
        } catch (err) {
            console.error(err)
        }
    }
}

export default PersistenceFS