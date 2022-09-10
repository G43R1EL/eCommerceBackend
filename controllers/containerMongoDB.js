const { Types, default: mongoose } = require('mongoose')
const config = require('../config')
const uriString = config.mongodb_uri

module.exports = class ContainerMongodb {
    constructor(schema, collectionName) {
        this.uriString = uriString
        this.schema = schema
        if (this.schema) {
            this.collection = mongoose.model(collectionName, this.schema)
        }
    }

    async connect () {
        try {
            return await mongoose.connect(this.uriString)
        } catch (err) {
            throw new Error(`Error: ${err}`)
        }
    }

    // Save data to MongoDB
    async save (data) {
        try {
            return await this.collection.create(data)
        } catch (error) {
            console.log(error)
        }
    }

    // Get all data from MongoDB, if no data or file return empty array
    async getAll () {
        try {
            return await this.collection.find()
        } catch (error) {
            console.log(error)
        }
    }

    // Get by id
    async getById (id) {
        try {
            id = Types.ObjectId(id)
            return await this.collection.findOne({_id: id})
        } catch (error) {
            console.log(error)
        }
    }

    // Update by id
    async updateById (id, item) {
        item._id = id
        try {
            const {modifiedCount} = await this.collection.replaceOne({ _id: item._id }, item)
            console.log(modifiedCount)
            if (modifiedCount) {
                return { success: 'data updated' }
            } else {
                return {error: 'data not found'}
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Delete by id
    async deleteById (id) {
        try {
            const {deletedCount} = await this.collection.deleteOne({_id: id})
            if (deletedCount) {
                return { success: 'data deleted' }
            } else {
                return { error: 'data not found' }
            }
        } catch (error) {
            console.log(error)
        }
    }
}