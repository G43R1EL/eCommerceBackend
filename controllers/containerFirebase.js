const admin = require('firebase-admin')
const config = require('../config')

admin.initializeApp({
    credential: admin.credential.cert(config.firebase_config)
})

const db = admin.firestore()

module.exports = class Container {
    constructor(collection) {
        this.collection = db.collection(collection)
    }

    // Save data to Firebase
    async save (data) {
        try {
            return await this.collection.add(data)
        } catch (error) {
            console.log(error)
        }
    }

    // Get all data from Firebase
    async getAll () {
        try {
            const result = []
            const snapshot = await this.collection.get()
            snapshot.forEach(doc => {
                result.push({ id: doc.id, ...doc.data() })
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    // Get by id
    async getById (id) {
        try {
            const item = await this.collection.doc(id).get()
            if (item.exists) {
                return {...item.data(), id }
            } else {
                return { error: 'data not found' }
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Update by id (if not found it will be created)
    async updateById (id, item) {
        try {
            return await this.collection.doc(id).set(item)
        } catch (error) {
            console.log(error)
        }
    }

    // Delete by id
    async deleteById (id) {
        try {
            return await this.collection.doc(id).delete()
        } catch (error) {
            console.log(error)
        }
    }
}