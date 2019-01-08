<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;
 
class Sala extends Model
{
    protected $table = "sala";
    protected $hidden = array('pivot');
    
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="numero", type="string", length=255, nullable=false, options={"fixed"=true})
     */
    private $numero;



    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set numero.
     *
     * @param string $numero
     *
     * @return Sala
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;

        return $this;
    }

    /**
     * Get numero.
     *
     * @return string
     */
    public function getNumero()
    {
        return $this->numero;
    }
    
    
    public function cursos()
    {
        return $this->belongsToMany('\App\Entity\Curso');
    }
}
