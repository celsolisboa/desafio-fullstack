@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            @if( count($prof) > 0 )
                @foreach($prof as $p)
            <div class="col-md-6">
                @foreach($p->salas as $s)
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-11">
                                <h5 class="card-title">{{ $s->pivot->nome_curso }}</h5>                        
                            </div>
                            <div class="col-md-1">
                                <i class="far fa-trash-alt"></i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="card-text">Professor: {{ $p->nome }} {{ $p->sobrenome }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-9">
                                <p>Sala: {{ $s->sala }}</p>                            
                            </div>
                            <div class="col-md-3">
                                <p>{{ $s->pivot->inicio }} às {{ $s->pivot->fim }}</p>
                            </div> 
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            @endforeach
            @else
                <div class="alert alert-primary" role="alert">
                    <strong>Erro!</strong> Nenhum registro foi cadastrado.
                </div>
            @endif
        </div>
    </div>
@endsection