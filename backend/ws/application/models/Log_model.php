<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class Log_model extends CI_Model{
    function insert($data){
        $query = $this->db->get_where('devices', array('unique_id' => $data['device']['uniqueId']))->row();
        if($query){
            //update
            $insert_data = array(
               'wifi_name' => $data['ssid'],
               'wifi_rssi' => $data['rssi']
            );
            $this->db->where('id', $query->id);
            $this->db->update('devices', $insert_data);
        
            $this->db->where('FK_id_devices', $query->id);
            $this->db->delete('devices_bluetooth');

            if(isset($data['bluetooth']) && sizeof($data['bluetooth']) > 0){
                
                foreach ($data['bluetooth'] as $key => $bluetooth) {
                    $device_bluetooth = array('name' => $bluetooth['name'],
                        'rssi' => $bluetooth['rssi'],
                        'identifier' => $bluetooth['id'],
                        'connected' => (isset($bluetooth['connected']) ? $bluetooth['connected'] : 0),
                        'FK_id_devices' => $query->id
                    );
                    $this->db->insert('devices_bluetooth', $device_bluetooth);
                }
                
            }
        
        }else{
            //insert
            $insert_data = array(
               'os' => $data['device']['os'],
               'brand' => $data['device']['name'],
               'unique_id' => $data['device']['uniqueId'],
               'wifi_name' => $data['ssid'],
               'wifi_rssi' => $data['rssi']
            );

            $res = $this->db->insert('devices', $insert_data);
            if (!$res) {
              // if query returns null
              $msg = $this->db->_error_message();
              $num = $this->db->_error_number();

              var_dump($msg);
            }else{
                $insert_id = $this->db->insert_id();
                if ($insert_id){
                     if(isset($data['bluetooth']) && sizeof($data['bluetooth']) > 0){
                
                        foreach ($data['bluetooth'] as $key => $bluetooth) {
                            $device_bluetooth = array('name' => $bluetooth['name'],
                                'rssi' => $bluetooth['rssi'],
                                'identifier' => $bluetooth['id'],
                                'connected' => (isset($bluetooth['connected']) ? $bluetooth['connected'] : 0),
                                'FK_id_devices' => $insert_id
                            );
                            $this->db->insert('devices_bluetooth', $device_bluetooth);
                        }
                        
                     }
                }
            }

            return ($insert_id > 0);
        }

        return false;
        //return ($this->db->insert('log', $data))  ?  true  : false;
    }  
}

?>