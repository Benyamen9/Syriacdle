import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'word_forms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Sedra references
      table.integer('word_id').references('words.id').notNullable().onDelete('CASCADE')
      table.string('word_uri')
      table.integer('lexeme_id').references('lexemes.id').notNullable().onDelete('CASCADE')
      table.string('lexeme_uri')

      // Text forms
      table.text('syriac').notNullable()
      table.string('western')
      table.string('eastern')

      // Morphology - nouns
      table.string('state')
      table.string('number')
      table.string('gender')

      // Morphology - verbs
      table.string('tense')
      table.string('person')
      table.string('kaylo')

      // Suffixes
      table.string('suffix_type')
      table.string('suffix_number')
      table.string('suffix_person')
      table.string('suffix_gender')

      // Flags
      table.boolean('has_seyame').defaultTo(false)
      table.boolean('is_lexical_form').defaultTo(false)
      table.boolean('is_enclitic').defaultTo(false)
      table.boolean('is_theoretical').defaultTo(false)

      // Indexes
      table.index(['word_id'])
      table.index(['lexeme_id'])
      table.index(['is_lexical_form'])

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
