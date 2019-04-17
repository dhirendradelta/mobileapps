import{AsyncStorage} from 'react-native';
import {loginStatusKey,tokenKey,userKey} from './keyManager.js'; 
var storageManager = {
	getData: function(key){
		return AsyncStorage.getItem(key);
	},
	setData: async function(key, value){
		await AsyncStorage.setItem(key, value);
	},
	setJsonData: async function(key, value){
		await AsyncStorage.setItem(key, JSON.stringify(value));
	},
	removeAll: async function(){
		await AsyncStorage.setItem(loginStatusKey, '');
		await AsyncStorage.setItem(tokenKey, '');
		await AsyncStorage.setItem(userKey, '');
	}
};
module.exports=storageManager;