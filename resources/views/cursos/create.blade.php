@extends('layouts.app')
@section('content')
    <h1>{{ trans('messages.Create')." ".trans('messages.Order') }}</h1>
    {!! Form::open(['method' => 'POST', 'url' => 'cursos']) !!}
    <div class="form-group">
        {!! Form::label('nome', "Nome:") !!}
        {!! Form::text('nome', null, ['class'=>'form-control col-sm-12 col-md-6', 'placeholder'=>'Nome do curso']) !!}
    </div>
    <div class="form-group">
        {!! Form::label('id_professor', "Professor:") !!}
        {!! Form::select('id_professor', $professores, null, ['class'=>'form-control col-sm-12 col-md-6']) !!}
    </div>
    <div class="form-group">
        {!! Form::label('id_sala', "Sala:") !!}
        {!! Form::select('id_sala',$salas, null, ['class'=>'form-control col-sm-12 col-md-6']) !!}
    </div>
    <div class="form-group col-sm-12 col-md-6">
        {!! Form::label('Inicio', "Inicio:") !!}
        {!! Form::text('inicio',null,['class'=>'form-control col-sm-6 col-md-6','placeholder'=>'Inicio']) !!}
        {!! Form::text('fim',null,['class'=>'form-control col-sm-6 col-md-6','placeholder'=>'Fim']) !!}
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-sm-6">
                {!! Form::submit(trans('messages.Save'), ['class' => 'btn btn-primary form-control']) !!}
            </div>
            <div class="col-sm-6">
                <a href="{{ url('cursos')}}" class="btn btn-default form-control">{{ trans('messages.Back') }}</a>
            </div>
        </div>
    </div>
    {!! Form::close() !!}
@stop