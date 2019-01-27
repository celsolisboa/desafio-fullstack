<?php

namespace App\Http\Middleware;
use App\Http\Controllers\LoginController;
use Closure;
use App\User;
class login
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {



        if($request->is('api/user')) {
            return $next($request);
        }
        if(LoginController::verificarToken($request)){
            return $next($request);
        }

        return response('Acesso invalido', 404);
    }
}
