<?php

use Illuminate\Database\Seeder;

class SalasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('salas')->insert(['sala' => 401]);
        DB::table('salas')->insert(['sala' => 402]);
        DB::table('salas')->insert(['sala' => 403]);
        DB::table('salas')->insert(['sala' => 404]);
        DB::table('salas')->insert(['sala' => 405]);
    }
}
