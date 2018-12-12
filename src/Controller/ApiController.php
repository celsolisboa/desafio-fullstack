<?php
 
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;
use  Cake\Utility\Xml; 
use Cake\Datasource\ConnectionManager;
use Cake\Model;
use Cake\View\Helper\FormHelper;

class ApiController extends AppController
{

    public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
        

    }
    public function listarSalas()
    {     

        if ($this->request->is(['get'])) {
     
        $connection = ConnectionManager::get('default'); 
        $my_results = $connection->execute('SELECT * from sala')->fetchAll('assoc');
        $this->set([
            'my_response' => $my_results,
            '_serialize' => 'my_response',
        ]);
        $this->RequestHandler->renderAs($this, 'json');
        }

    }

    public function listarProfessores()
    {     

        if ($this->request->is(['get'])) {
     
        $connection = ConnectionManager::get('default'); 
        $my_results = $connection->execute('SELECT * from professor')->fetchAll('assoc');
        $this->set([
            'my_response' => $my_results,
            '_serialize' => 'my_response',
        ]);
        $this->RequestHandler->renderAs($this, 'json');
        }

    }    
    public function listaCursos()
    {     

        if ($this->request->is(['get'])) {
     
        $connection = ConnectionManager::get('default'); 
        $my_results = $connection->execute('SELECT * from curso')->fetchAll('assoc');
        $this->set([
            'my_response' => $my_results,
            '_serialize' => 'my_response',
        ]);
        $this->RequestHandler->renderAs($this, 'json');
        }

    }


    public function listaCurso()
    {     

        if ($this->request->is(['get'])) {
     
        $connection = ConnectionManager::get('default'); 
        $my_results = $connection->execute('SELECT cps.cd_curso_professor_sala,p.nm_professor,c.nm_curso,s.nm_sala ,cps.hr_inicio , cps.hr_fim FROM curso_professor_sala cps,curso c, sala s, professor p where c.cd_curso = cps.cd_curso and cps.cd_sala = s.cd_sala and cps.cd_professor = p.cd_professor')->fetchAll('assoc');
        $this->set([
            'my_response' => $my_results,
            '_serialize' => 'my_response',
        ]);
        $this->RequestHandler->renderAs($this, 'json');
        }

    }

    public function listaCursoEspecifico($id)
    {
        if ($this->request->is(['get'])) {
     
        $connection = ConnectionManager::get('default'); 
        $my_results = $connection->execute('SELECT cps.cd_curso_professor_sala,p.nm_professor,c.nm_curso,s.nm_sala ,cps.hr_inicio , cps.hr_fim FROM curso_professor_sala cps,curso c, sala s, professor p where c.cd_curso = cps.cd_curso and cps.cd_sala = s.cd_sala and cps.cd_professor = p.cd_professor and p.cd_professor = '.$id)->fetchAll('assoc');
        $this->set([
            'my_response' => $my_results,
            '_serialize' => 'my_response',
        ]);
        $this->RequestHandler->renderAs($this, 'json');
        }
    }

    public function adicionarProfessorCursoSala()
    {

        if ($this->request->is(['post'])) 
        {
            $my_results   = $this->request->input('json_decode',true);
        
            $cd_curso     = $my_results['cd_curso'];
            $cd_sala      = $my_results['cd_sala'];
            $cd_professor = $my_results['cd_professor'];
            $hr_inicio    = $my_results['hr_inicio'];
            $hr_fim       = $my_results['hr_fim'];    

            $connection = ConnectionManager::get('default'); 
           $my_results =  $connection->execute("INSERT INTO curso_professor_sala   (cd_curso,cd_professor,cd_sala,hr_inicio,hr_fim) VALUES   ($cd_curso,$cd_professor,$cd_sala,'$hr_inicio','$hr_fim')");
            
            $this->set([
                'my_response' => $my_results,
                '_serialize' => 'my_response',
            ]);
            $this->RequestHandler->renderAs($this, 'json');
        }    
    }


    public function deletarProfessorCursoSala()
    {
      
        if ($this->request->is(['delete'])) {
        $my_results = $this->request->input('json_decode',true);
        $id = $my_results['id'];
        $connection = ConnectionManager::get('default'); 
         $my_results = $connection->execute("DELETE FROM `curso_professor_sala` WHERE `cd_curso_professor_sala`= $id ");

        $this->set([
            'my_response' => $my_results,
            '_serialize' => 'my_response',
        ]);
        $this->RequestHandler->renderAs($this, 'json');
      
        }
        
    }

    public function AtualizarProfessorCursoSala($id)
    {
        if ($this->request->is(['put'])) {

            $my_results   = $this->request->input('json_decode',true);
            $cd_curso     = $my_results['cd_curso'];
            $cd_sala      = $my_results['cd_sala'];
            $cd_professor = $my_results['cd_professor'];
            $hr_inicio    = $my_results['hr_inicio'];
            $hr_fim       = $my_results['hr_fim'];  
            $cd_curso_professor_sala  = $my_results['cd_curso_professor_sala'];      

        $connection = ConnectionManager::get('default'); 
        $my_results = $connection->execute('UPDATE `curso_professor_sala` SET `cd_curso`=$cd_curso,`cd_professor`=$cd_professor,`cd_sala`=$cd_sala,`hr_inicio`=$hr_inicio,`hr_fim`=$hr_fim where `cd_curso_professor_sala` = $cd_curso_professor_sala');
        $this->set([
            'my_response' => $my_results,
            '_serialize' => 'my_response',
        ]);
        $this->RequestHandler->renderAs($this, 'json');
        }
    }
     public function beforeFilter(\Cake\Event\Event $event)
    {
    parent::beforeFilter($event);

        if ($this->request->param('action') === 'actionXyz') {
            $this->eventManager()->off($this->Csrf);
        }
    }
}

?>