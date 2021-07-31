<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

	public function __construct(){
        parent::__construct();
        date_default_timezone_set('America/Mazatlan');
    }
    function index(){
    	header("Access-Control-Allow-Origin: *");
    	$this->load->model('log_model');
	
        echo json_encode(['success' => $this->log_model->insert($_POST)]);
    }
}