import mysql.connector

conexion1=mysql.connector.connect(host="localhost", user="root", passwd="",database="foodscan")
cursor1=conexion1.cursor()
# cursor1.execute("show tables")
# for tabla in cursor1:
#     print(tabla)
cursor1=conexion1.cursor()
cursor1.execute("select * from orders")
for fila in cursor1:
    print(fila[3])
conexion1.close()