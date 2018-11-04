@extends('layouts/app')

@section('content')
 <h1>Cursos</h1>
 <a href="{{url('/cursos/create')}}" class="btn btn-success"> Novo curso</a>
 <hr>
 <div class="table-responsive">

     @foreach ($cursos as $curso)
         <div class="col-sm-12 col-md-6">
             <div clas="col-sm-10">
                {{ $curso->Materia() }}
             </div>
             <div clas="col-sm-2">
                <a href="{{ url('cursos.destroy', $curso->id)}}">
                    <i class=" fa fa-trash"></i>
                </a>
             </div>
             <div class="col-sm-12 col-md-12">
                {{ $curso->Professor()}}
             </div>
             <div class="col-sm-8 col-md-8">
                 {{ $curso->Sala()}}
             </div>
             <div class="col-sm-4 col-md-4">
                 {{ $curso->inicio}} às {{ $curso->fim}}
             </div>
         </div>
     @endforeach

 </div>
@endsection