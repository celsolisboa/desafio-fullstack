<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use phpDocumentor\Reflection\DocBlock\Description;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
  //  protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       // $this->middleware('guest')->except('logout');
    }

    public function login(Request $request) {

        $email = $request->only('email');
        $senha = $request->only('password');
        $senha = md5($senha);
        $user = User::where('email', $email);
       if($user->password == $senha) {
        $token = sha1(time());
        return response(['token'=> $token], 200);
       }else {
          return response('senha invalida', 404);
       }
    }
}
