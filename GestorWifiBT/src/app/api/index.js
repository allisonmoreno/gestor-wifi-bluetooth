import axios from "axios";
import DeviceInfo from "react-native-device-info";
import { Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import qs from 'qs';

const axiosInstance = axios.create({
	method: 'post',
	baseURL: 'https://rayvaldez.com.mx/ws/',
	headers: {
		"Cache-Control": "no-cache",
		//"Content-Type":"application/x-www-form-urlencoded",
		"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    	"Access-Control-Allow-Origin": "*",
    	"Accept": "application/json"
    },
	timeout: 10000
});

axiosInstance.interceptors.request.use(
	async config => {
		config.data = getParams(config.data);
		config.data = qs.stringify(config.data);
		//console.log('axios data', JSON.stringify(config));
		return config
	},
	error => {
		//console.log('axios error', error);
		return Promise.reject(error)
	}
);


const DevicePlatform = Platform.OS;
const DeviceName = Platform.OS == "ios" ? DeviceInfo.getDeviceId() : DeviceInfo.getModel();
const UniqueId = DeviceInfo.getUniqueId();

const responseBody = (response) => response;

function getParams(params) {
	return {
		device: {
			name: DeviceName,
			os: DevicePlatform,
			uniqueId: UniqueId
		},
		...params
	}
}

const requests = {
	post: (url, body) => {
		return axiosInstance
			.post(url, body)
			.then(responseBody)
	}
}


const Generales = {
	log: (params) =>
		requests.post('', params),
}

export default {
	Generales
};