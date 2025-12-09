import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_permissions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE')
      table.integer('permission_id').references('permissions.id').notNullable().onDelete('CASCADE')
      table.integer('granted_by').references('users.id').notNullable().onDelete('SET NULL')

      table.unique(['user_id', 'permission_id'])
      table.index(['user_id'])
      table.index(['permission_id'])

      table.timestamp('granted_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
