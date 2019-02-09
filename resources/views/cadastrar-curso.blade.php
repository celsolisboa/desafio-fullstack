@extends('layouts.app')
@section('content')
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Cadastro de Curso</h5>
                            <form action="/cursos/cadastrar" class="form-row" method="post">
                            @csrf
                                <div class="form-group col-md-12">
                                    <label for="nome_curso">Nome do curso:</label>
                                    <input type="text" name="nome_curso" id="nomeCurso" class="form-control {{ $errors->has('nome_curso') ? 'is-invalid' : '' }}"  >
                                    @if($errors->has('nome_curso'))
                                    <div class="invalid-feedback">
                                        {{ $errors->first('nome_curso') }}
                                    </div>
                                    @endif 
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="sala_id">Sala de Aula</label>
                                    <select name="sala_id" class="form-control {{ $errors->has('sala_id') ? 'is-invalid' : '' }}">
                                        <option value="">Selecione</option>
                                        @foreach($sala as $s)
                                        <option value="{{ $s->id }}">{{ $s->sala }}</option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('sala_id'))
                                    <div class="invalid-feedback">
                                        {{ $errors->first('sala_id') }}
                                    </div>
                                    @endif 
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="professor_id">Professor</label>
                                    <select name="professor_id" class="form-control {{ $errors->has('professor_id') ? 'is-invalid' : '' }}">
                                    <option value="">Selecione</option>
                                        @foreach($prof as $p)
                                        <option value="{{ $p->id }}">{{ $p->nome }} {{ $p->sobrenome }}</option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('professor_id'))
                                    <div class="invalid-feedback">
                                        {{ $errors->first('professor_id') }}
                                    </div>
                                    @endif 
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inicio">Inicio:</label>
                                    <input type="time" name="inicio" class="form-control {{ $errors->has('inicio') ? 'is-invalid' : '' }}">
                                    @if($errors->has('inicio'))
                                    <div class="invalid-feedback">
                                        {{ $errors->first('inicio') }}
                                    </div>
                                    @endif 
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="fim">Fim:</label>
                                    <input type="time" name="fim" class="form-control {{ $errors->has('fim') ? 'is-invalid' : '' }}">
                                    @if($errors->has('fim'))
                                    <div class="invalid-feedback">
                                        {{ $errors->first('fim') }}
                                    </div>
                                    @endif 
                                </div>                            
                            <div class="card-footer col-md-12">
                                <button type="reset" class="btn btn-danger"><i class="fas fa-window-close"></i> Limpar</button>
                                <button type="submit" class="btn btn-primary">Salvar <i class="fas fa-save"></i></button>
                            </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   
@endsection