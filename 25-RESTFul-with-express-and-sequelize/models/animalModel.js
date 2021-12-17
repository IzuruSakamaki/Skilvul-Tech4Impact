module.exports = (sequelize, DataTypes) => {

    const Animal = sequelize.define("animal", {
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        namaSpesies: {
            type: DataTypes.STRING,
            allowNull: false
        },
        umur: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    
    })

    return Animal

}