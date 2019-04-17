import axios from 'axios';
import {apiurl} from './urlManager.js';
import {getData} from './storageManager.js'; 
import {tokenKey, userKey} from './keyManager.js';
 
var apiManager = {
	login: function(email, pwd, cb, cb2){
		axios.post(`${apiurl}user/login`, {
	      	email: email,
	      	password: pwd,
	    },{
	      	headers: {
	        	"Access-Control-Allow-Origin": "*",
	        	'Content-Type': 'application/json',
	      	}
	    }).then((response) => {
	    	cb(response);
	    }).catch((error) =>{
	    	cb2(error);
	    });
	},
	getAnnouncementData: async function(cb){
		const userobj = await getData(userKey);
		const user = JSON.parse(userobj);
		console.log(user);
		const {country_id, deptt_id} = user;
		getData(tokenKey)
			.then((value) => {
				console.log(value);
				axios.get(`${apiurl}content/announcement/${deptt_id}/${country_id}`, {
		          headers: {
		            Accept: 'application/json',
		            'Content-Type': 'application/json',
		            'access-token': value
		          }
		        }).then((response) => {
		          console.log(response);
		          cb(response);
		        });
			});
	},
	getNewsItData: async function(cb){
		const userobj = await getData(userKey);
		const user = JSON.parse(userobj);
		console.log(user);
		const {country_id, deptt_id} = user;
		getData(tokenKey)
			.then((value) => {
				console.log(value);
				axios.get(`${apiurl}content/newsit/${deptt_id}/${country_id}`, {
		          headers: {
		            Accept: 'application/json',
		            'Content-Type': 'application/json',
		            'access-token': value
		          }
		        }).then((response) => {
		          console.log(response);
		          cb(response);
		        });
			});
	},
	getPolicyCategory: async function(cb){
		getData(tokenKey)
			.then((value) => {
				console.log(value);
				axios.get(`${apiurl}policy/category`, {
		          headers: {
		            Accept: 'application/json',
		            'Content-Type': 'application/json',
		            'access-token': value
		          }
		        }).then((response) => {
		          console.log(response);
		          cb(response);
		        });
			});
	},
	getPolicyData: async function(catid, cb){
		const userobj = await getData(userKey);
		const user = JSON.parse(userobj);
		console.log(user);
		const {country_id, deptt_id} = user;
		getData(tokenKey)
			.then((value) => {
				console.log(value);
				axios.get(`${apiurl}content/policy/${deptt_id}/${country_id}/${catid}`, {
		          headers: {
		            Accept: 'application/json',
		            'Content-Type': 'application/json',
		            'access-token': value
		          }
		        }).then((response) => {
		          console.log(response);
		          cb(response);
		        });
			});
	},
	getVideos: async function(typeid, cb){
		const userobj = await getData(userKey);
		const user = JSON.parse(userobj);
		console.log(user);
		const {country_id, deptt_id} = user;
		getData(tokenKey)
			.then((value) => {
				console.log(value);
				axios.get(`${apiurl}download/video/${typeid}/${deptt_id}/${country_id}`, {
		          headers: {
		            Accept: 'application/json',
		            'Content-Type': 'application/json',
		            'access-token': value
		          }
		        }).then((response) => {
		          console.log(response);
		          cb(response);
		        });
			});
	},
	addComplain: function(photo, complain_desc, complain_employee, complain_product, complain_category, cb){
		getData(tokenKey)
			.then((value) => {
		        axios.post(`${apiurl}complain`, {
			      	photo: photo,
			      	complain_desc: complain_desc,
			      	complain_employee: complain_employee,
			      	complain_product: complain_product,
			      	complain_category: complain_category	
			    },{
			      	headers: {
				            Accept: 'application/json',
				            'Content-Type': 'application/json',
				            'access-token': value
			      	}
			    }).then((response) => {
			    	console.log(response);
			    	cb(response);
			    });
			});
		
	},
};
module.exports=apiManager;