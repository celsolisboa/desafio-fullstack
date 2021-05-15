exports.up = function(db, callback) {
  db.createTable('courses', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      defaultValue : new String('gen_random_uuid()')
    },
    name: {
      type: 'string',
      notNull: true
    },
    teachers: {
      type: 'string',
      notNull: true
    },
    rooms: {
      type: 'string',
      notNull: true
    },
    start_at: {
      type: 'time',
      notNull: true
    },
    end_at: {
      type: 'time',
      notNull: true
    },
    created_at: {
      type: 'datetime',
      notNull: true,
      defaultValue : new String('now()')
    },
    disabled: {
      type: 'boolean',
      notNull: true,
      defaultValue: false
    }
  }, callback)
}

exports.down = function(db, callback) {
  db.dropTable('courses', callback)
}
