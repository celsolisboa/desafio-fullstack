<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CursoProfessor
 *
 * @ORM\Table(name="curso_professor", indexes={@ORM\Index(name="professor_id", columns={"professor_id"}), @ORM\Index(name="aula_id", columns={"curso_id"})})
 * @ORM\Entity
 */
class CursoProfessor
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", precision=0, scale=0, nullable=false, unique=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var \App\Entity\Curso
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Curso")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="curso_id", referencedColumnName="id", nullable=true)
     * })
     */
    private $curso;

    /**
     * @var \App\Entity\Professor
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Professor")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="professor_id", referencedColumnName="id", nullable=true)
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
     * @param \App\Entity\Curso|null $curso
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
     * @return \App\Entity\Curso|null
     */
    public function getCurso()
    {
        return $this->curso;
    }

    /**
     * Set professor.
     *
     * @param \App\Entity\Professor|null $professor
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
     * @return \App\Entity\Professor|null
     */
    public function getProfessor()
    {
        return $this->professor;
    }
}
