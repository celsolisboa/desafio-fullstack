@extends('layouts/app')

@section('content')
 <h1>Cursos</h1>
 <a href="{{url('/cursos/create')}}" class="btn btn-success"> Novo curso</a>
 <hr>
    @if (count($cursos) == 0)
        
        <div class="col-xs-12 col-md-12">
            <h3> Não há cursos cadastrados no momento.</h3>
        </div>

    @else

     @foreach ($cursos as $curso)
        <div class="col-xs-12 col-md-6 form-group">
            <div class="col-xs-12 col-md-12 border-rounded-black">
                <div class="row">
                     <div class="col-xs-10 col-md-10">
                        <h4>{{ $curso->nome }}</h4>
                     </div>
                     <div class="col-xs-2 col-md-2 text-right">
                        <h4>
                            <a title="Excluir curso" href="{{ url('cursos.destroy', $curso->id)}}">
                                <i class="fa fa-trash"></i>
                            </a>
                        </h4>
                     </div>
                </div>
                <div class="row margin-top-10">
                     <div class="col-xs-12 col-md-12">
                        Prof. {{ $curso->Professor()}}
                     </div>
                     <div class="col-xs-6 col-md-8">
                        Sala {{ $curso->Sala()}}
                     </div>
                     <div class="col-xs-6 col-md-4 text-right">
                         {{ substr($curso->inicio, 0, 5)}} às {{ substr($curso->fim, 0, 5)}}
                     </div>
                </div>
            </div>
        </div>
     @endforeach
    @endif
@endsection