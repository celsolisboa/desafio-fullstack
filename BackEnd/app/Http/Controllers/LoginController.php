<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class LoginController extends Controller
{



    public function login(Request $request) {

        $email = $request->input('email');
        $senha = $request->input('password');

        $senha = md5($senha);
       // return User::all(;);
      // return $email;
        $user = User::where('email','=',  $email)->first();
       if($user->password == $senha) {
        $token = sha1(time());
        $user->remember_token = $token;
        $user->save();
        return response(['token'=> $token], 200);
       }else {
          return response('senha invalida', 404);
       }
    }

    public static function verificarToken(Request $request) {

        $header = $request->header('token');
        if(User::where('remember_token', $header)->get()->isNotEmpty()) {
            return true;
        }
        return false;

    }
}
