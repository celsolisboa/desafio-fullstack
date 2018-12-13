<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\CursoTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\CursoTable Test Case
 */
class CursoTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\CursoTable
     */
    public $Curso;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.Curso'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('Curso') ? [] : ['className' => CursoTable::class];
        $this->Curso = TableRegistry::getTableLocator()->get('Curso', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Curso);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
