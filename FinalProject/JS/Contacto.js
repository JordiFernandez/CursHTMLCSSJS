function GuardaDatosForm(){
	var aux = CreateObject("Scripting.FileSystemObject"); 
   	var txt = aux.CreateTextFile("../DB.txt", true); 
   	txt.writeline($('#Nombre').value);
   	txt.writeline($('#Apellido').value);
   	txt.writeline($('#Telefono').value);
   	txt.writeline($('#Mail').value);
   	xt.writeline($('#Descripcion').value);
   	txt.writeline('----------');
   	txt.Close();

}