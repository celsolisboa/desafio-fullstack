<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Curso $curso
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('Edit Curso'), ['action' => 'edit', $curso->cd_curso]) ?> </li>
        <li><?= $this->Form->postLink(__('Delete Curso'), ['action' => 'delete', $curso->cd_curso], ['confirm' => __('Are you sure you want to delete # {0}?', $curso->cd_curso)]) ?> </li>
        <li><?= $this->Html->link(__('List Curso'), ['action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Curso'), ['action' => 'add']) ?> </li>
    </ul>
</nav>
<div class="curso view large-9 medium-8 columns content">
    <h3><?= h($curso->cd_curso) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Nm Curso') ?></th>
            <td><?= h($curso->nm_curso) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Cd Curso') ?></th>
            <td><?= $this->Number->format($curso->cd_curso) ?></td>
        </tr>
    </table>
</div>
