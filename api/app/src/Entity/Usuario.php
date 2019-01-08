<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;
 
class Usuario extends Model
{
    protected $table = "usuario";
    private $id;
 
    private $email;

    
    private $senha;
 
    private $token;


 
    public function getId()
    {
        return $this->id;
    }

    
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }
 
    public function getEmail()
    {
        return $this->email;
    }

     
    public function setSenha($senha)
    {
        $this->senha = $senha;

        return $this;
    }
 
    public function getSenha()
    {
        return $this->senha;
    }
 
    public function setToken($token = null)
    {
        $this->token = $token;

        return $this;
    }
 
    public function getToken()
    {
        return $this->token;
    }
}
