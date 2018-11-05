<?php

namespace App\Http\Middleware;

use Closure;

class checkLocale
{
    /**
     * Verify and apply the choosen locale.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!session()->has('locale')){
            session()->put('locale', $request->getPreferredLanguage());
        }

        app()->setLocale(session('locale'));
        
        return $next($request);
    }
}
