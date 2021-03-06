import {Knex} from "knex"


export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable("points", table => {
        table.increments('id').primary(); //Chave primária
         table.string('image').notNullable()
         table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('UF', 2).notNullable()
    })
}
export async function down(knex: Knex) {
    // VOLTAR ATRÁS (DELETAR A TABELA)
    return knex.schema.dropTable('points')
}