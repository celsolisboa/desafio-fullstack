<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCursosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cursos', function (Blueprint $table) {
            $table->integer('sala_id')->unsigned;
            $table->foreign('sala_id')->references('id')->on('salas');
            $table->integer('prof_id')->unsigned;
            $table->foreign('prof_id')->references('id')->on('professores');
            $table->string('nome');
            $table->string('inicio');
            $table->string('fim');
            $table->timestamps();
            $table->primary(['sala_id', 'prof_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cursos');
    }
}
