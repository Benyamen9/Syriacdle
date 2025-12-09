import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'word_form_glosses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('word_form_id').notNullable().references('word_forms.id').onDelete('CASCADE')

      table.string('language_code').notNullable()
      table.text('gloss_text').notNullable()
      table.integer('gloss_order').defaultTo(0)
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
