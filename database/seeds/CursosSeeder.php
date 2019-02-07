<?php

use Illuminate\Database\Seeder;

class CursosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cursos')->insert(['sala_id' => 1, 'prof_id' => 1, 'nome' => 'Biologia', 'inicio' => '18:00', 'fim' => '18:45']);
        DB::table('cursos')->insert(['sala_id' => 2, 'prof_id' => 2, 'nome' => 'Português', 'inicio' => '19:00', 'fim' => '19:45']);
    }
}
