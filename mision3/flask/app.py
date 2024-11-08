from flask import Flask, render_template, request
import mysql.connector

nombre="test"
apellido="tes"

conexion1=mysql.connector.connect(host="localhost", user="root", passwd="",database="foodscan")
#cursor1=conexion1.cursor()
# cursor1.execute("show tables")
# for tabla in cursor1:
#     print(tabla)

cursor1=conexion1.cursor()
cursor1.execute("select * from users")
for fila in cursor1:
    nombre= fila[1]
    apellido = fila[2]
conexion1.close()
print(nombre)
print(apellido)

# Crear la aplicación de Flask
app = Flask(__name__)

# Definir una ruta básica
@app.route("/", methods=['GET', 'POST'])
def home():
    nombre="test"
    apellido="tes"
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')
    mensaje = str(nombre) + str(apellido)

    # mensaje = "Bienvenido a mi aplicación con Flask"
    return render_template("index.html", mensaje=mensaje)

# Ejecutar la aplicación
if __name__ == "__main__":
    app.run(debug=True)

