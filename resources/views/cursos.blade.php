@extends('layouts.app')
@section('content')
<section>
    <div class="container">
        <div class="row">
            @if( count( $prof ) > 0 )
                @foreach( $prof as $p )
                    @foreach( $p->salas as $s  )
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ $s->pivot->nome_curso }}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">{{ $s->pivot->inicio }} às {{ $s->pivot->fim }}</h6>
                                        <p class="card-text"><i class="fas fa-chalkboard-teacher"></i> {{ $p->nome }} {{ $p->sobrenome }}</p>
                                        <a href="/cursos/apagar/{{ $s->pivot->id }}" class="card-link"><i class="far fa-trash-alt"></i></a>
                                        <a href="/cursos/editar/{{ $s->pivot->id }}" class="card-link"><i class="fas fa-edit"></i></a>
                                    </div>
                                </div>                
                            </div>
                    @endforeach        
                @endforeach    
            @endif
        </div>
    </div>
</section>
@endsection