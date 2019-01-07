<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CursoSala
 *
 * @ORM\Table(name="curso_sala", indexes={@ORM\Index(name="sala_id", columns={"sala_id"}), @ORM\Index(name="curso_id", columns={"curso_id"})})
 * @ORM\Entity
 */
class CursoSala
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
     * @var \App\Entity\Sala
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Sala")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="sala_id", referencedColumnName="id", nullable=true)
     * })
     */
    private $sala;


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
     * @return CursoSala
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
     * Set sala.
     *
     * @param \App\Entity\Sala|null $sala
     *
     * @return CursoSala
     */
    public function setSala(\App\Entity\Sala $sala = null)
    {
        $this->sala = $sala;

        return $this;
    }

    /**
     * Get sala.
     *
     * @return \App\Entity\Sala|null
     */
    public function getSala()
    {
        return $this->sala;
    }
}
