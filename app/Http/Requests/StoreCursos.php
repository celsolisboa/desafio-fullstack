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
            'professor_id'    	=> 'required', 
            'sala_id'    		=> 'required', 
            'nome'        		=> 'required|max:255', 
            'inicio'    		=> 'required|date', 
            'fim'      			=> 'required|date',
            //
        ];
    }
}
