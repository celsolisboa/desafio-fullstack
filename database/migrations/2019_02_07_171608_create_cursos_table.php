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
            $table->integer('sala_id')->unsigned();
            $table->foreign('sala_id')->references('id')->on('salas');
            $table->integer('professor_id')->unsigned();
            $table->foreign('professor_id')->references('id')->on('professores');
            $table->string('nome_curso');
            $table->string('inicio');
            $table->string('fim');
            $table->timestamps();
            $table->primary(['sala_id', 'professor_id']);
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
