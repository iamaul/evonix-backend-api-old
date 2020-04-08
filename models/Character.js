const { DataTypes } = require('sequelize');

// Connection
const database = require('../config/database');

// Models
const UserModel = require('../models/User');
const User = UserModel(database, DataTypes);

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Character', {
        userid: {
            type: DataTypes.INTEGER(11),
            references: {
                model: User,
                key: 'id'
            }
        },
        name: { type: DataTypes.STRING(24) },
        lastlogin: { type: DataTypes.INTEGER },
        skin_id: { type: DataTypes.INTEGER },
        birth_day: { type: DataTypes.MEDIUMINT },
        birth_month: { type: DataTypes.MEDIUMINT },
        birth_year: { type: DataTypes.INTEGER },
        level: { type: DataTypes.INTEGER },
        exp: { type: DataTypes.INTEGER },
        play_second: { type: DataTypes.INTEGER },
        play_minute: { type: DataTypes.INTEGER },
        play_hour: { type: DataTypes.INTEGER },
        pos_int: { type: DataTypes.INTEGER },
        pos_world: { type: DataTypes.INTEGER },
        pos_x: { type: DataTypes.FLOAT },
        pos_y: { type: DataTypes.FLOAT },
        pos_z: { type: DataTypes.FLOAT },
        pos_a: { type: DataTypes.FLOAT },
        money: { type: DataTypes.INTEGER },
        bank: { type: DataTypes.INTEGER },
        hunger: { type: DataTypes.INTEGER },
        energy: { type: DataTypes.INTEGER },
        health: { type: DataTypes.FLOAT },
        armour: { type: DataTypes.FLOAT },
        death_mode: { type: DataTypes.TINYINT },
        phone_number: { type: DataTypes.INTEGER },
        phone_status: { type: DataTypes.INTEGER },
        job_type: { type: DataTypes.TINYINT },
        job_duty: { type: DataTypes.TINYINT },
        job_skin: { type: DataTypes.TINYINT },
        job_lastskin: { type: DataTypes.TINYINT },
        job_exp: { type: DataTypes.TINYINT },
        job_level: { type: DataTypes.TINYINT },
        job_timer: { type: DataTypes.TINYINT },
        faction_sqlid: { type: DataTypes.INTEGER },
        faction_rank: { type: DataTypes.INTEGER },
        faction_rankname: { type: DataTypes.VARCHAR(30) },
        faction_div: { type: DataTypes.INTEGER },
        faction_divname: { type: DataTypes.VARCHAR(30) },
        faction_duty: { type: DataTypes.TINYINT },
        faction_dutytime: { type: DataTypes.INTEGER },
        faction_skin: { type: DataTypes.INTEGER },
        handcuff_status: { type: DataTypes.TINYINT },
        garbage: { type: DataTypes.INTEGER },
        radio_status: { type: DataTypes.TINYINT },
        radio_channel1: { type: DataTypes.INTEGER },
        radio_channel2: { type: DataTypes.INTEGER },
        radio_channel3: { type: DataTypes.INTEGER },
        radio_channel4: { type: DataTypes.INTEGER },
        radio_main: { type: DataTypes.INTEGER },
        headache: { type: DataTypes.INTEGER },
        drug_addict: { type: DataTypes.INTEGER },
        drug_last: { type: DataTypes.INTEGER },
        license_driving: { type: DataTypes.INTEGER },
        license_flying: { type: DataTypes.INTEGER },
        license_sealing: { type: DataTypes.INTEGER },
        admin_jail_timer: { type: DataTypes.INTEGER },
        admin_jail_issuer: { type: DataTypes.VARCHAR(24) },
        admin_jail_reason: { type: DataTypes.VARCHAR(100) }
    }, { tableName: 'characters' });
}
