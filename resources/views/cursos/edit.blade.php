@extends('layouts.app')
@section('content')
    <h1>{{ trans('messages.Update')." ".trans('messages.Order') }}</h1>
    {!! Form::model($pedido,['method' => 'PATCH','route'=>['pedidos.update',$pedido->id]]) !!}
    <div class="form-group">
        {!! Form::label('DtPedido', trans('messages.DtPedido').":") !!}
        {!! Form::text('DtPedido', null, ['class'=>'form-control', 'id'=>'DtPedido', 'placeholder'=>'____-__-__ __:__:__']) !!}
    </div>
    <div class="form-group">
        {!! Form::label('id_produto', trans('messages.Product').":") !!}
        {!! Form::select('id_produto', $produtos, null, ['class'=>'form-control']) !!}
    </div>
    <div class="form-group">
        {!! Form::label('id_cliente', trans('messages.Client').":") !!}
        {!! Form::select('id_cliente',$clientes, null, ['class'=>'form-control']) !!}
    </div>
    <div class="form-group">
        {!! Form::label('status', trans('messages.Status').":") !!}
        {!! Form::select('status',$status, null, ['class'=>'form-control']) !!}
    </div>
    <div class="form-group">
        {!! Form::label('Quantidade', trans('messages.Amount').":") !!}
        {!! Form::text('Quantidade',null,['class'=>'form-control', 'placeholder'=>'0']) !!}
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-sm-6">
                {!! Form::submit(trans('messages.Update'), ['class' => 'btn btn-primary form-control']) !!}
            </div>
            <div class="col-sm-6">
                <a href="{{ url('pedidos')}}" class="btn btn-default form-control">{{ trans('messages.Back') }}</a>
            </div>
        </div>
    </div>
    {!! Form::close() !!}
@stop