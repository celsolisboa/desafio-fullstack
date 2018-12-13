<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Curso $curso
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $curso->cd_curso],
                ['confirm' => __('Are you sure you want to delete # {0}?', $curso->cd_curso)]
            )
        ?></li>
        <li><?= $this->Html->link(__('List Curso'), ['action' => 'index']) ?></li>
    </ul>
</nav>
<div class="curso form large-9 medium-8 columns content">
    <?= $this->Form->create($curso) ?>
    <fieldset>
        <legend><?= __('Edit Curso') ?></legend>
        <?php
            echo $this->Form->control('nm_curso');
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
