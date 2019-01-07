<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Curso
 *
 * @ORM\Table(name="curso", indexes={@ORM\Index(name="disciplina_id", columns={"disciplina_id"})})
 * @ORM\Entity
 */
class Curso
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
     * @var \DateTime
     *
     * @ORM\Column(name="horario_inicio", type="time", precision=0, scale=0, nullable=false, unique=false)
     */
    private $horarioInicio;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="horario_fim", type="time", precision=0, scale=0, nullable=false, unique=false)
     */
    private $horarioFim;

    /**
     * @var \App\Entity\Disciplina
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Disciplina")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="disciplina_id", referencedColumnName="id", nullable=true)
     * })
     */
    private $disciplina;


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
     * Set horarioInicio.
     *
     * @param \DateTime $horarioInicio
     *
     * @return Curso
     */
    public function setHorarioInicio($horarioInicio)
    {
        $this->horarioInicio = $horarioInicio;

        return $this;
    }

    /**
     * Get horarioInicio.
     *
     * @return \DateTime
     */
    public function getHorarioInicio()
    {
        return $this->horarioInicio;
    }

    /**
     * Set horarioFim.
     *
     * @param \DateTime $horarioFim
     *
     * @return Curso
     */
    public function setHorarioFim($horarioFim)
    {
        $this->horarioFim = $horarioFim;

        return $this;
    }

    /**
     * Get horarioFim.
     *
     * @return \DateTime
     */
    public function getHorarioFim()
    {
        return $this->horarioFim;
    }

    /**
     * Set disciplina.
     *
     * @param \App\Entity\Disciplina|null $disciplina
     *
     * @return Curso
     */
    public function setDisciplina(\App\Entity\Disciplina $disciplina = null)
    {
        $this->disciplina = $disciplina;

        return $this;
    }

    /**
     * Get disciplina.
     *
     * @return \App\Entity\Disciplina|null
     */
    public function getDisciplina()
    {
        return $this->disciplina;
    }
}
