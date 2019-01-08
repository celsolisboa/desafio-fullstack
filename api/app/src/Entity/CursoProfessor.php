<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;

/**
 * CursoProfessor
 *
 * @ORM\Table(name="curso_professor", indexes={@ORM\Index(name="curso_id", columns={"curso_id"}), @ORM\Index(name="professor_id", columns={"professor_id"})})
 * @ORM\Entity
 */
class CursoProfessor extends Model
{
    
    protected $table = "curso_professor";
    
    private $id;

    /**
     * @var \App\Entity\Curso
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Curso")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="curso_id", referencedColumnName="id")
     * })
     */
    private $curso;

    /**
     * @var \App\Entity\Professor
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Professor")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="professor_id", referencedColumnName="id")
     * })
     */
    private $professor;



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
     * Set curso.
     *
     * @param \App\Entity\Curso  $curso
     *
     * @return CursoProfessor
     */
    public function setCurso(\App\Entity\Curso $curso = null)
    {
        $this->curso = $curso;

        return $this;
    }

    /**
     * Get curso.
     *
     * @return \App\Entity\Curso 
     */
    public function getCurso()
    {
        return $this->curso;
    }

    /**
     * Set professor.
     *
     * @param \App\Entity\Professor  $professor
     *
     * @return CursoProfessor
     */
    public function setProfessor(\App\Entity\Professor $professor = null)
    {
        $this->professor = $professor;

        return $this;
    }

    /**
     * Get professor.
     *
     * @return \App\Entity\Professor 
     */
    public function getProfessor()
    {
        return $this->professor;
    }
}
