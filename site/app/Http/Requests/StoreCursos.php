<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCursos extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id_professor'    	=> 'required', 
            'id_sala'    		=> 'required', 
            'nome'        		=> 'required', 
            'inicio'    		=> 'required', 
            'fim'      			=> 'required',
            //
        ];
    }
}
