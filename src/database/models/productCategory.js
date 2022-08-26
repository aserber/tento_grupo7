module.exports = (sequelize, dataTypes) => {
    let alias = 'productCategory';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: "productCategory",
        timestamps: false,
    }
    const productCategory = sequelize.define(alias, cols, config); 

    productCategory.associate = function (models) {
        productCategory.hasMany(models.Product, { 
            as: "product",
            foreignKey: 'id_productCategory',
        })
    }

    return productCategory
};