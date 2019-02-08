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
        DB::table('cursos')->insert(['sala_id' => 1, 'professor_id' => 1, 'nome_curso' => 'Biologia', 'inicio' => '18:00', 'fim' => '18:45']);
        DB::table('cursos')->insert(['sala_id' => 2, 'professor_id' => 2, 'nome_curso' => 'Português', 'inicio' => '19:00', 'fim' => '19:45']);
        DB::table('cursos')->insert(['sala_id' => 3, 'professor_id' => 3, 'nome_curso' => 'Física', 'inicio' => '19:50', 'fim' => '20:25']);
    }
}
