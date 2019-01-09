<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;
 
class Usuario extends Model
{
    protected $table = "usuario";
    public $timestamps = false;
     
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
    /**
     * Get email.
     *
     * @return string
     */
 
    public function getEmail()
    {
        return $this->email;
    }
    /**
     * Set senha.
     *
     * @param string $senha
     *
     * @return Usuario
     */
     
    public function setSenha($senha)
    {
        $this->senha = $senha;
        return $this;
    }
    /**
     * Get senha.
     *
     * @return string
     */
 
    public function getSenha()
    {
        return $this->senha;
    }
    /**
     * Set token.
     *
     * @param string|null $token
     *
     * @return Usuario
     */
 
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
