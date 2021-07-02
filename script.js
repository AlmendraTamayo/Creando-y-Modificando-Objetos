//Funcion constructora para Consultorio

function Consultorio(nombre, pacientes){
    this._nombre = nombre;
    this._pacientes = pacientes;

    Object.defineProperty(this, "nombre",{
        get: function(){
            return this._nombre
        },
        set: function(nombre){
            this._nombre = nombre;
        }
    })
    Object.defineProperty(this, "pacientes",{
        get: function(){
            return this._pacientes
        },
        set: function(pacientes){
            this._pacientes = pacientes;
        }
    })

}

//Funcion constructora para Paciente


function Paciente(nombre, edad, rut, diagnostico){
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;
    
    Object.defineProperty(this, "nombre",{
        get: function(){
            return this._nombre
        },
        set: function(nombre){
            this._nombre = nombre;
        }
    })
    Object.defineProperty(this, "edad",{
        get: function(){
            return this._edad
        },
        set: function(edad){
            this._edad = edad;
        }
    })
    Object.defineProperty(this, "rut",{
        get: function(){
            return this._rut
        },
        set: function(rut){
            this._rut = rut;
        }
    })
    Object.defineProperty(this, "diagnostico",{
        get: function(){
            return this._diagnostico
        },
        set: function(diagnostico){
            this._diagnostico = diagnostico;
        }
    })

}

//Métodoss

Consultorio.prototype.mostrarTodosLosPacientes = function(){
    return this._pacientes
}

Consultorio.prototype.buscarpornombre = function(nombre){
    var indicearray = -1;

    for (var i = 0; i < this._pacientes.length; i += 1) {
      if (this._pacientes[i]._nombre === nombre) {
        indicearray = i;
      }
    }
  
    if (indicearray >= 0) {
      return this._pacientes[indicearray];
    } else {
      return null;
    }
  };

  Paciente.prototype.mostrarDatosPacientes= function(){
      return [this._nombre, this._edad, this._rut, this._diagnostico]
  }

  //Instanciando nuevos objetos


  var paciente1= new Paciente ("Almendra",27,"18.614.880-0","Hipotiroidismo")
  var paciente2= new Paciente ("Esteban",28,"18.314.380-3","Diabetes")
  var paciente3= new Paciente ("Gloria",54,"11.314.380-K","Hipertensión")
  var paciente4= new Paciente ("Cristian",55,"8.314.380-4","Artrosis")
  var paciente5= new Paciente ("José",33,"17.314.380-4","Lumbago")

  var consultorio1 = new Consultorio ("Consultorio Las Condes",[paciente1,
    paciente2,
    paciente3,
    paciente4,
    paciente5])

//Modificar nombre de paciente 3
paciente3.nombre="Juan"

//MOstrar datos de los pacientes

    console.log(paciente1.mostrarDatosPacientes())
    console.log(paciente2.mostrarDatosPacientes())
    console.log(paciente3.mostrarDatosPacientes())
    console.log(paciente4.mostrarDatosPacientes())
    console.log(paciente5.mostrarDatosPacientes())
   
//Encontrar paciente por nombre
    console.log(consultorio1.buscarpornombre("Almendra")) //paciente encontrado
    console.log(consultorio1.buscarpornombre("Juan")) //paciente encontrado
    console.log(consultorio1.buscarpornombre("Joseph")) //paciente no encontrado

// Mostrar todos los pacientes
    console.log(consultorio1.mostrarTodosLosPacientes())