import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'logs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('users.id').notNullable().onDelete('SET NULL')
      table.string('entity_type')
      table.integer('entity_id')
      table.string('action')

      table.jsonb('old_value')
      table.jsonb('new_value')

      table.string('ip_address')
      table.text('user_agent')

      table.index(['user_id'])
      table.index(['entity_type', 'entity_id'])
      table.index(['action'])
      table.index(['created_at'])

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
