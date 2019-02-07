@extends('layouts.app')

@section('content')
   <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table class="table striped table-hover">
                            <thead class="thead-dark">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Salas</th>                
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($sala as $s)
                                <tr>
                                  <th scope="row">{{ $s->id }}</th>
                                  <td>{{ $s->sala }}</td>
                                </tr>
                                @endforeach  
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>   
   </div>
@endsection