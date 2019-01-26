<?php

namespace App\Http\Resources;
use App\Http\Resources\Professor;
use App\Http\Resources\Sala;
use Illuminate\Http\Resources\Json\JsonResource;

class CursoRe extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
    return [
        'id' => $this->id,
        'nome' => $this->nome,
        'inicio' =>$this->inicio,
        'fim' => $this->fim,
        'professor' => Professor::collection($this->professor),
        'sala' => Sala::collection($this->sala)

    ];

    }
}
