const fs = require('fs')
const csv = require('csv-parser')
const stripBom = require('strip-bom-stream');
const path = require('path')
const db = require('./models')

const seeder = () => {
    const file = path.join(__dirname,'/../classics.csv')
    const rows = []
        fs.createReadStream(file)
        .pipe(stripBom())
        .pipe(csv({
            mapHeaders: ({ header, index }) => {
                switch(header) {
                    case 'bibliography.title':
                        return 'title';
                    case 'bibliography.author.name':
                        return 'author';
                    case 'metadata.id':
                        return 'code';
                    default:
                        return null;
                }
            }
        }))
        .on('data', row => {
            rows.push({
                ...row, 
                quantity: Math.floor(Math.random() * Math.floor(20)),
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        })
        .on('end', async () => {
            const queryInterface = db.sequelize.getQueryInterface()
            try {
                await queryInterface.bulkDelete('Books', null, {});
                await queryInterface.bulkInsert('Books', rows, {});
                console.log('ALL DATA HAVE BEEN IMPORTED INTO Books')
            } catch(error) {
                console.error(error)
            }
        })
}

seeder()