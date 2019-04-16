# Proyecto backend para practica final Modulo 3 "Cloud computing"
# Sistema de Administracion de Productos Ayala Center

# Requerimientos de sistema
1. NodeJS
2. Navegador web (firefox, chrome)
3. Mongo Server installed


## Pasos de instalacion y prueba
$ cd backend
$ npm install
$ node app.js
$ abrir el navegador http://localhost:3000

## API REST Enpoints Productos
GET /api/prod

POST /api/prod
	Body Sample:
	{
		"sucursal": "SUC-02" ,
		"cantidad": "1" ,
		"nombre": "Pintura Monopol",
		"description": "Pintura Monopol Color rojo de 1L.",
		"codigo": "f-2565",
		"bar_code": "4456789123546",
		"tipo" : "Ferreteria"
	}	

DELETE /api/prod/<_id>


## API REST Enpoints Sucursales
GET /api/suc

POST /api/suc
Body Sample:
	{
		"encargado": "Julio Cesar U." ,
		"telefono": "4720202" ,
		"nombre": "Sucursal Sacaba",
		"description": "Sucursal Sacaba frente al mercado principal.",
		"codigo": "SUC-02"
	}	

DELETE /api/suc/<_id>

## API REST Enpoints User
GET /api/user

POST /api/user
Body Sample:
	{
		"ci":"6400202",
		"nombre":"Juan Windzor",
		"apellido":"Urena",
		"encargado":"Julio C. U.",
		"telefono": "77416233",
		"sucursal":"Suc-01" 
	}

DELETE /api/user/<_id>