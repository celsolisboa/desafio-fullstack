@extends('layouts.app')
@section('content')
    <h1> Editar Curso</h1>
    {!! Form::model($curso,['method' => 'PATCH','route'=>['cursos.update',$curso->id]]) !!}
        {{ Form::hidden('user_id', $user) }}
        <div class="form-row">
            <div class="form-group col-xs-12 col-md-6">
                {!! Form::text('nome', null, ['class'=>'form-control ', 'placeholder'=>'Nome do curso']) !!}
            </div>
            <div class="form-group col-xs-12 col-md-6">
                {!! Form::select('professor_id', $professores, null, ['class'=>'form-control', 'multiple' => 'multiple']) !!}
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-xs-12 col-md-6">
                {!! Form::select('sala_id',$salas, null, ['class'=>'form-control', 'multiple' => 'multiple']) !!}
            </div>
            <div class="form-group col-xs-6 col-md-3">
                {!! Form::text('inicio',null,['class'=>'form-control time-format','placeholder'=>'Inicio' ]) !!}
            </div>
            <div class="form-group col-xs-6 col-md-3">
                {!! Form::text('fim',null,['class'=>'form-control time-format','placeholder'=>'Fim']) !!}
            </div>
        </div>
        <div class="form-row">
            <div class="col-xs-6 col-md-3 pull-right">
                {!! Form::submit(trans('messages.Save'), ['class' => 'btn btn-primary form-control']) !!}
            </div>
            <div class="col-xs-6 col-md-3 pull-right">
                <a href="{{ url('cursos')}}" class="btn btn-default form-control">{{ trans('messages.Back') }}</a>
            </div>
        </div>
    {!! Form::close() !!}
@stop