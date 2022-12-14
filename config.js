// Load dotenv config
require('dotenv').config()

// MongoDB URI
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'

// Firebase admin Config
const firebase_config = {
    type: "service_account",
    project_id: "coderhouse-324d9",
    private_key_id: "b45a3ba11868762d0b37d22636669eb0e808f764",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCi0+Nw1zvVvgr4\nuy+MyQbJiL5ySOVfIv7Qg0ZNRPSY4psHZCwN1sAJ0aWAEAezctUcP/01jQsIwaJv\nBO0ydk/RMD/YfGiHM52Xbzdb5FXX6tjwJsxAkeC1kXivFt6Ds7kt4JduYVP08I8q\noWx8dQ8ZmUSwSQ0AaIfnaQC+9l3jtfTseOhuWRkcy3FjQlNTREbxK5EnOjIUvfX5\nX4KME2bhxUefjJK/fjN3C8p4vREnVSQ/B7Zlui1NWxw9ghE0j0p6WdOkgHGKYyE1\nw5u0BPhtpNv8TWr8UH6OJ9Gb5auO809oCYAddhzCp3RsNk0aQFcHX+But79L2ExO\nCDdCmMLJAgMBAAECggEAP7bS9ko6fypkp6yzcA8PiVfpUdYFbwNGG3hqz3yOi66M\nREml1Wp1bcIr1R8wrD7gdjPx1H0S1sPSWEfguxDBrdUH/qG70z/WyDV8P4hrMNiU\nN/CulwueFt5MD5NO0dFHQlTyXH5YOG3TT7anuVGi7XzkfGixXjoJB/u2D4Ne/OWL\ndk3FYbQ9FZywKkFEgfD+MfQoMZvoA6maxqp5Yv4mIyNht24Ls/WZWQxfS/NIwPbu\npWcr+WyA00gE8fbJBq8XlQQkRLygYxzQsRN/CvoUu+0PoGcrBhHqOVGOCSP2mONT\nEoyefnxeMH2i7XoUv/HNwjJOW5ANsSxbH6MZHmDIkwKBgQDfnADaGOLzgD73LN1J\nMlI74CUKXoe7zcOLfVsrLglTUe0oO7s0+BuCvHxzCI6jkOsOYVh4ciyB2LYnJGtc\nsgVCb/vSk6nxVbiZ7+adx986L0cq0wywnzmxLWlsn7Zx+NsJaOvxfd57dAhX1tMD\nP4CHBY0vcm1qYj/eEHiFNUFBOwKBgQC6afKFcSmDIqxBH0405bLOiYmY4T5SmoRM\nATU7E6xbp1kigulCKrMpknzFOBpgOnFBwFZeIm1ZM2Y6rBdCXl7xks7Llb928H9i\npxPPdqaDHw61dDwL/o3T0cJtzYVF4uwLsvsbSGkE9dZtIyvaQ2HBBe4jWl9pmWjK\nXEQGRV2LywKBgQC7c/BS5WH8d5pRY87uOb0ubK0gkDaBffFb0m7HOAShUKDbhZde\nxE9rvc8mMBpDjI1AtOKRtkURZTbugV1vi91U4MPet+NTaWUjxzUxOAkuocurXtnY\nhuK6YTNr2Ef+K3yT2t1QyQ/ltlP4LyMeKfH5PvIowGhxMoQQCQa/xPE7WQKBgD1f\nrmpCxKEZJE9YiD4gNguL+tJrrkIx/0aqyyTFKGUQpucW5MdVGaGhShUAkKaH90vn\nkEfz276XjpvYltvSCD5O0Gj0x5HYQohva7VNYisfaY9SUoa8a2OG1xWhqbRFruN3\nLPdhkroAWnWaM9DriF6tnibjlTBGQtsFH5xU8CSbAoGBANUYzSQUfIFMJE6xnMzj\nH8iFXDYNXG7upeFthWZRuBBTd9SQa6xfe31GhKX19fr0kNtpUB8s9hxyLsuxFPk/\nhqyFhIokdaMhG6Ot8YqhDiYMNGB4vaR8MNGDJka+D3Fx+6f02ZN3tHn41jEFaKKe\nDt6zrZryZodufDmJM4Y3KshF\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-f3ftc@coderhouse-324d9.iam.gserviceaccount.com",
    client_id: "107949515599446401994",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-f3ftc%40coderhouse-324d9.iam.gserviceaccount.com"
}

module.exports = {
    mongodb_uri,
    firebase_config
}