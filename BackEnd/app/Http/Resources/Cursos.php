<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;


class Cursos extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
         //return $request;
        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'inicio' =>$this->inicio,
            'fim' => $this->fim,
          //  'professor' => $this->professor->nome,
            //'sala' => $this->sala->sala,

        ];
    }
}
