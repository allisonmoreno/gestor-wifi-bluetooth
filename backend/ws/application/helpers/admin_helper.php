<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

include "password_hasher.php";
/**
 * This function is used to print the content of any data
 */
function pre($data){
    echo "<pre>";
    print_r($data);
    echo "</pre>";
}

/**
 * This function used to get the CI instance
 */
if(!function_exists('get_instance')){
    function get_instance(){
        $CI = &get_instance();
    }
}

/**
 * This function used to generate the hashed password
 * @param {string} $plainPassword : This is plain text password
 */
if(!function_exists('getHashedPassword')){
    function getHashedPassword($plainPassword){
        return password_hash($plainPassword, PASSWORD_DEFAULT);
    }
}

/**
 * This function used to generate the hashed password
 * @param {string} $plainPassword : This is plain text password
 * @param {string} $hashedPassword : This is hashed password
 */
if(!function_exists('verifyHashedPassword')){
    function verifyHashedPassword($plainPassword, $hashedPassword){
        return password_verify($plainPassword, $hashedPassword) ? true : false;
    }
}

/**
 * This method used to get current browser agent
 */
if(!function_exists('getBrowserAgent')){
    function getBrowserAgent(){
        $CI = get_instance();
        $CI->load->library('user_agent');

        $agent = '';

        if ($CI->agent->is_browser()){
            $agent = $CI->agent->browser().' '.$CI->agent->version();
        }else if ($CI->agent->is_robot()){
            $agent = $CI->agent->robot();
        }else if ($CI->agent->is_mobile()){
            $agent = $CI->agent->mobile();
        }else{
            $agent = 'Unidentified User Agent';
        }

        return $agent;
    }
}

if(!function_exists('setProtocol')){
    function setProtocol(){
        $CI = &get_instance();
                    
        $CI->load->library('email');
        
        $config['protocol'] = PROTOCOL;
        $config['mailpath'] = MAIL_PATH;
        $config['smtp_host'] = SMTP_HOST;
        $config['smtp_port'] = SMTP_PORT;
        $config['smtp_user'] = SMTP_USER;
        $config['smtp_pass'] = SMTP_PASS;
        $config['charset'] = "utf-8";
        $config['mailtype'] = "html";
        $config['newline'] = "\r\n";
        
        $CI->email->initialize($config);
        
        return $CI;
    }
}

if(!function_exists('emailConfig')){
    function emailConfig(){
        $CI->load->library('email');
        $config['protocol'] = PROTOCOL;
        $config['smtp_host'] = SMTP_HOST;
        $config['smtp_port'] = SMTP_PORT;
        $config['mailpath'] = MAIL_PATH;
        $config['charset'] = 'UTF-8';
        $config['mailtype'] = "html";
        $config['newline'] = "\r\n";
        $config['wordwrap'] = TRUE;
    }
}

if(!function_exists('sendEmail')){
    function sendEmail($template,$data,$subject,$to,$altBody = false){
        //return false;
        $CI = setProtocol();        
        
        $CI->email->from(EMAIL_FROM, FROM_NAME);
        $CI->email->bcc('web02@upc.tax');
        $CI->email->subject($subject." - Colegio SAM");
        $CI->email->message($CI->load->view('email/'.$template, array('data' => $data), TRUE));
        $CI->email->to($to);
        if($altBody){
            $CI->email->set_alt_message($altBody);
        }
        $status = $CI->email->send();

        //print_r($CI->email->print_debugger());
        //die();
        
        return $status;
    }
}

if(!function_exists('setFlashData')){
    function setFlashData($status, $flashMsg){
        $CI = get_instance();
        $CI->session->set_flashdata($status, $flashMsg);
    }
}

if(!function_exists('randomPassword')){
    function randomPassword(){
        $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        $pass = [];
        $alphaLength = strlen($alphabet) - 1;
        for ($i = 0; $i < 8; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass);
    }
}


?>