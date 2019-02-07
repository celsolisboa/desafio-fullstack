@extends('layouts.app')

@section('content')
   <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                    @if(count($professor) > 0)
                        <table class="table striped table-hover">
                            <thead class="thead-dark">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Nome</th>
                                  <th scope="col">Sobrenome</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($professor as $p)
                                <tr>
                                  <th scope="row">{{ $p->id }}</th>
                                  <td>{{ $p->nome }}</td>
                                  <td>{{ $p->sobrenome }}</td>
                                </tr>
                                @endforeach  
                            </tbody>
                        </table>
                    @else
                         echo $error;
                    @endif;    
                    </div>
                </div>
            </div>
        </div>   
   </div>
@endsection