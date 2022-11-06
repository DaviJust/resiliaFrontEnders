// //Vai avisar o usuario que enviou a mensagem
// document.getElementById('sweetalert').addEventListener('click',function(){
// 	swal("Recuperação de senha enviada!", "Cheque sua caixa de entrada, lixeira e(ou) spam", "success");
// })	

document.getElementById('sweetalert').addEventListener('click', function validaCadastro(evt) {
	var email = document.getElementById('email');
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var contErro = 0;
	var senha2 = document.getElementById("senha")

	/* Validação do campo email e senha */
	// caixa_email = document.getAnimations('emailRecuperar');
	if (email.value == "" || senha2.value == "") {
		swal("E-mail ou senha incompleto(s) ou errado(s)", "Por favor, corrija", "error");
	} else if (filtro.test(email.value) && senha2.value.length > 6) {
		swal("Bem vindo!", "Bons estudos", "success");
	} else {
		swal("E-mail incompleto ou errado", "Corrija seu e-mail", "error");
		contErro += 1;
	}

	if (contErro > 0) {
		evt.preventDefault();
	}
})