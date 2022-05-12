'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  await db.runSql(`alter table user_invites add constraint pk_user_invites primary key (child_id, parent_id)`);
  return null;
};

exports.down = async function(db) {
  await db.runSql(`alter table user_invites drop primary key`);
  return null;
};

exports._meta = {
  "version": 1
};