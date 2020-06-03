const { DataTypes } = require('sequelize');

// Connection
const database = require('../config/database');

// Models
const Character = require('./Character');

const Faction = database.define('Faction', {
    name: { type: DataTypes.STRING(60) },
    alias: { type: DataTypes.STRING(30) },
    type: { type: DataTypes.TINYINT },
    leader_sqlid: {
        type: DataTypes.INTEGER(11),
        references: {
            model: Character,
            key: 'id'
        }
    },
    rank_member: { type: DataTypes.TINYINT },
    rank_manager: { type: DataTypes.TINYINT },
    rank_leader: { type: DataTypes.TINYINT },
    rank_executive: { type: DataTypes.TINYINT }
}, { tableName: 'factions' });

Faction.belongsTo(Character, { foreignKey: 'leader_sqlid', as: 'factionLeader' });

module.exports = Faction;