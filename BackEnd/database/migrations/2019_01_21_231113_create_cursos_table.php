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
            $table->integer('id');
            $table->primary('id')->increments();
            $table->time('inicio');
            $table->time('fim');
            $table->integer('professor_id');
            $table->integer('sala_id');
            $table->foreign('professor_id')
            ->references('id')->on('professors');
            $table->foreign('sala_id')
            ->references('id')->on('salas');
            $table->timestamps();
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
