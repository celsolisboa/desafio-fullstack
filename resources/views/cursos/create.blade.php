@extends('layouts.app')
@section('content')
    <h1> Criar Curso</h1>
    {!! Form::open(['method' => 'POST', 'url' => 'cursos']) !!}
        {{ Form::hidden('user_id', $user) }}
        <div class="form-row">
            <div class="form-group col-xs-12 col-md-6">
                {!! Form::text('nome', null, ['class'=>'form-control ', 'placeholder'=>'Nome do curso']) !!}
            </div>
            <div class="form-group col-xs-12 col-md-6">
                {!! Form::select('professor_id', $professores, null, ['class'=>'form-control ']) !!}
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-xs-12 col-md-6">
                {!! Form::select('sala_id',$salas, null, ['class'=>'form-control ']) !!}
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