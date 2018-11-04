@extends('layouts.app')
@section('content')
    <h1>{{ trans('messages.Show')." ".trans('messages.Order') }}</h1>
    <form class="form-horizontal">
        <div class="form-group">
            <label for="id_date" class="col-sm-2 control-label">{{ trans('messages.DtPedido') }}</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="id_date" placeholder="{{$pedido->DtPedido}}" readonly>
            </div>
        </div>
        <div class="form-group">
            <label for="id_pedido" class="col-sm-2 control-label">{{ trans('messages.Product') }}</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="id_pedido" placeholder="{{$pedido->Produto()}}" readonly>
            </div>
        </div>
        <div class="form-group">
            <label for="id_cliente" class="col-sm-2 control-label">{{ trans('messages.Client') }}</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="id_cliente" placeholder="{{$pedido->Cliente()}}" readonly>  
            </div>
        </div>
        <div class="form-group">
            <label for="title" class="col-sm-2 control-label">{{ trans('messages.Status') }}</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="title" placeholder="{{ trans('messages.'.$pedido->status) }}" readonly>
            </div>
        </div>
        <div class="form-group">
            <label for="Quantidade" class="col-sm-2 control-label">{{ trans('messages.Amount') }}</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="Quantidade" placeholder="{{$pedido->Quantidade}}" readonly>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <a href="{{ url('pedidos')}}" class="btn btn-primary">{{ trans('messages.Back') }}</a>
            </div>
        </div>
    </form>
@stop