<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function trocarLinguagem(Request $request, $locale = 'en'){
        $linguagem_atual = strtolower($request->getPreferredLanguage());
        if((!session()->has('locale')) || ($linguagem_atual != $locale)){
            session()->put('locale', $locale);
        }

        return redirect()->back();
    }
}
