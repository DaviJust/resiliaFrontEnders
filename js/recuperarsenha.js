// //Vai avisar o usuario que enviou a mensagem
// document.getElementById('sweetalert').addEventListener('click',function(){
// 	swal("Recuperação de senha enviada!", "Cheque sua caixa de entrada, lixeira e(ou) spam", "success");
// })	

document.getElementById('sweetalert').addEventListener('click', function validaCadastro(evt) {
	var email = document.getElementById('email');
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var contErro = 0;


	/* Validação do campo email */
	// caixa_email = document.getAnimations('emailRecuperar');
	if (filtro.test(email.value) && email.value != "") {
		swal("Recuperação de senha enviada!", "Cheque sua caixa de entrada, lixeira e(ou) spam", "success");
	} else {
		swal("E-mail incompleto ou errado", "Corrija seu e-mail", "error");
	}
})