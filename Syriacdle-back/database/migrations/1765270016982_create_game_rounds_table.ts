import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'game_rounds'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE')

      table.integer('root_id').notNullable().references('roots.id').onDelete('CASCADE')

      table.integer('attempts').notNullable().defaultTo(0)
      table.boolean('success').notNullable().defaultTo(false)

      table.unique(['user_id', 'root_id'])

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
