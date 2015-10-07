<?php
require 'mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem']; 

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->CharSet = 'UTF-8';
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Host = 'smtp.galindoservicoseletricos.com.br';
$mail->Username = 'contato@galindoservicoseletricos.com.br';                 // SMTP username
$mail->Password = 'Dedeco01_';                           // SMTP password
$mail->Port = 587; 

$mail->From = 'contato@galindoservicoseletricos.com.br';
$mail->FromName = 'Contato de '.$nome;
$mail->addAddress('contato@galindoservicoseletricos.com.br', 'Contato');

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $assunto;
$mail->Body    = '<b>Mensagem do usuario '.$nome.' ('.$email.')'.'</b><br><br>';
$mail->Body    .= $mensagem;


if(!$mail->send()) {
    echo "<script> alert('Falha no envio da mensagem!'); window.location.href='/index.html'</script>";
} else {
    echo "<script> alert('Mensagem enviada com sucesso!'); window.location.href='/index.html'</script>";
}
?>