<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(SalasSeeder::class);
        $this->call(ProfessoresSeeder::class);
        $this->call(CursosSeeder::class);
    }
}
