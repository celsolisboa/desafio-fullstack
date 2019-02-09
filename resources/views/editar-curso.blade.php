@extends('layouts.app')
@section('content')
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Cadastro de Curso</h5>
                            <form action="/cursos/{{ $curso->id }}" class="form-row" method="post">
                            @csrf
                                <div class="form-group col-md-12">
                                    <label for="nome_curso">Nome do curso: </label>
                                    <input type="text" name="nome_curso" class="form-control" value="{{ $curso->nome_curso }}">                                   
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="sala_id">Sala de Aula: </label>
                                    <select name="sala_id" class="form-control">
                                        <option value="">Selecione</option>   
                                        @foreach($sala as $s)                                    
                                        <option <?php if($curso->sala_id === $s->id){ echo 'selected';}  ?> value="{{ $s->id }}">{{ $s->sala }}</option>
                                        @endforeach
                                    </select>                                  
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="professor_id">Professor: </label>
                                    <select name="professor_id" class="form-control">
                                    <option value="">Selecione</option>
                                        @foreach($prof as $p)                                    
                                        <option <?php if($curso->professor_id === $p->id){ echo 'selected';}  ?> value="{{ $p->id }}">{{ $p->nome }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inicio">Inicio:</label>
                                    <input type="time" name="inicio" class="form-control" value="{{ $curso->inicio }}">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="fim">Fim:</label>
                                    <input type="time" name="fim" class="form-control" value="{{ $curso->fim }}">
                                </div>                            
                            <div class="card-footer col-md-12">                                
                                <button type="submit" class="btn btn-primary">Alterar <i class="fas fa-edit"></i></button>
                            </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection