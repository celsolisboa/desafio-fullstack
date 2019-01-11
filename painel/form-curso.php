<div class="col-lg-12">

<form onsubmit="salvarCurso(event)">
	
	<input type="hidden" class="form-control" id="id" name="id">
	
	<div class="row">
		<div class="col-lg-6">
			<div class="form-group"> 
				<input type="text" class="form-control" id="nome" placeholder="Nome do Curso" required>	     
			</div>
		</div>
		
		<div class="col-lg-6">
			<div class="form-group"> 
				<select class="form-control" name="professores" id="professores" data-placeholder="Professores" multiple data-live-search="true"> 
				</select>	     
			</div>
		</div>
	</div>	
	
	<div class="row"> 
		<div class="col-lg-6">
			<div class="form-group"> 
				<select class="form-control selectpicker" name="salas" id="salas" data-placeholder="Salas" multiple data-live-search="true">
					<option>Salas</option>
				</select>	     
			</div>
		</div>
		
		<div class="col-lg-6">
			<div class="form-group"> 
				<div class="row">						
					<div class="col-lg-6 col-6">
						<input type="time" class="form-control" name="inicio" id="inicio" placeholder="Início" required>
					</div>	
					
					<div class="col-lg-6 col-6">
						<input type="time" class="form-control" name="fim" id="fim" placeholder="Fim" required>
					</div>
				</div>			     
			</div>
		</div> 
	</div>	
	
	<div>
		<div class="form-group text-center">
			<button type="submit" class="btn btn-primary">Salvar</button>
		</div> 
	</div>
	 
   
 
</form>

</div>