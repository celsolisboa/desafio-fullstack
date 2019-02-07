<?php

use Illuminate\Database\Seeder;

class ProfessoresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('professores')->insert(['nome' => 'Fernando', 'sobrenome' => 'Soares']);   
        DB::table('professores')->insert(['nome' => 'Felipe', 'sobrenome' => 'Augusto']);
        DB::table('professores')->insert(['nome' => 'Maria', 'sobrenome' => 'Silva']);
        DB::table('professores')->insert(['nome' => 'Rodrigo', 'sobrenome' => 'Castro']);
    }
}
